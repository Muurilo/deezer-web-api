module.exports = (rq, uri) => {
    return {
        /**
         *
         * @param {string} album_id ID of album to get info
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get information from an album</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getAlbum("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getAlbum(album_id) {
            return await rq.get({
                uri: uri + "/album/" + album_id.toString(),
                json: true,
            });
        },

        /**
         *
         * @param {string} album_id ID of album to get comments
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get album comments</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getAlbumComments("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getAlbumComments(album_id) {
            return await rq.get({
                uri: uri + "/album/" + album_id.toString() + "/comments",
                json: true,
            });
        },

        /**
         *
         * @param {string} album_id ID of album to get fans
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get album fans</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getAlbumFans("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getAlbumFans(album_id) {
            return await rq.get({
                uri: uri + "/album/" + album_id.toString() + "/fans",
                json: true,
            });
        },

        /**
         *
         * @param {string} album_id ID of album to get tracks
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get album tracks</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getAlbumTracks("1423549")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getAlbumTracks(album_id) {
            return await rq.get({
                uri: uri + "/album/" + album_id + "/tracks",
                json: true,
            });
        },
        /**
         * @param {string} playlist_id ID of playlist to get info
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get playlist</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getPlaylist("4721934964")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getPlaylist(playlist_id) {
            return await rq.get({
                uri: uri + "/playlist/" + playlist_id,
                json: true,
            });
        },

        /**
         * @param {string} playlist_id ID of playlist to get comments
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get playlist comments</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getPlaylistComments("4721934964")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getPlaylistComments(playlist_id) {
            return await rq.get({
                uri: uri + "/playlist/" + playlist_id + "/comments",
                json: true,
            });
        },

        /**
         * @param {string} playlist_id ID of playlist to get fans
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get playlist fans</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getPlaylistFans("4721934964")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getPlaylistFans(playlist_id) {
            return await rq.get({
                uri: uri + "/playlist/" + playlist_id + "/fans",
                json: true,
            });
        },

        /**
         * @param {string} playlist_id ID of playlist to get tracks
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get playlist tracks</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getPlaylistTracks("4721934964")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getPlaylistTracks(playlist_id) {
            return await rq.get({
                uri: uri + "/playlist/" + playlist_id + "/tracks",
                json: true,
            });
        },

        /**
         * @param {string} podcast_id ID of podcast to get info
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get podcast</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getPodcast("4721934964")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getPodcast(podcast_id) {
            return await rq.get({
                uri: uri + "/podcast/" + podcast_id,
                json: true,
            });
        },

        /**
         * @param {string} podcast_id ID of podcast to get episodes
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get podcast episodes</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getPodcastEpisodes("4721934964")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getPodcastEpisodes(podcast_id) {
            return await rq.get({
                uri: uri + "/podcast/" + podcast_id + "/episodes",
                json: true,
            });
        },
        /**
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get radios</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getRadios()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getRadios() {
            return await rq.get({
                uri: uri + "/radio",
                json: true,
            });
        },

        /**
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get radio genres</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getRadiosGenres()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getRadioGenres() {
            return await rq.get({
                uri: uri + "/radio/genres",
                json: true,
            });
        },

        /**
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get top radios</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getTopRadios()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getTopRadios() {
            return await rq.get({
                uri: uri + "/radio/top",
                json: true,
            });
        },

        /**
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get radio lists</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getRadiosLists()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getRadioLists() {
            return await rq.get({
                uri: uri + "/radio/lists",
                json: true,
            });
        },

        /**
         * @param {string} track_id ID of track to get info
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get track info</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.musics.getTrack("74606742")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         *
         */

        async getTrack(track_id) {
            return await rq.get({
                uri: uri + "/track/" + track_id,
                json: true,
            });
        },
    };
};
