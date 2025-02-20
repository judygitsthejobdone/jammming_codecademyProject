import {examplePlaylist, exampleResponse} from './ExampleContent.js';
const access_token = localStorage.getItem('access_token');

async function getUserData() {
  const response = await fetch("https://api.spotify.com/v1/me", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

async function searchSpotify(q,type) {
    /** The code below takes the response and formats it into an array of result objects 
    */
    const endpoint = new URL('https://api.spotify.com/v1/search');
    const params = {
      q: q,
      limit: 15,
    }
    if (type) {
      params.type = type;
    }
    endpoint.search = new URLSearchParams(params).toString();
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
    });
    if (response.ok) {
      const res = await response.json();
      return processResponse(res);
    } else {
      return [];
    }
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

async function createPlaylist(name) {
  const user_id = "example_id";
  const endpoint = `https://api.spotify.com/v1/users/${user_id}/playlists`;
  const body = {
    "name": name, //required
    "description": "New playlist description",
    "public": false,
    "collaborative": false,
  };
  console.log(JSON.stringify(body));
  return {
    status: 201,
    ok: true,
    json: async () => examplePlaylist,
  };
}
async function renamePlaylist(playlist_id, newName) {
  // https://developer.spotify.com/documentation/web-api/reference/change-playlist-details
  const endpoint = `https://api.spotify.com/v1/playlists/${playlist_id}`;
  const body = {
    "name": newName,
  };
  console.log(JSON.stringify(body));
  return {
    status: 201,
    ok: true,
    json: async () => 'Playlist updated',
  };
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

async function error401(name) {
  return {
    "error": {
      "status": 401,
      "message": "Bad or expired token. This can happen if the user revoked a token or the access token has expired. You should re-authenticate the user."
    }
  }
};
async function error403(name) {
  return {
    "error": {
      "status": 403,
      "message": "Bad OAuth request (wrong consumer key, bad nonce, expired timestamp...). Unfortunately, re-authenticating the user won't help here."
    }
  }
}
async function error429(name) {
  return {
    "error": {
      "status": 429,
      "message": "The app has exceeded its rate limits."
    }
  }
}

export default searchSpotify;
export {createPlaylist, updatePlaylistItems, renamePlaylist, getUserData};