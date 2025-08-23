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

    // Assert
    expect(response).toStrictEqual({
      id: '6448A0F0BC43F1FE61E92ED7',
      account: {
        version: 1,
        address: '68A48712C4D6FDCBDDFEEF35EB6E3430638700D1DA98C120',
        addressHeight: '1',
        publicKey: 'B86304B01045894ED9250B3DCD6313DC2EC0DD529B4E864EA376A2F341D3CFD4',
        publicKeyHeight: '447',
        accountType: 1,
        supplementalPublicKeys: {
          linked: {
            publicKey: '5F87A37D1EAD570F4D0FD4C11A9D5EED5ABE82EF2E992B97CCDAC84F241470E0',
          },
          node: undefined,
          vrf: {
            publicKey: '806E9448598C922B371DA8CFD7E16E8F5F53594B3AECE13F0708778A4480A752',
          },
          voting: undefined,
        },
        activityBuckets: [],
        mosaics: [
          { id: '6BED913FA20223F8', amount: '198559030' },
          { id: '048D27F66E2B4D54', amount: '1' },
          { id: '1228B33FAF1BA5EC', amount: '777' },
          { id: '1A5FC2F48C0047F0', amount: '150' },
          { id: '24F7CF825DBCDD42', amount: '499999886' },
          { id: '284A75C16CF6ED78', amount: '20' },
          { id: '310378C18A140D1B', amount: '99' },
          { id: '4F2DC8BA863044C6', amount: '4' },
          { id: '6AE25FA5E8CA0646', amount: '1000000000' },
          { id: '7ADBDCD78954D7AC', amount: '10' },
        ],
        importance: '0',
        importanceHeight: '0',
      },
    });
  });
});
