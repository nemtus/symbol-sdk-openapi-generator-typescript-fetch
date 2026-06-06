import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fixtures from '../../../_shared/fixtures.cjs';

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

  // Assert (shared fixture; volatile fields relaxed there)
  expect(messages).toHaveLength(1);
  fixtures.assertNodeInfo(expect, messages[0]);
});
