import {
  Configuration,
  ConfigurationParameters,
  NodeInfoDTO,
  NodeRoutesApi,
  FetchAPI,
} from '@nemtus/symbol-sdk-openapi-generator-typescript-fetch';
import fetch from 'node-fetch'; // Note: Use version 2.x
import { test, expect } from 'vitest';

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

  // Assert
  expect(response).toStrictEqual({
    version: 16777991,
    publicKey: '2CEFBCE2E5EA5DD5BA61B302C33002CDA1EDB122EFD18713AF02ABFA9C73A28C',
    networkGenerationHashSeed: '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6',
    roles: 3,
    port: 7900,
    networkIdentifier: 104,
    friendlyName: 'NEMTUS',
    host: 'symbol-main-1.nemtus.com',
    nodePublicKey: 'B56A3C73CA345A00CDDC84CFDF711CD67B2CCE10BEB82CB74835086774FE587F',
  });
});
