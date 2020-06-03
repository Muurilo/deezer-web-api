"use strict";

var rq = require("request-promise");

/**
 * API Instance
 */

class Deezer {
    constructor() {
        this.uri = "https://api.deezer.com";
    }

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
     *    var res = await DeezerClient.getAlbum("1423549")
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
            uri: this.uri + "/album/" + album_id.toString(),
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getAlbumComments("1423549")
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
            uri: this.uri + "/album/" + album_id.toString() + "/comments",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getAlbumFans("1423549")
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
            uri: this.uri + "/album/" + album_id.toString() + "/fans",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getAlbumTracks("1423549")
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
            uri: this.uri + "/album/" + album_id + "/tracks",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getArtist("1423549")
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
            uri: this.uri + "/artist/" + artist_id,
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getArtistTopTracks("1423549")
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
            uri: this.uri + "/artist/" + artist_id + "/top",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getArtistAlbums("1423549")
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
            uri: this.uri + "/artist/" + artist_id + "/albums",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getArtistComments("1423549")
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
            uri: this.uri + "/artist/" + artist_id + "/comments",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getArtistFans("1423549")
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
            uri: this.uri + "/artist/" + artist_id + "/fans",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getRelatedArtists("1423549")
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
            uri: this.uri + "/artist/" + artist_id + "/related",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getArtistRadio("1423549")
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
            uri: this.uri + "/artist/" + artist_id + "/radio",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getArtistPlaylists("1423549")
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
            uri: this.uri + "/artist/" + artist_id + "/playlists",
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get chart</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getChart()
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
            uri: this.uri + "/chart/0",
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get chart tracks</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getChartTracks()
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
            uri: this.uri + "/chart/0/tracks",
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get chart albums</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getChartAlbums()
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
            uri: this.uri + "/chart/0/albums",
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get chart artists</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getChartArtists()
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
            uri: this.uri + "/chart/0/artists",
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get chart playlists</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getChartPlaylists()
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
            uri: this.uri + "/chart/0/playlists",
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get chart podcasts</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getChartPodcasts()
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
            uri: this.uri + "/chart/0/podcasts",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.getComment("123123")
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
            uri: this.uri + "/comment/" + comment_id,
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get editorials</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getEditorials()
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
            uri: this.uri + "/editorial",
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get episode</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getEpisode()
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
            uri: this.uri + "/episode/" + episode_id,
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get episode bookmark</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getEpisodeBookmark()
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
            uri: this.uri + "/episode/" + episode_id + "/bookmark",
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get genres</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getGenres()
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
            uri: this.uri + "/genre",
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get infos</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getInfos()
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
            uri: this.uri + "/infos",
            json: true,
        });
    }

    /**
     *
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get options</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getOptions()
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
            uri: this.uri + "/options",
            json: true,
        });
    }

    /**
     * @param {string} playlist_id ID of playlist to get info
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get playlist</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getPlaylist("4721934964")
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
            uri: this.uri + "/playlist/" + playlist_id,
            json: true,
        });
    }

    /**
     * @param {string} playlist_id ID of playlist to get comments
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get playlist comments</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getPlaylistComments("4721934964")
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
            uri: this.uri + "/playlist/" + playlist_id + "/comments",
            json: true,
        });
    }

    /**
     * @param {string} playlist_id ID of playlist to get fans
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get playlist fans</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getPlaylistFans("4721934964")
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
            uri: this.uri + "/playlist/" + playlist_id + "/fans",
            json: true,
        });
    }

    /**
     * @param {string} playlist_id ID of playlist to get tracks
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get playlist tracks</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getPlaylistTracks("4721934964")
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
            uri: this.uri + "/playlist/" + playlist_id + "/tracks",
            json: true,
        });
    }

    /**
     * @param {string} podcast_id ID of podcast to get info
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get podcast</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getPodcast("4721934964")
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
            uri: this.uri + "/podcast/" + podcast_id,
            json: true,
        });
    }

    /**
     * @param {string} podcast_id ID of podcast to get episodes
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get podcast episodes</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getPodcastEpisodes("4721934964")
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
            uri: this.uri + "/podcast/" + podcast_id + "/episodes",
            json: true,
        });
    }

    /**
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get radios</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getRadios()
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
            uri: this.uri + "/radio",
            json: true,
        });
    }

    /**
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get radio genres</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getRadiosGenres()
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
            uri: this.uri + "/radio/genres",
            json: true,
        });
    }

    /**
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get top radios</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getTopRadios()
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
            uri: this.uri + "/radio/top",
            json: true,
        });
    }

    /**
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get radio lists</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getRadiosLists()
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
            uri: this.uri + "/radio/lists",
            json: true,
        });
    }

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
     *    var res = await DeezerClient.search("album", "Blurryface")
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
     *    var res = await DeezerClient.search("Blurryface")
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
                uri: this.uri + "/search?q=" + query.toString(),
                json: true,
            });
        } else {
            return await rq.get({
                uri:
                    this.uri +
                    "/search/" +
                    type.toString() +
                    "?q=" +
                    query.toString(),
                json: true,
            });
        }
    }

    /**
     * @param {string} track_id ID of track to get info
     * @returns {promise} Returns a promise with the request
     * @example <caption>Get track info</caption>
     *var Deezer = require("deezer-web-api");
     *
     *var DeezerClient = new Deezer();
     *
     *async function example() {
     *    var res = await DeezerClient.getTrack("74606742")
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
            uri: this.uri + "/track/" + track_id,
            json: true,
        });
    }
}

module.exports = Deezer;
