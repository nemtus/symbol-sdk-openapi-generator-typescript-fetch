// Single source of truth for the live-node integration assertions shared by the
// nodejs-javascript, nodejs-typescript and browser-cdn test projects. Editing the
// expected values (or how volatile fields are relaxed) here keeps all three in sync
// and prevents the drift that happens when the same assertions are copy-pasted.
//
// These run against a live mainnet node, so only fields that are genuinely stable
// for the target account/node are matched exactly; values that drift over time
// (node version, REST document id, token holdings, importance) are asserted by
// type/shape. `expect` is injected so the helpers work with both vitest and
// @playwright/test, using only matchers common to both (toBe / toEqual).

const expectedNodeInfo = {
  publicKey: '2CEFBCE2E5EA5DD5BA61B302C33002CDA1EDB122EFD18713AF02ABFA9C73A28C',
  networkGenerationHashSeed: '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6',
  roles: 3,
  port: 7900,
  networkIdentifier: 104,
  friendlyName: 'NEMTUS',
  host: 'symbol-main-1.nemtus.com',
  nodePublicKey: 'B56A3C73CA345A00CDDC84CFDF711CD67B2CCE10BEB82CB74835086774FE587F',
};

// Account identity fields that only change if the account links/unlinks keys.
const expectedStableAccount = {
  version: 1,
  address: '68A48712C4D6FDCBDDFEEF35EB6E3430638700D1DA98C120',
  addressHeight: '1',
  publicKey: 'B86304B01045894ED9250B3DCD6313DC2EC0DD529B4E864EA376A2F341D3CFD4',
  publicKeyHeight: '447',
  accountType: 1,
  supplementalPublicKeys: {
    linked: { publicKey: '5F87A37D1EAD570F4D0FD4C11A9D5EED5ABE82EF2E992B97CCDAC84F241470E0' },
    vrf: { publicKey: '806E9448598C922B371DA8CFD7E16E8F5F53594B3AECE13F0708778A4480A752' },
  },
};

// `version` is the node software version and changes whenever the node is upgraded,
// so assert its type rather than an exact value.
function assertNodeInfo(expect, response) {
  const { version, ...rest } = response;
  expect(typeof version).toBe('number');
  expect(rest).toEqual(expectedNodeInfo);
}

// `id` is the REST database document id (changes on resync); token holdings,
// activity buckets and importance change whenever the account transacts, so those
// are asserted by shape only.
function assertAccountInfo(expect, response) {
  expect(typeof response.id).toBe('string');

  const account = response.account;
  expect(account.version).toBe(expectedStableAccount.version);
  expect(account.address).toBe(expectedStableAccount.address);
  expect(account.addressHeight).toBe(expectedStableAccount.addressHeight);
  expect(account.publicKey).toBe(expectedStableAccount.publicKey);
  expect(account.publicKeyHeight).toBe(expectedStableAccount.publicKeyHeight);
  expect(account.accountType).toBe(expectedStableAccount.accountType);
  expect(account.supplementalPublicKeys).toEqual(expectedStableAccount.supplementalPublicKeys);

  expect(Array.isArray(account.activityBuckets)).toBe(true);
  expect(Array.isArray(account.mosaics)).toBe(true);
  account.mosaics.forEach((mosaic) => {
    expect(typeof mosaic.id).toBe('string');
    expect(typeof mosaic.amount).toBe('string');
  });
  expect(typeof account.importance).toBe('string');
  expect(typeof account.importanceHeight).toBe('string');
}

module.exports = { expectedNodeInfo, expectedStableAccount, assertNodeInfo, assertAccountInfo };
