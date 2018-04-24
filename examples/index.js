const { CFClient, version } = require('../lib/index');
const client = new CFClient('animu.js-example/Production/0.0.1');

client.getAnimu().then((body) => {
    console.log(`[VERSION ${version}]: Here is your anime: ${body.url}`);
});
client.getHentai().then((b) => {
    console.log(`[VERSION ${version}]: Here is your hentai: ${b.url}`);
});