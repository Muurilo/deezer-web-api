"use strict";

var rq = require("request-promise");

const uri = "https://api.deezer.com";

var MusicLib = require("./musics.js")(rq, uri);
var UserLib = require("./users.js")(rq, uri);
var InfoLib = require("./infos.js")(rq, uri);

/**
 * API Instance
 */

class Deezer {
    constructor() {
        this.musics = MusicLib;
        this.users = UserLib;
        this.infos = InfoLib;
    }
}

module.exports = Deezer;
