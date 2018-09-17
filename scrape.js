const httpClient = require('cheerio-httpcli');

async function fetch() {
  const baseUrl = 'https://www.mbs.jp/jounetsu/';
  const result = await httpClient.fetch(baseUrl, 'sjis');
  const $ = result.$;

  date = $('#PeopleDate').text().trim().match(/\d{4}年\d{2}月\d{2}日/gi);
  name = $('#People h3').text().trim();
  jobName = $('#jobname').text().trim();

  let text = date + "放送の情熱大陸は" + name + "(" + jobName + ")  https://www.mbs.jp/jounetsu/";

  return text
}


module.exports = {
  fetch
}
