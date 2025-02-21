//import {examplePlaylist, exampleResponse} from './ExampleContent.js';
import { checkToken } from "./SpotifyOAuth";
const access_token = localStorage.getItem('access_token');

async function getUserData() {
  await checkToken();
  const response = await fetch("https://api.spotify.com/v1/me", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
  /**Expected Response:
   * {
      "country": "string",
      "display_name": "string",
      "email": "string",
      "explicit_content": {
        "filter_enabled": false,
        "filter_locked": false
      },
      "external_urls": {
        "spotify": "string"
      },
      "followers": {
        "href": "string",
        "total": 0
      },
      "href": "string",
      "id": "string",
      "images": [
        {
          "url": "string",
          "height": 300,
          "width": 300
        }
      ],
      "product": "string",
      "type": "string",
      "uri": "string"
    }
   */
}

async function searchSpotify(q,type) {
  await checkToken(); 
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

async function createPlaylist(name, user_id) {
  await checkToken();
  const endpoint = `https://api.spotify.com/v1/users/${user_id}/playlists`;
  const body = {
    "name": name, //required
    "description": "Playlist created by Jammming with Judy",
    "public": false,
    "collaborative": false,
  };
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + access_token },
    "body": JSON.stringify(body), 
    // CRITICAL NOTE: payload body cannot be an object! Need to stringify or use alternate.
    // See documentation for options: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body
  });
  return response;
}
async function renamePlaylist(playlist_id, newName) {
  // https://developer.spotify.com/documentation/web-api/reference/change-playlist-details
  await checkToken();
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
  await checkToken();
  const endpoint = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;
  const body = {
    "uris": tracklistURIs,
  };
  const response = await fetch (endpoint, {
    method: 'PUT',
    headers: { 'Authorization': 'Bearer ' + access_token },
    "body": JSON.stringify(body), 
    // CRITICAL NOTE: payload body cannot be an object! Need to stringify or use alternate.
    // See documentation for options: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body
  })

  return response
};
/*
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
async function ok200() {
  return {
    status: 200,
    ok: true,
    json: async () => {abc: 'abc'}, 
  };  
}
*/

export default searchSpotify;
export {createPlaylist, updatePlaylistItems, renamePlaylist, getUserData};