import { test, expect } from '@playwright/test';
import * as path from 'path';

test('getNodeInfo returns valid response via console.log', async ({ page }) => {
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
  const htmlPath = path.resolve(__dirname, 'getNodeInfo.html');

  // Act
  await page.goto(`file://${htmlPath}`);
  await page.waitForTimeout(5000);

  // Assert
  expect(messages).toHaveLength(1);
  const response = messages[0];
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
