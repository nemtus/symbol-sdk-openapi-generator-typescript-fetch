# symbol-sdk-openapi-generator-typescript-axios

Symbol SDK for TypeScript with OpenAPI Generator typescript-axios

Note: Currently, This is a very experimental level.

## For package users

### Install

```bash
npm install @nemtus/symbol-sdk-openapi-generator-typescript-axios
```

### Usage

Example with no requestParameters

```typescript
import {
  Configuration,
  ConfigurationParameters,
  NodeInfoDTO,
  NodeRoutesApi,
} from '@nemtus/symbol-sdk-openapi-generator-typescript-axios';

const configurationParameters: ConfigurationParameters = {
  basePath: 'https://symbol-sakura-16.next-web-technology.com:3001',
};
const configuration: Configuration = new Configuration(configurationParameters);
const nodeRoutesApi: NodeRoutesApi = new NodeRoutesApi(configuration);
const response = await nodeRoutesApi.getNodeInfo();
const nodeInfoDTO: NodeInfoDTO = response.data;
console.log(response.status); // Example: 200
console.log(response.statusText); // Example: 'OK'
console.dir(nodeInfoDTO, { depth: null });
/* Example: 
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
```

Example with requestParameters

```typescript
import {
  AccountInfoDTO,
  AccountRoutesApi,
  AccountRoutesApiGetAccountInfoRequest,
  Configuration,
  ConfigurationParameters,
} from '@nemtus/symbol-sdk-openapi-generator-typescript-axios';

const configurationParameters: ConfigurationParameters = {
  basePath: 'https://symbol-sakura-16.next-web-technology.com:3001',
};
const configuration: Configuration = new Configuration(configurationParameters);
const accountRoutesApi: AccountRoutesApi = new AccountRoutesApi(configuration);
const requestParameters: AccountRoutesApiGetAccountInfoRequest = {
  accountId: 'NCSIOEWE2364XXP65426W3RUGBRYOAGR3KMMCIA',
};
const response = await accountRoutesApi.getAccountInfo(requestParameters);
const accountInfoDTO: AccountInfoDTO = response.data;
console.log(response.status); // Example: 200
console.log(response.statusText); // Example: "OK"
console.dir(accountInfoDTO, { depth: null });
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
        startHeight: '1447200',
        totalFeesPaid: '0',
        beneficiaryCount: 0,
        rawScore: '476538883720'
      },
      {
        startHeight: '1446480',
        totalFeesPaid: '0',
        beneficiaryCount: 1,
        rawScore: '476509686441'
      },
      {
        startHeight: '1445760',
        totalFeesPaid: '0',
        beneficiaryCount: 1,
        rawScore: '476481049034'
      },
      {
        startHeight: '1445040',
        totalFeesPaid: '0',
        beneficiaryCount: 1,
        rawScore: '476353869759'
      },
      {
        startHeight: '1444320',
        totalFeesPaid: '0',
        beneficiaryCount: 1,
        rawScore: '476325431930'
      }
    ],
    mosaics: [
      { id: '6BED913FA20223F8', amount: '516203401572' },
      { id: '24F7CF825DBCDD42', amount: '499999886' },
      { id: '310378C18A140D1B', amount: '923' },
      { id: '6AE25FA5E8CA0646', amount: '1000000000' }
    ],
    importance: '476509686441',
    importanceHeight: '1447200'
  },
  id: '60517BE5CCA17918A561056D'
}
*/
```

Example with CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Load from CDN or a single file bundled with webpack -->
    <script src="https://cdn.jsdelivr.net/npm/@nemtus/symbol-sdk-openapi-generator-typescript-axios@0.1.0/index.min.js"></script>
  </head>
  <body>
    <script>
      (async () => {
        const symbolSdk = window.symbolSdkOpenAPIGeneratorTypeScriptAxios;
        const configurationParameters = {
          basePath: 'http://symbol-sakura-16.next-web-technology.com:3000',
        };
        const configuration = new symbolSdk.Configuration(configurationParameters);

        const nodeRoutesApi = new symbolSdk.NodeRoutesApi(configuration);
        const responseNodeInfo = await nodeRoutesApi.getNodeInfo();
        console.log(responseNodeInfo.status);
        console.log(responseNodeInfo.statusText);
        console.log(responseNodeInfo.data);

        const accountRoutesApi = new symbolSdk.AccountRoutesApi(configuration);
        const requestParameters = {
          accountId: 'NCSIOEWE2364XXP65426W3RUGBRYOAGR3KMMCIA',
        };
        const responseAccountInfo = await accountRoutesApi.getAccountInfo(requestParameters);
        console.log(responseAccountInfo.status);
        console.log(responseAccountInfo.statusText);
        console.log(responseAccountInfo.data);
      })();
    </script>
  </body>
</html>
```

## For Developers

If you don't have java installed, you need to install it.

### 1. Build openapi3.yml

If necessary update git submodule of `symbol-openapi`.

```bash
cd symbol-openapi
npm install
npm run build
```

Use symbol-openapi/_build/openapi3.yml to generate REST API client code.

### 2. Generate REST API Client Code

```bash
cd ..
npm install
npm run openapi:set:version
npm run openapi:generate
npm run build
```

Then, REST API client code will be generated in `src/api`.
Do not edit `src/api` manually.

## We use

- [symbol/symbol-openapi](https://github.com/symbol/symbol-openapi) to generate openapi3.yml
- [OpenAPI Generator](https://openapi-generator.tech/) to generate REST API client codes
  - Especially [typescript-axios Generator](https://openapi-generator.tech/docs/generators/typescript-axios)
- [cosmos-client/cosmos-client-ts](https://github.com/cosmos-client/cosmos-client-ts) as a reference of package structure

We would like to thank all the contributors to the above tools.
