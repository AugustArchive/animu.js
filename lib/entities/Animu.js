/**
 * The base of all of this request.
 */
class Animu
{
    /**
     * Creates a new Animu request instance.
     * 
     * @param {any} body The body of the request.
     */
    constructor(body)
    {
        /**
         * The URL of the animu.
         * 
         * @private
         * @type {String}
         */
        this.url = body.url;
    }
}

module.exports = Animu;