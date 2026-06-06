import {
  AccountInfoDTO,
  AccountRoutesApi,
  Configuration,
  ConfigurationParameters,
  GetAccountInfoRequest,
} from '@nemtus/symbol-sdk-openapi-generator-typescript-fetch';
import { test, expect, describe } from 'vitest';
import * as fixtures from '../../../_shared/fixtures.cjs';

describe('getAccountInfo', () => {
  test('return valid response', async () => {
    // Arrange
    const configurationParameters: ConfigurationParameters = {
      basePath: 'https://symbol-main-1.nemtus.com:3001',
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
