const symbolSdk = require('@nemtus/symbol-sdk-openapi-generator-typescript-fetch');
const fetch = require('node-fetch');

(async () => {
  const configurationParameters = {
    basePath: 'http://symbol-sakura-16.next-web-technology.com:3000',
    fetchApi: fetch,
  };
  const configuration = new symbolSdk.Configuration(configurationParameters);
  const nodeRoutesApi = new symbolSdk.NodeRoutesApi(configuration);
  const response = await nodeRoutesApi.getNodeInfo();
  console.dir(response, { depth: null });
  // Example:
  /*
  {
    version: 16777987,
    publicKey: 'B86304B01045894ED9250B3DCD6313DC2EC0DD529B4E864EA376A2F341D3CFD4',
    networkGenerationHashSeed: '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6',
    roles: 3,
    port: 7900,
    networkIdentifier: 104,
    host: 'symbol-sakura-16.next-web-technology.com',
    friendlyName: 'next-web-technology',
    nodePublicKey: '9545F928A1B2FB4AC944BC1EC2F01FB84A503F6449B6BE3451B3F7A0F06B5BCF'
  }
  */
})();
