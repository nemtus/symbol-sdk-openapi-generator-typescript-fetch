import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import * as indexExports from './index';

describe('cdn exports', () => {
  let originalWindow: any;

  beforeEach(() => {
    // Save original window object
    originalWindow = global.window;
    // Create mock window object
    global.window = {} as any;
    // Reset modules
    vi.resetModules();
  });

  afterEach(() => {
    // Restore original window object
    if (originalWindow !== undefined) {
      global.window = originalWindow;
    } else {
      // @ts-expect-error window is non-optional on the global type; deleting it is intentional in this test
      delete global.window;
    }
  });

  it('should attach symbolSdkOpenAPIGeneratorTypeScriptFetch to window object', async () => {
    // Import cdn module which should attach to window
    await import('./cdn');

    expect((window as any).symbolSdkOpenAPIGeneratorTypeScriptFetch).toBeDefined();
  });

  // Existence is covered by the `typeof === 'function'` / type-shape checks below
  // (and by the "same content as index module" key-set check), so the plain
  // `toBeDefined()` enumerations are intentionally omitted to avoid duplication.

  it('should export all classes as constructors through window object', async () => {
    // Import cdn module
    await import('./cdn');

    const sdk = (window as any).symbolSdkOpenAPIGeneratorTypeScriptFetch;

    // Verify that all API classes are actually constructors
    expect(typeof sdk.AccountRoutesApi).toBe('function');
    expect(typeof sdk.BlockRoutesApi).toBe('function');
    expect(typeof sdk.ChainRoutesApi).toBe('function');
    expect(typeof sdk.FinalizationRoutesApi).toBe('function');
    expect(typeof sdk.HashLockRoutesApi).toBe('function');
    expect(typeof sdk.MetadataRoutesApi).toBe('function');
    expect(typeof sdk.MosaicRoutesApi).toBe('function');
    expect(typeof sdk.MultisigRoutesApi).toBe('function');
    expect(typeof sdk.NamespaceRoutesApi).toBe('function');
    expect(typeof sdk.NetworkRoutesApi).toBe('function');
    expect(typeof sdk.NodeRoutesApi).toBe('function');
    expect(typeof sdk.ReceiptRoutesApi).toBe('function');
    expect(typeof sdk.RestrictionAccountRoutesApi).toBe('function');
    expect(typeof sdk.RestrictionMosaicRoutesApi).toBe('function');
    expect(typeof sdk.SecretLockRoutesApi).toBe('function');
    expect(typeof sdk.TransactionRoutesApi).toBe('function');
    expect(typeof sdk.TransactionStatusRoutesApi).toBe('function');

    // Runtime classes
    expect(typeof sdk.Configuration).toBe('function');
    expect(typeof sdk.BaseAPI).toBe('function');
    expect(typeof sdk.RequiredError).toBe('function');
    expect(typeof sdk.FetchError).toBe('function');
    expect(typeof sdk.ResponseError).toBe('function');
    expect(typeof sdk.JSONApiResponse).toBe('function');
    expect(typeof sdk.VoidApiResponse).toBe('function');
    expect(typeof sdk.BlobApiResponse).toBe('function');
    expect(typeof sdk.TextApiResponse).toBe('function');
  });

  it('should export utility functions through window object', async () => {
    // Import cdn module
    await import('./cdn');

    const sdk = (window as any).symbolSdkOpenAPIGeneratorTypeScriptFetch;

    // Verify utility functions are exported and are functions
    expect(typeof sdk.querystring).toBe('function');
    expect(typeof sdk.exists).toBe('function');
    expect(typeof sdk.mapValues).toBe('function');
    expect(typeof sdk.canConsumeForm).toBe('function');
  });

  it('should export constants with correct types through window object', async () => {
    // Import cdn module
    await import('./cdn');

    const sdk = (window as any).symbolSdkOpenAPIGeneratorTypeScriptFetch;

    // Verify constants are exported with correct types
    expect(typeof sdk.BASE_PATH).toBe('string');
    expect(sdk.DefaultConfig).toBeInstanceOf(sdk.Configuration);
    expect(typeof sdk.COLLECTION_FORMATS).toBe('object');
  });

  it('should expose the getNetworkInflationAtHeight endpoint and model serializers through window object', async () => {
    // Import cdn module
    await import('./cdn');

    const sdk = (window as any).symbolSdkOpenAPIGeneratorTypeScriptFetch;

    // Network inflation endpoint
    expect(typeof sdk.NetworkRoutesApi.prototype.getNetworkInflationAtHeight).toBe('function');
    expect(typeof sdk.NetworkRoutesApi.prototype.getNetworkInflationAtHeightRaw).toBe('function');

    // Serializers for the network inflation / fork heights models (the interfaces
    // themselves are type-only and erased at runtime, so verify their runtime helpers)
    for (const name of ['NetworkInflationDTOFromJSON', 'NetworkInflationDTOToJSON', 'ForkHeightsDTOFromJSON', 'ForkHeightsDTOToJSON']) {
      expect(typeof sdk[name]).toBe('function');
    }
  });

  it('should export the same content as index module', async () => {
    // Import cdn module
    await import('./cdn');
    const cdnExports = (window as any).symbolSdkOpenAPIGeneratorTypeScriptFetch;

    // Check that cdn exports match index exports. This auto-covers future
    // additions: any new runtime export of ./index must also be exposed through
    // the CDN bundle. (Values aren't compared by identity because beforeEach calls
    // vi.resetModules(), so the dynamically imported module is a separate instance.)
    expect(Object.keys(cdnExports).sort()).toEqual(Object.keys(indexExports).sort());
  });
});
