import { describe, it, expect } from 'vitest';
import * as sdk from './index';
import { Configuration } from './index';

// A permissive stand-in usable as any request-parameter shape (string / number /
// array / nested DTO) so every generated method can build its request without
// throwing before the HTTP call. It stringifies to 'DUMMY', is a no-op when called,
// yields an empty list for array operations, and returns itself for any property.
const anyParam: any = new Proxy(function () {}, {
  get(_target, prop) {
    if (prop === Symbol.toPrimitive || prop === 'toString' || prop === 'valueOf') return () => 'DUMMY';
    if (prop === Symbol.iterator) return function* () {};
    if (prop === 'then') return undefined; // never look like a thenable
    if (prop === 'length') return 0;
    if (['map', 'filter', 'forEach', 'slice'].includes(prop as string)) return () => [];
    return anyParam;
  },
  apply: () => anyParam,
});

function mockFetch() {
  const calls: { url: string; init: RequestInit }[] = [];
  const fetchApi = async (url: string, init: RequestInit): Promise<Response> => {
    calls.push({ url: String(url), init });
    return { status: 200, json: async () => ({}), text: async () => '{}' } as unknown as Response;
  };
  return { calls, fetchApi };
}

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

type ApiCtor = new (configuration: Configuration) => Record<string, (...args: unknown[]) => Promise<unknown>>;

const apiClasses = Object.entries(sdk).filter(([name, value]) => name.endsWith('RoutesApi') && typeof value === 'function') as unknown as [
  string,
  ApiCtor,
][];

describe('every generated API method issues a well-formed request (mocked transport)', () => {
  it('discovers every RoutesApi class exported by the package', () => {
    expect(apiClasses.length).toBe(17);
  });

  for (const [className, ApiClass] of apiClasses) {
    const methods = Object.getOwnPropertyNames(ApiClass.prototype).filter(
      (name) => name !== 'constructor' && !name.endsWith('Raw') && typeof ApiClass.prototype[name] === 'function',
    );

    it(`${className} exposes at least one endpoint method`, () => {
      expect(methods.length).toBeGreaterThan(0);
    });

    for (const method of methods) {
      it(`${className}.${method} builds a single well-formed request`, async () => {
        const { fetchApi, calls } = mockFetch();
        const api = new ApiClass(new Configuration({ fetchApi }));

        // Methods that take request parameters have arity >= 1; parameter-less
        // endpoints take only the optional initOverrides (arity 0).
        const args = (ApiClass.prototype[method] as (...a: unknown[]) => unknown).length >= 1 ? [anyParam] : [];
        try {
          await api[method](...args);
        } catch {
          // The empty mock body may not satisfy the response model's parser; we only
          // assert on the request, which is built and sent before any parsing.
        }

        expect(calls).toHaveLength(1);
        expect(calls[0].url).toMatch(/^https?:\/\/[^ ]+/);
        expect(HTTP_METHODS).toContain(calls[0].init.method);
      });
    }
  }
});
