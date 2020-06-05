module.exports = (rq, uri) => {
    return {
        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get chart</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getChart()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getChart() {
            return await rq.get({
                uri: uri + "/chart/0",
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get chart tracks</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getChartTracks()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getChartTracks() {
            return await rq.get({
                uri: uri + "/chart/0/tracks",
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get chart albums</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getChartAlbums()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getChartAlbums() {
            return await rq.get({
                uri: uri + "/chart/0/albums",
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get chart artists</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getChartArtists()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getChartArtists() {
            return await rq.get({
                uri: uri + "/chart/0/artists",
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get chart playlists</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getChartPlaylists()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getChartPlaylists() {
            return await rq.get({
                uri: uri + "/chart/0/playlists",
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get chart podcasts</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getChartPodcasts()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getChartPodcasts() {
            return await rq.get({
                uri: uri + "/chart/0/podcasts",
                json: true,
            });
        },
        /**
         *
         * @param {string} comment_id ID of comment to get info
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get comment info</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getComment("123123")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getComment(comment_id) {
            return await rq.get({
                uri: uri + "/comment/" + comment_id,
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get editorials</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getEditorials()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getEditorials() {
            return await rq.get({
                uri: uri + "/editorial",
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get episode</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getEpisode()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getEpisode(episode_id) {
            return await rq.get({
                uri: uri + "/episode/" + episode_id,
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get episode bookmark</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getEpisodeBookmark()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getEpisodeBookmark(episode_id) {
            return await rq.get({
                uri: uri + "/episode/" + episode_id + "/bookmark",
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get genres</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getGenres()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getGenres() {
            return await rq.get({
                uri: uri + "/genre",
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get infos</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getInfos()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getInfos() {
            return await rq.get({
                uri: uri + "/infos",
                json: true,
            });
        },

        /**
         *
         * @returns {promise} Returns a promise with the request
         * @example <caption>Get options</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.getOptions()
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         */

        async getOptions() {
            return await rq.get({
                uri: uri + "/options",
                json: true,
            });
        },
        /**
         * @param {string} type Type of request allowed types (album, artist, history, playlist, podcast, radio, track, user), if null will search for all types
         * @param {string} query Your search
         * @returns {promise} Returns a promise with the request
         * @example <caption>Search things</caption>
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.search("album", "Blurryface")
         *        .then((res) => {
         *            console.log(res);
         *        })
         *        .catch((err) => {
         *            console.log(err);
         *        });
         *}
         *example();
         *
         * // Or try this
         *
         *var Deezer = require("deezer-web-api");
         *
         *var DeezerClient = new Deezer();
         *
         *async function example() {
         *    var res = await DeezerClient.infos.search("Blurryface")
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

        async search(type, query) {
            if (!type) {
                return await rq.get({
                    uri: uri + "/search?q=" + query.toString(),
                    json: true,
                });
            } else {
                return await rq.get({
                    uri:
                        uri +
                        "/search/" +
                        type.toString() +
                        "?q=" +
                        query.toString(),
                    json: true,
                });
            }
        },
    };
};
