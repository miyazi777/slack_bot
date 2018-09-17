const scrape = require('./scrape.js');
const slack = require('./slack');

async function main() {
  const result = await scrape.fetch();
  const token = "xoxb-435735693280-436769171090-LgdDR2aE4hrA69x61zu4rl6m";
  await slack.postMessage(token, "#general", result);
}

main();
