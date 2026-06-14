import { describe, it, expect } from 'vitest';
import * as exports from './index';
import * as api from './api';

describe('index exports', () => {
  it('re-exports every runtime member of ./api from the package root', () => {
    // Guards against the barrel dropping a re-export and auto-covers future
    // additions (new models/classes). Interfaces are type-only (erased at
    // runtime) so they never appear here.
    const keys = Object.keys(api);
    expect(keys.length).toBeGreaterThan(0);
    for (const key of keys) {
      expect((exports as Record<string, unknown>)[key]).toBe((api as Record<string, unknown>)[key]);
    }
  });

  it('exposes the getNetworkInflationAtHeight endpoint', () => {
    expect(typeof exports.NetworkRoutesApi.prototype.getNetworkInflationAtHeight).toBe('function');
    expect(typeof exports.NetworkRoutesApi.prototype.getNetworkInflationAtHeightRaw).toBe('function');
  });

  it('exports working serializers for the network inflation / fork heights models', () => {
    for (const name of ['NetworkInflationDTOFromJSON', 'NetworkInflationDTOToJSON', 'ForkHeightsDTOFromJSON', 'ForkHeightsDTOToJSON']) {
      expect(typeof (exports as Record<string, unknown>)[name]).toBe('function');
    }
    // Round-trip with an empty object (no dependency on exact field names).
    const inflation = exports.NetworkInflationDTOFromJSON({});
    expect(exports.NetworkInflationDTOToJSON(inflation)).toBeDefined();
    const fork = exports.ForkHeightsDTOFromJSON({});
    expect(exports.ForkHeightsDTOToJSON(fork)).toBeDefined();
  });

  // Existence is covered by the `typeof === 'function'` / type-shape checks below
  // (a constructor/function/constant that is missing would fail those too), so the
  // plain `toBeDefined()` enumerations are intentionally omitted to avoid duplication.

  it('should export all classes as constructors', () => {
    // Verify that all API classes are actually constructors
    expect(typeof exports.AccountRoutesApi).toBe('function');
    expect(typeof exports.BlockRoutesApi).toBe('function');
    expect(typeof exports.ChainRoutesApi).toBe('function');
    expect(typeof exports.FinalizationRoutesApi).toBe('function');
    expect(typeof exports.HashLockRoutesApi).toBe('function');
    expect(typeof exports.MetadataRoutesApi).toBe('function');
    expect(typeof exports.MosaicRoutesApi).toBe('function');
    expect(typeof exports.MultisigRoutesApi).toBe('function');
    expect(typeof exports.NamespaceRoutesApi).toBe('function');
    expect(typeof exports.NetworkRoutesApi).toBe('function');
    expect(typeof exports.NodeRoutesApi).toBe('function');
    expect(typeof exports.ReceiptRoutesApi).toBe('function');
    expect(typeof exports.RestrictionAccountRoutesApi).toBe('function');
    expect(typeof exports.RestrictionMosaicRoutesApi).toBe('function');
    expect(typeof exports.SecretLockRoutesApi).toBe('function');
    expect(typeof exports.TransactionRoutesApi).toBe('function');
    expect(typeof exports.TransactionStatusRoutesApi).toBe('function');

    // Runtime classes
    expect(typeof exports.Configuration).toBe('function');
    expect(typeof exports.BaseAPI).toBe('function');
    expect(typeof exports.RequiredError).toBe('function');
    expect(typeof exports.FetchError).toBe('function');
    expect(typeof exports.ResponseError).toBe('function');
    expect(typeof exports.JSONApiResponse).toBe('function');
    expect(typeof exports.VoidApiResponse).toBe('function');
    expect(typeof exports.BlobApiResponse).toBe('function');
    expect(typeof exports.TextApiResponse).toBe('function');
  });

  it('should export utility functions', () => {
    // Verify utility functions are exported and are functions
    expect(typeof exports.querystring).toBe('function');
    expect(typeof exports.exists).toBe('function');
    expect(typeof exports.mapValues).toBe('function');
    expect(typeof exports.canConsumeForm).toBe('function');
  });

  it('should export constants with correct types', () => {
    // Verify constants are exported with correct types
    expect(typeof exports.BASE_PATH).toBe('string');
    expect(exports.DefaultConfig).toBeInstanceOf(exports.Configuration);
    expect(typeof exports.COLLECTION_FORMATS).toBe('object');
  });
});
