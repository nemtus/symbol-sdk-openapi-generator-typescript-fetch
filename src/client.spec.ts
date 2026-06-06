import { describe, it, expect } from 'vitest';
import { AccountRoutesApi, Configuration, NodeRoutesApi, RequiredError, ResponseError } from './index';

interface MockResponse {
  status: number;
  body?: unknown;
}

// Inject a fake fetch so the generated client can be exercised deterministically,
// without any network or live-node dependency. Captures the requests it makes.
function mockFetch(queue: MockResponse[]) {
  const calls: { url: string; init: RequestInit }[] = [];
  const fetchApi = async (url: string, init: RequestInit): Promise<Response> => {
    calls.push({ url: String(url), init });
    const next = queue.shift() ?? { status: 200, body: {} };
    return {
      status: next.status,
      json: async () => next.body ?? {},
      text: async () => JSON.stringify(next.body ?? {}),
    } as unknown as Response;
  };
  return { calls, fetchApi };
}

describe('generated client behaviour (mocked transport)', () => {
  it('parses a successful response through the generated model', async () => {
    const { fetchApi, calls } = mockFetch([{ status: 200, body: { version: 42, friendlyName: 'mock-node', roles: 3 } }]);
    const api = new NodeRoutesApi(new Configuration({ fetchApi }));

    const response = await api.getNodeInfo();

    expect(response.version).toBe(42);
    expect(response.friendlyName).toBe('mock-node');
    expect(calls).toHaveLength(1);
    expect(calls[0].url).toContain('/node/info');
    expect(calls[0].init.method).toBe('GET');
  });

  it('builds the request path from path parameters', async () => {
    const { fetchApi, calls } = mockFetch([
      { status: 200, body: { id: 'doc-1', account: { address: 'ADDRESS', activityBuckets: [], mosaics: [] } } },
    ]);
    const api = new AccountRoutesApi(new Configuration({ fetchApi }));

    const response = await api.getAccountInfo({ accountId: 'TARGET_ACCOUNT' });

    expect(calls[0].url).toContain('/accounts/TARGET_ACCOUNT');
    expect(response.account?.address).toBe('ADDRESS');
  });

  it('throws RequiredError when a required parameter is missing', async () => {
    const { fetchApi } = mockFetch([]);
    const api = new AccountRoutesApi(new Configuration({ fetchApi }));

    await expect(api.getAccountInfo({} as never)).rejects.toBeInstanceOf(RequiredError);
  });

  it('throws ResponseError on a non-2xx status', async () => {
    const { fetchApi } = mockFetch([{ status: 404, body: { code: 'ResourceNotFound' } }]);
    const api = new NodeRoutesApi(new Configuration({ fetchApi }));

    await expect(api.getNodeInfo()).rejects.toBeInstanceOf(ResponseError);
  });
});
