module.exports = (rq, uri) => {
    return {
        /**
         *
         * @param {string} artist_id ID of artist to get info
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get artist info</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.users.getArtist("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getArtist(artist_id) {
            return await rq.get({
                uri: uri + "/artist/" + artist_id,
                json: true,
            });
        },

        /**
         *
         * @param {string} artist_id ID of artist to get top tracks
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get artist top tracks</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.users.getArtistTopTracks("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getArtistTopTracks(artist_id) {
            return await rq.get({
                uri: uri + "/artist/" + artist_id + "/top",
                json: true,
            });
        },

        /**
         *
         * @param {string} artist_id ID of artist to get albums
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get artist albums</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.users.getArtistAlbums("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getArtistAlbums(artist_id) {
            return await rq.get({
                uri: uri + "/artist/" + artist_id + "/albums",
                json: true,
            });
        },

        /**
         *
         * @param {string} artist_id ID of artist to get comments
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get artist comments</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.users.getArtistComments("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getArtistComments(artist_id) {
            return await rq.get({
                uri: uri + "/artist/" + artist_id + "/comments",
                json: true,
            });
        },

        /**
         *
         * @param {string} artist_id ID of artist to get fans
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get artist fans</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.users.getArtistFans("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getArtistFans(artist_id) {
            return await rq.get({
                uri: uri + "/artist/" + artist_id + "/fans",
                json: true,
            });
        },

        /**
         *
         * @param {string} artist_id ID of artist to get related artists
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get related artists</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.users.getRelatedArtists("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getRelatedArtists(artist_id) {
            return await rq.get({
                uri: uri + "/artist/" + artist_id + "/related",
                json: true,
            });
        },

        /**
         *
         * @param {string} artist_id ID of artist to get radio
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get artist radio</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.users.getArtistRadio("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getArtistRadio(artist_id) {
            return await rq.get({
                uri: uri + "/artist/" + artist_id + "/radio",
                json: true,
            });
        },

        /**
         *
         * @param {string} artist_id ID of artist to get playlists
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get artist playlists</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.users.getArtistPlaylists("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getArtistPlaylists(artist_id) {
            return await rq.get({
                uri: uri + "/artist/" + artist_id + "/playlists",
                json: true,
            });
        },
    };
};
