import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

let server;
let drillingData;
let tkrsData;
const projectRoot = fileURLToPath(new URL('../', import.meta.url));

before(async () => {
  server = await createServer({
    root: projectRoot,
    base: '/',
    server: { middlewareMode: true, hmr: false, watch: null },
  });
  ({ drillingData, tkrsData } = await server.ssrLoadModule('/src/data/data.ts'));
});

after(async () => {
  await server?.close();
});

test('catalogue preserves all scenarios and unique IDs across categories', () => {
  assert.equal(drillingData.length, 18);
  assert.equal(tkrsData.length, 14);
  const scenarios = [...drillingData, ...tkrsData];
  assert.equal(new Set(scenarios.map(scenario => scenario.id)).size, scenarios.length);
});

test('categories match the filter that presents each scenario', () => {
  assert.ok(drillingData.every(scenario => scenario.category === 'Бурение'));
  assert.ok(tkrsData.every(scenario => scenario.category === 'ТКРС'));
});

test('each scenario has a complete description and an existing illustration', () => {
  for (const scenario of [...drillingData, ...tkrsData]) {
    for (const field of ['title', 'notification', 'cause']) {
      assert.ok(scenario[field].trim(), `Scenario ${scenario.id}: missing ${field}`);
    }
    assert.ok(existsSync(new URL(`..${scenario.image}`, import.meta.url)), scenario.image);
  }
});
