import {
  Configuration,
  ConfigurationParameters,
  NodeInfoDTO,
  NodeRoutesApi,
  FetchAPI,
} from '@nemtus/symbol-sdk-openapi-generator-typescript-fetch';
import fetch from 'node-fetch'; // Note: Use version 2.x
import { test, expect } from 'vitest';
import * as fixtures from '../../../_shared/fixtures.cjs';

test('getNodeInfo return valid response', async () => {
  // Arrange
  const configurationParameters: ConfigurationParameters = {
    basePath: 'https://symbol-main-1.nemtus.com:3001',
    fetchApi: fetch as unknown as FetchAPI, // Note: Maybe there's a better way to do this.
  };
  const configuration: Configuration = new Configuration(configurationParameters);
  const nodeRoutesApi: NodeRoutesApi = new NodeRoutesApi(configuration);

  // Act
  const response: NodeInfoDTO = await nodeRoutesApi.getNodeInfo();

  // Assert (shared fixture; volatile fields relaxed there)
  fixtures.assertNodeInfo(expect, response);
});
