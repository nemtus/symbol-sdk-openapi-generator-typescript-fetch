// Fetch the OpenAPI spec from the official symbol-openapi GitHub release instead
// of building it locally from the submodule. Building the spec required a large
// tree of dev-only tooling (swagger-cli / redocly / openapi-to-postmanv2 ...) that
// carries known RCE-class vulnerabilities. Consuming the already-published, version
// -pinned and checksum-verified artifact removes that attack surface entirely.
//
// To bump the spec version: update SPEC_VERSION, run `node fetch-openapi.js` once,
// read the printed actual SHA-256, and paste it into SPEC_SHA256.

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const SPEC_VERSION = 'v1.0.4';
const SPEC_SHA256 =
  'a74a8747731362b7ee6246cdf80ecbdd4815e43ecf3063903a3953bae5075ed8';
const SPEC_URL = `https://github.com/symbol/symbol-openapi/releases/download/${SPEC_VERSION}/openapi3.yml`;

const OUTPUT_DIR = path.join(__dirname, 'openapi-spec');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'openapi3.yml');

const MAX_REDIRECTS = 5;

function download(url, redirectsLeft) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'symbol-sdk-openapi-fetch' } }, (res) => {
        const { statusCode, headers } = res;
        // GitHub release assets redirect to a signed object storage URL.
        if (statusCode >= 300 && statusCode < 400 && headers.location) {
          res.resume();
          if (redirectsLeft <= 0) {
            reject(new Error('Too many redirects while fetching the spec'));
            return;
          }
          resolve(download(headers.location, redirectsLeft - 1));
          return;
        }
        if (statusCode !== 200) {
          res.resume();
          reject(new Error(`Unexpected status code ${statusCode} for ${url}`));
          return;
        }
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      })
      .on('error', reject);
  });
}

async function main() {
  console.log(`Fetching OpenAPI spec ${SPEC_VERSION} from ${SPEC_URL}`);
  const data = await download(SPEC_URL, MAX_REDIRECTS);

  const actual = crypto.createHash('sha256').update(data).digest('hex');
  if (actual !== SPEC_SHA256) {
    console.error('SHA-256 verification FAILED for the downloaded OpenAPI spec.');
    console.error(`  expected: ${SPEC_SHA256}`);
    console.error(`  actual:   ${actual}`);
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, data);
  console.log(
    `Verified (${data.length} bytes, sha256 ${actual}) and wrote ${path.relative(
      __dirname,
      OUTPUT_FILE,
    )}`,
  );
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
