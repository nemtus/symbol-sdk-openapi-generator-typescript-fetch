import { test, expect } from '@playwright/test';
import * as path from 'path';

test('getAccountInfo returns valid response via console.log', async ({ page }) => {
  // Arrange
  const messages: any[] = [];
  page.on('console', async (msg) => {
    if (msg.type() === 'log') {
      const args = await Promise.all(msg.args().map((arg) => arg.jsonValue()));
      if (args.length > 0 && typeof args[0] === 'object') {
        messages.push(args[0]);
      }
    }
  });
  const htmlPath = path.resolve(__dirname, 'getAccountInfo.html');

  // Act
  await page.goto(`file://${htmlPath}`);
  await page.waitForTimeout(5000);

  // Assert
  expect(messages).toHaveLength(1);
  const response = messages[0];
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
