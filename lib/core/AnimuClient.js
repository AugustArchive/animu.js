module.exports = class AnimuClient {
    constructor(userAgent) {
        this.userAgent = userAgent || `animu.js/v${require('../index').version}/Production (https://github.com/CFCorp/animu.js)`;
        this.baseURL = require('../util/Constants').URL;
        this.s = require('snekfetch');
    }

    anime() {
        return new Promise((resolve, reject) => {
            this.s
                .get(`${this.baseURL}/anime`)
                .set('User-Agent', this.userAgent)
                .then((res) => resolve(res.body))
                .catch((error) => reject(error));
        });
    }

    hentai() {
        return new Promise((resolve, reject) => {
            this.s
                .get(`${this.baseURL}/hentai`)
                .set('User-Agent', this.userAgent)
                .then((res) => resolve(res.body))
                .catch((error) => reject(error));
        });
    }

    dva() {
        return new Promise((resolve, reject) => {
            this.s
                .get(`${this.baseURL}/dva`)
                .set('User-Agent', this.userAgent)
                .then((res) => resolve(res.body))
                .catch((error) => reject(error));
        });
    }

    trap() {
        return new Promise((resolve, reject) => {
            this.s
                .get(`${this.baseURL}/trap`)
                .set('User-Agent', this.userAgent)
                .then((res) => resolve(res.body))
                .catch((error) => reject(error));
        });
    }

    hug() {
        return new Promise((resolve, reject) => {
            this.s
                .get(`${this.baseURL}/hug`)
                .set('User-Agent', this.userAgent)
                .then((res) => resolve(res.body))
                .catch((error) => reject(error));
        });
    }

    baguette() {
        return new Promise((resolve, reject) => {
            this.s
                .get(`${this.baseURL}/baguette`)
                .set('User-Agent', this.userAgent)
                .then((res) => resolve(res.body))
                .catch((error) => reject(error));
        });
    }
}