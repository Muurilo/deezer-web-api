<a name="Deezer"></a>

## Deezer
API Instance

**Kind**: global class  

* [Deezer](#Deezer)
    * [.getAlbum(album_id)](#Deezer+getAlbum) ⇒ <code>promise</code>
    * [.getAlbumComments(album_id)](#Deezer+getAlbumComments) ⇒ <code>promise</code>
    * [.getAlbumFans(album_id)](#Deezer+getAlbumFans) ⇒ <code>promise</code>
    * [.getAlbumTracks(album_id)](#Deezer+getAlbumTracks) ⇒ <code>promise</code>
    * [.getArtist(artist_id)](#Deezer+getArtist) ⇒ <code>promise</code>
    * [.getArtistTopTracks(artist_id)](#Deezer+getArtistTopTracks) ⇒ <code>promise</code>
    * [.getArtistAlbums(artist_id)](#Deezer+getArtistAlbums) ⇒ <code>promise</code>
    * [.getArtistComments(artist_id)](#Deezer+getArtistComments) ⇒ <code>promise</code>
    * [.getArtistFans(artist_id)](#Deezer+getArtistFans) ⇒ <code>promise</code>
    * [.getRelatedArtists(artist_id)](#Deezer+getRelatedArtists) ⇒ <code>promise</code>
    * [.getArtistRadio(artist_id)](#Deezer+getArtistRadio) ⇒ <code>promise</code>
    * [.getArtistPlaylists(artist_id)](#Deezer+getArtistPlaylists) ⇒ <code>promise</code>
    * [.getChart()](#Deezer+getChart) ⇒ <code>promise</code>
    * [.getChartTracks()](#Deezer+getChartTracks) ⇒ <code>promise</code>
    * [.getChartAlbums()](#Deezer+getChartAlbums) ⇒ <code>promise</code>
    * [.getChartArtists()](#Deezer+getChartArtists) ⇒ <code>promise</code>
    * [.getChartPlaylists()](#Deezer+getChartPlaylists) ⇒ <code>promise</code>
    * [.getChartPodcasts()](#Deezer+getChartPodcasts) ⇒ <code>promise</code>
    * [.getComment(comment_id)](#Deezer+getComment) ⇒ <code>promise</code>
    * [.getEditorials()](#Deezer+getEditorials) ⇒ <code>promise</code>
    * [.getEpisode()](#Deezer+getEpisode) ⇒ <code>promise</code>
    * [.getEpisodeBookmark()](#Deezer+getEpisodeBookmark) ⇒ <code>promise</code>
    * [.getGenres()](#Deezer+getGenres) ⇒ <code>promise</code>
    * [.getInfos()](#Deezer+getInfos) ⇒ <code>promise</code>
    * [.getOptions()](#Deezer+getOptions) ⇒ <code>promise</code>
    * [.getPlaylist(playlist_id)](#Deezer+getPlaylist) ⇒ <code>promise</code>
    * [.getPlaylistComments(playlist_id)](#Deezer+getPlaylistComments) ⇒ <code>promise</code>
    * [.getPlaylistFans(playlist_id)](#Deezer+getPlaylistFans) ⇒ <code>promise</code>
    * [.getPlaylistTracks(playlist_id)](#Deezer+getPlaylistTracks) ⇒ <code>promise</code>
    * [.getPodcast(podcast_id)](#Deezer+getPodcast) ⇒ <code>promise</code>
    * [.getPodcastEpisodes(podcast_id)](#Deezer+getPodcastEpisodes) ⇒ <code>promise</code>
    * [.getRadios()](#Deezer+getRadios) ⇒ <code>promise</code>
    * [.getRadioGenres()](#Deezer+getRadioGenres) ⇒ <code>promise</code>
    * [.getTopRadios()](#Deezer+getTopRadios) ⇒ <code>promise</code>
    * [.getRadioLists()](#Deezer+getRadioLists) ⇒ <code>promise</code>
    * [.search(type, query)](#Deezer+search) ⇒ <code>promise</code>
    * [.getTrack(track_id)](#Deezer+getTrack) ⇒ <code>promise</code>

<a name="Deezer+getAlbum"></a>

### deezer.getAlbum(album_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| album_id | <code>string</code> | ID of album to get info |

**Example** *(Get information from an album)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getAlbum("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getAlbumComments"></a>

### deezer.getAlbumComments(album_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| album_id | <code>string</code> | ID of album to get comments |

**Example** *(Get album comments)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getAlbumComments("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getAlbumFans"></a>

### deezer.getAlbumFans(album_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| album_id | <code>string</code> | ID of album to get fans |

**Example** *(Get album fans)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getAlbumFans("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getAlbumTracks"></a>

### deezer.getAlbumTracks(album_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| album_id | <code>string</code> | ID of album to get tracks |

**Example** *(Get album tracks)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getAlbumTracks("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getArtist"></a>

### deezer.getArtist(artist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get info |

**Example** *(Get artist info)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getArtist("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getArtistTopTracks"></a>

### deezer.getArtistTopTracks(artist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get top tracks |

**Example** *(Get artist top tracks)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getArtistTopTracks("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getArtistAlbums"></a>

### deezer.getArtistAlbums(artist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get albums |

**Example** *(Get artist albums)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getArtistAlbums("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getArtistComments"></a>

### deezer.getArtistComments(artist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get comments |

**Example** *(Get artist comments)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getArtistComments("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getArtistFans"></a>

### deezer.getArtistFans(artist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get fans |

**Example** *(Get artist fans)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getArtistFans("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getRelatedArtists"></a>

### deezer.getRelatedArtists(artist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get related artists |

**Example** *(Get related artists)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getRelatedArtists("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getArtistRadio"></a>

### deezer.getArtistRadio(artist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get radio |

**Example** *(Get artist radio)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getArtistRadio("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getArtistPlaylists"></a>

### deezer.getArtistPlaylists(artist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get playlists |

**Example** *(Get artist playlists)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getArtistPlaylists("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getChart"></a>

### deezer.getChart() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getChart()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getChartTracks"></a>

### deezer.getChartTracks() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart tracks)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getChartTracks()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getChartAlbums"></a>

### deezer.getChartAlbums() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart albums)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getChartAlbums()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getChartArtists"></a>

### deezer.getChartArtists() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart artists)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getChartArtists()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getChartPlaylists"></a>

### deezer.getChartPlaylists() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart playlists)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getChartPlaylists()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getChartPodcasts"></a>

### deezer.getChartPodcasts() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart podcasts)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getChartPodcasts()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getComment"></a>

### deezer.getComment(comment_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| comment_id | <code>string</code> | ID of comment to get info |

**Example** *(Get comment info)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getComment("123123")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getEditorials"></a>

### deezer.getEditorials() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get editorials)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getEditorials()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getEpisode"></a>

### deezer.getEpisode() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get episode)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getEpisode()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getEpisodeBookmark"></a>

### deezer.getEpisodeBookmark() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get episode bookmark)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getEpisodeBookmark()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getGenres"></a>

### deezer.getGenres() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get genres)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getGenres()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getInfos"></a>

### deezer.getInfos() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get infos)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getInfos()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getOptions"></a>

### deezer.getOptions() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get options)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getOptions()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getPlaylist"></a>

### deezer.getPlaylist(playlist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | <code>string</code> | ID of playlist to get info |

**Example** *(Get playlist)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getPlaylist("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getPlaylistComments"></a>

### deezer.getPlaylistComments(playlist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | <code>string</code> | ID of playlist to get comments |

**Example** *(Get playlist comments)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getPlaylistComments("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getPlaylistFans"></a>

### deezer.getPlaylistFans(playlist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | <code>string</code> | ID of playlist to get fans |

**Example** *(Get playlist fans)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getPlaylistFans("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getPlaylistTracks"></a>

### deezer.getPlaylistTracks(playlist_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | <code>string</code> | ID of playlist to get tracks |

**Example** *(Get playlist tracks)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getPlaylistTracks("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getPodcast"></a>

### deezer.getPodcast(podcast_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| podcast_id | <code>string</code> | ID of podcast to get info |

**Example** *(Get podcast)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getPodcast("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getPodcastEpisodes"></a>

### deezer.getPodcastEpisodes(podcast_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| podcast_id | <code>string</code> | ID of podcast to get episodes |

**Example** *(Get podcast episodes)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getPodcastEpisodes("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getRadios"></a>

### deezer.getRadios() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get radios)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getRadios()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getRadioGenres"></a>

### deezer.getRadioGenres() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get radio genres)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getRadiosGenres()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getTopRadios"></a>

### deezer.getTopRadios() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get top radios)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getTopRadios()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getRadioLists"></a>

### deezer.getRadioLists() ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get radio lists)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getRadiosLists()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+search"></a>

### deezer.search(type, query) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of request allowed types (album, artist, history, playlist, podcast, radio, track, user), if null will search for all types |
| query | <code>string</code> | Your search |

**Example** *(Search things)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.search("album", "Blurryface")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();

// Or try this

var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.search("Blurryface")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="Deezer+getTrack"></a>

### deezer.getTrack(track_id) ⇒ <code>promise</code>
**Kind**: instance method of [<code>Deezer</code>](#Deezer)  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| track_id | <code>string</code> | ID of track to get info |

**Example** *(Get track info)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.getTrack("74606742")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
