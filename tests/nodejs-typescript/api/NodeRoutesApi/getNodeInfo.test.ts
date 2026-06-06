import {
  Configuration,
  ConfigurationParameters,
  NodeInfoDTO,
  NodeRoutesApi,
} from '@nemtus/symbol-sdk-openapi-generator-typescript-fetch';
import { test, expect } from 'vitest';
import * as fixtures from '../../../_shared/fixtures.cjs';

test('getNodeInfo return valid response', async () => {
  // Arrange
  const configurationParameters: ConfigurationParameters = {
    basePath: 'https://symbol-main-1.nemtus.com:3001',
  };
  const configuration: Configuration = new Configuration(configurationParameters);
  const nodeRoutesApi: NodeRoutesApi = new NodeRoutesApi(configuration);

  // Act
  const response: NodeInfoDTO = await nodeRoutesApi.getNodeInfo();

  // Assert (shared fixture; volatile fields relaxed there)
  fixtures.assertNodeInfo(expect, response);
});
