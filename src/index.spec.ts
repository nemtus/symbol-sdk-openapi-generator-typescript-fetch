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

  it('exposes the getNetworkInflationAtHeight endpoint added in spec v1.0.4', () => {
    expect(typeof exports.NetworkRoutesApi.prototype.getNetworkInflationAtHeight).toBe('function');
    expect(typeof exports.NetworkRoutesApi.prototype.getNetworkInflationAtHeightRaw).toBe('function');
  });

  it('exports working serializers for the models added in spec v1.0.4', () => {
    for (const name of [
      'GetNetworkInflationAtHeight200ResponseFromJSON',
      'GetNetworkInflationAtHeight200ResponseToJSON',
      'NetworkConfigurationDTOForkHeightsFromJSON',
      'NetworkConfigurationDTOForkHeightsToJSON',
    ]) {
      expect(typeof (exports as Record<string, unknown>)[name]).toBe('function');
    }
    // Round-trip with an empty object (no dependency on exact field names).
    const parsed = exports.GetNetworkInflationAtHeight200ResponseFromJSON({});
    expect(exports.GetNetworkInflationAtHeight200ResponseToJSON(parsed)).toBeDefined();
    const fork = exports.NetworkConfigurationDTOForkHeightsFromJSON({});
    expect(exports.NetworkConfigurationDTOForkHeightsToJSON(fork)).toBeDefined();
  });

  it('should export all API classes from ./api', () => {
    // Check that all API classes are exported
    expect(exports.AccountRoutesApi).toBeDefined();
    expect(exports.BlockRoutesApi).toBeDefined();
    expect(exports.ChainRoutesApi).toBeDefined();
    expect(exports.FinalizationRoutesApi).toBeDefined();
    expect(exports.HashLockRoutesApi).toBeDefined();
    expect(exports.MetadataRoutesApi).toBeDefined();
    expect(exports.MosaicRoutesApi).toBeDefined();
    expect(exports.MultisigRoutesApi).toBeDefined();
    expect(exports.NamespaceRoutesApi).toBeDefined();
    expect(exports.NetworkRoutesApi).toBeDefined();
    expect(exports.NodeRoutesApi).toBeDefined();
    expect(exports.ReceiptRoutesApi).toBeDefined();
    expect(exports.RestrictionAccountRoutesApi).toBeDefined();
    expect(exports.RestrictionMosaicRoutesApi).toBeDefined();
    expect(exports.SecretLockRoutesApi).toBeDefined();
    expect(exports.TransactionRoutesApi).toBeDefined();
    expect(exports.TransactionStatusRoutesApi).toBeDefined();
  });

  it('should export all runtime utilities and classes', () => {
    // Classes
    expect(exports.Configuration).toBeDefined();
    expect(exports.BaseAPI).toBeDefined();
    expect(exports.RequiredError).toBeDefined();
    expect(exports.FetchError).toBeDefined();
    expect(exports.ResponseError).toBeDefined();
    expect(exports.JSONApiResponse).toBeDefined();
    expect(exports.VoidApiResponse).toBeDefined();
    expect(exports.BlobApiResponse).toBeDefined();
    expect(exports.TextApiResponse).toBeDefined();

    // Constants and utilities
    expect(exports.BASE_PATH).toBeDefined();
    expect(exports.DefaultConfig).toBeDefined();
    expect(exports.COLLECTION_FORMATS).toBeDefined();

    // Functions
    expect(exports.querystring).toBeDefined();
    expect(exports.exists).toBeDefined();
    expect(exports.mapValues).toBeDefined();
    expect(exports.canConsumeForm).toBeDefined();
  });

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
