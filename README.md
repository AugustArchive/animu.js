# animu.js
animu.js is a Node.js wrapper for my friend [CF](https://computerfreaker.cf)'s Anime API.

## Examples
`Without User-Agent`:
```js
const { CFClient } = require('animu.js');
const client = new CFClient(); // w/o User-Agent

client.getAnime().then((url) => {
    console.log(`Here is the animu: ${url}`);
});
client.getHentai().then((body) => {
    console.log(`Hentai 4 u: ${body.url}`);
});
```
`With User-Agent`:
```js
const { CFClient } = require('animu.js');
const client = new CFClient('animu.js/Production/v0.0.1');

client.getAnimu().then((b) => {
    console.log(`Here is your animu: ${b.url}`);
});
client.getHentai().then((body) => {
    console.log(`Hentai 4 u: ${body.url}`);
});
```

## Releases
* v0.0.1 => Initial Release
* v0.0.2 =>
    * `CFClient#getHentai` function;
    * Fixed entry point after installing;
    * If no User Agent, uses the default `animu.js ({GITHUB} v0.0.2)`
