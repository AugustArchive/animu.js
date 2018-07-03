const Animu = require('../lib');
const client = new Animu.Client('animu.js/v0.0.0/Example');

client.anime()
    .then((result) => console.log(result.url))
    .catch((error) => console.error(error));

client.hentai()
    .then((result) => console.log(result.url))
    .catch((error) => console.error(error));

client.dva()
    .then((result) => console.log(result.url))
    .catch((error) => console.error(error));

client.trap()
    .then((result) => console.log(result.url))
    .catch((error) => console.error(error));

client.hug()
    .then((result) => console.log(result.url))
    .catch((error) => console.error(error));

client.baguette()
    .then((result) => console.log(result.url))
    .catch((error) => console.error(error));