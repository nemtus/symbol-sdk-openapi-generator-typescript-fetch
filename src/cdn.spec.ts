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
      // @ts-ignore
      delete global.window;
    }
  });

  it('should attach symbolSdkOpenAPIGeneratorTypeScriptFetch to window object', async () => {
    // Import cdn module which should attach to window
    await import('./cdn');
    
    expect((window as any).symbolSdkOpenAPIGeneratorTypeScriptFetch).toBeDefined();
  });

  it('should export all API classes through window object', async () => {
    // Import cdn module
    await import('./cdn');
    
    const sdk = (window as any).symbolSdkOpenAPIGeneratorTypeScriptFetch;
    
    // Check that all API classes are available
    expect(sdk.AccountRoutesApi).toBeDefined();
    expect(sdk.BlockRoutesApi).toBeDefined();
    expect(sdk.ChainRoutesApi).toBeDefined();
    expect(sdk.FinalizationRoutesApi).toBeDefined();
    expect(sdk.HashLockRoutesApi).toBeDefined();
    expect(sdk.MetadataRoutesApi).toBeDefined();
    expect(sdk.MosaicRoutesApi).toBeDefined();
    expect(sdk.MultisigRoutesApi).toBeDefined();
    expect(sdk.NamespaceRoutesApi).toBeDefined();
    expect(sdk.NetworkRoutesApi).toBeDefined();
    expect(sdk.NodeRoutesApi).toBeDefined();
    expect(sdk.ReceiptRoutesApi).toBeDefined();
    expect(sdk.RestrictionAccountRoutesApi).toBeDefined();
    expect(sdk.RestrictionMosaicRoutesApi).toBeDefined();
    expect(sdk.SecretLockRoutesApi).toBeDefined();
    expect(sdk.TransactionRoutesApi).toBeDefined();
    expect(sdk.TransactionStatusRoutesApi).toBeDefined();
  });

  it('should export all runtime utilities and classes through window object', async () => {
    // Import cdn module
    await import('./cdn');
    
    const sdk = (window as any).symbolSdkOpenAPIGeneratorTypeScriptFetch;
    
    // Classes
    expect(sdk.Configuration).toBeDefined();
    expect(sdk.BaseAPI).toBeDefined();
    expect(sdk.RequiredError).toBeDefined();
    expect(sdk.FetchError).toBeDefined();
    expect(sdk.ResponseError).toBeDefined();
    expect(sdk.JSONApiResponse).toBeDefined();
    expect(sdk.VoidApiResponse).toBeDefined();
    expect(sdk.BlobApiResponse).toBeDefined();
    expect(sdk.TextApiResponse).toBeDefined();
    
    // Constants and utilities
    expect(sdk.BASE_PATH).toBeDefined();
    expect(sdk.DefaultConfig).toBeDefined();
    expect(sdk.COLLECTION_FORMATS).toBeDefined();
    
    // Functions
    expect(sdk.querystring).toBeDefined();
    expect(sdk.exists).toBeDefined();
    expect(sdk.mapValues).toBeDefined();
    expect(sdk.canConsumeForm).toBeDefined();
  });

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

  it('should export the same content as index module', async () => {
    // Import cdn module
    await import('./cdn');
    const cdnExports = (window as any).symbolSdkOpenAPIGeneratorTypeScriptFetch;
    
    // Check that cdn exports match index exports
    expect(Object.keys(cdnExports).sort()).toEqual(Object.keys(indexExports).sort());
  });
});