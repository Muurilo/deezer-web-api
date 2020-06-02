"use strict";

var rq = require("request-promise");

class Deezer {
    constructor() {
        this.uri = "https://api.deezer.com";
    }

    async getAlbum(album_id) {
        return await rq.get({
            uri: this.uri + "/album/" + album_id.toString(),
            json: true,
        });
    }

    async getAlbumComments(album_id) {
        return await rq.get({
            uri: this.uri + "/album/" + album_id.toString() + "/comments",
            json: true,
        });
    }

    async getAlbumFans(album_id) {
        return await rq.get({
            uri: this.uri + "/album/" + album_id.toString() + "/fans",
            json: true,
        });
    }

    async getAlbumTracks(album_id) {
        return await rq.get({
            uri: this.uri + "/album/" + album_id + "/tracks",
            json: true,
        });
    }

    async getArtist(artist_id) {
        return await rq.get({
            uri: this.uri + "/artist/" + artist_id,
            json: true,
        });
    }

    async getArtistTopTracks(artist_id) {
        return await rq.get({
            uri: this.uri + "/artist/" + artist_id + "/top",
            json: true,
        });
    }

    async getArtistAlbums(artist_id) {
        return await rq.get({
            uri: this.uri + "/artist/" + artist_id + "/albums",
            json: true,
        });
    }

    async getArtistComments(artist_id) {
        return await rq.get({
            uri: this.uri + "/artist/" + artist_id + "/comments",
            json: true,
        });
    }

    async getArtistFans(artist_id) {
        return await rq.get({
            uri: this.uri + "/artist/" + artist_id + "/fans",
            json: true,
        });
    }

    async getRelatedArtists(artist_id) {
        return await rq.get({
            uri: this.uri + "/artist/" + artist_id + "/related",
            json: true,
        });
    }

    async getArtistRadio(artist_id) {
        return await rq.get({
            uri: this.uri + "/artist/" + artist_id + "/radio",
            json: true,
        });
    }

    async getArtistPlaylists(artist_id) {
        return await rq.get({
            uri: this.uri + "/artist/" + artist_id + "/playlists",
            json: true,
        });
    }

    async getChart() {
        return await rq.get({
            uri: this.uri + "/chart/0",
            json: true,
        });
    }

    async getChartTracks() {
        return await rq.get({
            uri: this.uri + "/chart/0/tracks",
            json: true,
        });
    }

    async getChartAlbums() {
        return await rq.get({
            uri: this.uri + "/chart/0/albums",
            json: true,
        });
    }

    async getChartArtists() {
        return await rq.get({
            uri: this.uri + "/chart/0/artists",
            json: true,
        });
    }

    async getChartPlaylists() {
        return await rq.get({
            uri: this.uri + "/chart/0/playlists",
            json: true,
        });
    }

    async getChartPodcasts() {
        return await rq.get({
            uri: this.uri + "/chart/0/podcasts",
            json: true,
        });
    }

    async getComment(comment_id) {
        return await rq.get({
            uri: this.uri + "/comment/" + comment_id,
            json: true,
        });
    }

    async getEditorials() {
        return await rq.get({
            uri: this.uri + "/editorial",
            json: true,
        });
    }

    async getEpisode(episode_id) {
        return await rq.get({
            uri: this.uri + "/episode/" + episode_id,
            json: true,
        });
    }

    async getEpisodeBookmark(episode_id) {
        return await rq.get({
            uri: this.uri + "/episode/" + episode_id + "/bookmark",
            json: true,
        });
    }

    async getGenres() {
        return await rq.get({
            uri: this.uri + "/genre",
            json: true,
        });
    }

    async getInfos() {
        return await rq.get({
            uri: this.uri + "/infos",
            json: true,
        });
    }

    async getOptions() {
        return await rq.get({
            uri: this.uri + "/options",
            json: true,
        });
    }

    async getPlaylist(playlist_id) {
        return await rq.get({
            uri: this.uri + "/playlist/" + playlist_id,
            json: true,
        });
    }

    async getPlaylistComments(playlist_id) {
        return await rq.get({
            uri: this.uri + "/playlist/" + playlist_id + "/comments",
            json: true,
        });
    }

    async getPlaylistFans(playlist_id) {
        return await rq.get({
            uri: this.uri + "/playlist/" + playlist_id + "/fans",
            json: true,
        });
    }

    async getPlaylistTracks(playlist_id) {
        return await rq.get({
            uri: this.uri + "/playlist/" + playlist_id + "/tracks",
            json: true,
        });
    }

    async getPodcast(podcast_id) {
        return await rq.get({
            uri: this.uri + "/podcast/" + podcast_id,
            json: true,
        });
    }

    async getPodcastEpisodes(podcast_id) {
        return await rq.get({
            uri: this.uri + "/podcast/" + podcast_id + "/episodes",
            json: true,
        });
    }

    async getRadios() {
        return await rq.get({
            uri: this.uri + "/radio",
            json: true,
        });
    }

    async getRadioGenres() {
        return await rq.get({
            uri: this.uri + "/radio/genres",
            json: true,
        });
    }

    async getTopRadios() {
        return await rq.get({
            uri: this.uri + "/radio/top",
            json: true,
        });
    }

    async getRadioLists() {
        return await rq.get({
            uri: this.uri + "/radio/lists",
            json: true,
        });
    }

    async search(type, query) {
        return await rq.get({
            uri: this.uri + "/search/" + type + "?q=" + query,
            json: true,
        });
    }

    async getTrack(track_id) {
        return await rq.get({
            uri: this.uri + "/track/" + track_id,
            json: true,
        });
    }
}

module.exports = Deezer;
