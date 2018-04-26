const { version } = require('../index');

/**
 * The main client to interact with.
 */
class CFClient
{
    /**
     * Creates a new Animu Instance.
     * 
     * @param {String} userAgent The user agent you provide. (It can be null)
     */
    constructor(userAgent)
    {
        /**
         * The User Agent that you set in the constructor.
         * 
         * @type {String}
         */
        this.userAgent = userAgent;

        /**
         * The base url.
         * 
         * @private
         * @type {String}
         */
        this.baseURL = 'https://computerfreaker.cf/api';

        /**
         * Snekfetch
         * 
         * @private
         * @type {Snekfetch}
         */
        this._snek = require('snekfetch');
    }

    /**
     * Gets an anime photo.
     * 
     * @returns {Promise<String>} the URL passed by the API.
     */
    async getAnimu()
    {
        return new Promise((res, rej) => 
        {
            return this._snek.get(`${this.baseURL}/anime/read.php`)
                .set('User-Agent', this.userAgent || `animu.js (v${version} https://github.com/CFCorp/animu.js)`)
                .then((result) => res(result.body))
                .catch((err) => rej(err));
        });
    }

    async getHentai()
    {
        return new Promise((res, rej) =>
        {
            return this._snek.get(`${this.baseURL}/hentai/read.php`)
                .set('User-Agent', this.userAgent || `animu.js (v${version} https://github.com/CFCorp/animu.js)`)
                .then((result) => res(result.body))
                .catch(err => rej(err));
        });
    }
}

module.exports = CFClient;