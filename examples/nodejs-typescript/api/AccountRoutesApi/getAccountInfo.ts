import {
  AccountInfoDTO,
  AccountRoutesApi,
  Configuration,
  ConfigurationParameters,
  FetchAPI,
  GetAccountInfoRequest,
} from '@nemtus/symbol-sdk-openapi-generator-typescript-fetch';
import fetch from 'node-fetch'; // Note: Use version 2.x

(async () => {
  const configurationParameters: ConfigurationParameters = {
    basePath: 'http://symbol-sakura-16.next-web-technology.com:3000',
    fetchApi: fetch as unknown as FetchAPI, // Note: Maybe there's a better way to do this.
  };
  const configuration: Configuration = new Configuration(configurationParameters);
  const accountRoutesApi: AccountRoutesApi = new AccountRoutesApi(configuration);
  const requestParameters: GetAccountInfoRequest = {
    accountId: 'NCSIOEWE2364XXP65426W3RUGBRYOAGR3KMMCIA',
  };
  const response: AccountInfoDTO = await accountRoutesApi.getAccountInfo(requestParameters);
  console.dir(response, { depth: null });
  // Example:
  /*
  {
    account: {
      version: 1,
      address: '68A48712C4D6FDCBDDFEEF35EB6E3430638700D1DA98C120',
      addressHeight: '1',
      publicKey: 'B86304B01045894ED9250B3DCD6313DC2EC0DD529B4E864EA376A2F341D3CFD4',
      publicKeyHeight: '447',
      accountType: 1,
      supplementalPublicKeys: {
        linked: {
          publicKey: '5F87A37D1EAD570F4D0FD4C11A9D5EED5ABE82EF2E992B97CCDAC84F241470E0'
        },
        vrf: {
          publicKey: '806E9448598C922B371DA8CFD7E16E8F5F53594B3AECE13F0708778A4480A752'
        }
      },
      activityBuckets: [
        {
          startHeight: '1455840',
          totalFeesPaid: '0',
          beneficiaryCount: 1,
          rawScore: '476665546298'
        },
        {
          startHeight: '1455120',
          totalFeesPaid: '0',
          beneficiaryCount: 0,
          rawScore: '476672260900'
        },
        {
          startHeight: '1454400',
          totalFeesPaid: '0',
          beneficiaryCount: 0,
          rawScore: '476678670151'
        },
        {
          startHeight: '1453680',
          totalFeesPaid: '0',
          beneficiaryCount: 0,
          rawScore: '476685156832'
        },
        {
          startHeight: '1452960',
          totalFeesPaid: '0',
          beneficiaryCount: 0,
          rawScore: '476691995197'
        }
      ],
      mosaics: [
        { id: '6BED913FA20223F8', amount: '516465569230' },
        { id: '24F7CF825DBCDD42', amount: '499999886' },
        { id: '310378C18A140D1B', amount: '923' },
        { id: '6AE25FA5E8CA0646', amount: '1000000000' }
      ],
      importance: '476665546298',
      importanceHeight: '1455840'
    },
    id: '60517BE5CCA17918A561056D'
  }
  */
})();
