# animu.js
animu.js is a Node.js wrapper for my friend [CF](https://computerfreaker.cf)'s Anime API.

## API
`Without User-Agent`:
```js
const { CFClient } = require('animu.js');
const client = new CFClient(); // w/o User-Agent

client.getAnime().then((url) => {
    console.log(`Here is the animu: ${url}`);
});
```
`With User-Agent`:
```js
const { CFClient } = require('animu.js');
const client = new CFClient('animu.js/Production/v0.0.1');

client.getAnime().then((url) => {
    console.log(`Here is your animu: ${url}`);
});
```