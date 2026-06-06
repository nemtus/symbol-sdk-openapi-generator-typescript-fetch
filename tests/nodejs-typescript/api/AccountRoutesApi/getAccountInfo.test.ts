import {
  AccountInfoDTO,
  AccountRoutesApi,
  Configuration,
  ConfigurationParameters,
  FetchAPI,
  GetAccountInfoRequest,
} from '@nemtus/symbol-sdk-openapi-generator-typescript-fetch';
import fetch from 'node-fetch'; // Note: Use version 2.x
import { test, expect, describe } from 'vitest';
import * as fixtures from '../../../_shared/fixtures.cjs';

describe('getAccountInfo', () => {
  test('return valid response', async () => {
    // Arrange
    const configurationParameters: ConfigurationParameters = {
      basePath: 'https://symbol-main-1.nemtus.com:3001',
      fetchApi: fetch as unknown as FetchAPI, // Note: Maybe there's a better way to do this.
    };
    const configuration: Configuration = new Configuration(configurationParameters);
    const accountRoutesApi: AccountRoutesApi = new AccountRoutesApi(configuration);
    const requestParameters: GetAccountInfoRequest = {
      accountId: 'NCSIOEWE2364XXP65426W3RUGBRYOAGR3KMMCIA',
    };

    // Act
    const response: AccountInfoDTO = await accountRoutesApi.getAccountInfo(requestParameters);

    // Assert (shared fixture; volatile fields relaxed there)
    fixtures.assertAccountInfo(expect, response);
  });
});
