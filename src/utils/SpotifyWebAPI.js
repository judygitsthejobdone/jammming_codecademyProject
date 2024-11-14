import {examplePlaylist, exampleResponse} from './ExampleContent.js';

async function searchSpotify(q,type) {
    /**The code below takes the response and formats it into an array of result objects 
     * To use a real response, replace "exampleResponse" with the actual response.
    */
    await exampleResponse;
    return processResponse(exampleResponse);
}

function processResponse(response) {
    const resultsArray = [];
    response.tracks.items.forEach( item => {
        const obj = {
            track: item.name,
            album: item.album.name,
            artist: '',
            src: item.album.images[2].url,
            altText: item.album.name+' album art',
            uri: item.uri,
        } 

        item.artists.forEach((artist, index) => {
            if ( index > 0 ) {
            obj.artist += ', ';
            }
            obj.artist += artist.name;
        })

        resultsArray.push(obj)
    });
    //console.log(JSON.stringify(resultsArray));
    return resultsArray
}


//searchSpotify();
async function createPlaylist(name) {
  const user_id = "example_id";
  const endpoint = `https://api.spotify.com/v1/users/${user_id}/playlists`;
  const body = {
    "name": name, //required
    "description": "New playlist description",
    "public": false,
    "collaborative": false,
  };

  return {
    status: 201,
    ok: true,
    json: async () => examplePlaylist,
  };
}
async function renamePlaylist(newName, playlist_id) {
  console.log()
}

async function updatePlaylistItems(playlist_id, tracklistURIs) {
  // https://developer.spotify.com/documentation/web-api/reference/reorder-or-replace-playlists-tracks
  // To replace items, include uris as either a query parameter or in the request's body. 
  // Replacing items in a playlist will overwrite its existing items. 
  // This operation can be used for replacing or clearing items in a playlist.

  const endpoint = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;
  const body = {
    "uris": tracklistURIs,
  };

  return {
    status: 200,
    ok: true,
    json: async () => 'abc', // i'm unsure if this should return an object with key snapshot_id and string value or if it should just return the string. The documentation is unclear.
  };
};

async function createPlaylist401(name) {
  return {
    "error": {
      "status": 401,
      "message": "Bad or expired token. This can happen if the user revoked a token or the access token has expired. You should re-authenticate the user."
    }
  }
};
async function createPlaylist403(name) {
  return {
    "error": {
      "status": 403,
      "message": "Bad OAuth request (wrong consumer key, bad nonce, expired timestamp...). Unfortunately, re-authenticating the user won't help here."
    }
  }
}
async function createPlaylist429(name) {
  return {
    "error": {
      "status": 429,
      "message": "The app has exceeded its rate limits."
    }
  }
}

export default searchSpotify;
export {createPlaylist, updatePlaylistItems};