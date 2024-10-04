function searchSpotify() {
    /**The code below takes the response and formats it into an array of result objects 
     * To use a real response, replace "exampleResponse" with the actual response.
    */

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

const exampleResponse = {
    "albums": {
      "href": "https://api.spotify.com/v1/search?query=album%3Dget%262520to%262520heaven&type=album&market=US&locale=es%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=0&limit=2",
      "items": [
        {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1HOeqtP7tHkKNJNLzQ2tnr"
              },
              "href": "https://api.spotify.com/v1/artists/1HOeqtP7tHkKNJNLzQ2tnr",
              "id": "1HOeqtP7tHkKNJNLzQ2tnr",
              "name": "Everything Everything",
              "type": "artist",
              "uri": "spotify:artist:1HOeqtP7tHkKNJNLzQ2tnr"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1oScYOf8ImO6L9bdvhep1J"
          },
          "href": "https://api.spotify.com/v1/albums/1oScYOf8ImO6L9bdvhep1J",
          "id": "1oScYOf8ImO6L9bdvhep1J",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273889741e4d5cfc40e4610770c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02889741e4d5cfc40e4610770c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851889741e4d5cfc40e4610770c",
              "width": 64
            }
          ],
          "is_playable": true,
          "name": "Get To Heaven (Deluxe)",
          "release_date": "2015-06-22",
          "release_date_precision": "day",
          "total_tracks": 17,
          "type": "album",
          "uri": "spotify:album:1oScYOf8ImO6L9bdvhep1J"
        },
        {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1HOeqtP7tHkKNJNLzQ2tnr"
              },
              "href": "https://api.spotify.com/v1/artists/1HOeqtP7tHkKNJNLzQ2tnr",
              "id": "1HOeqtP7tHkKNJNLzQ2tnr",
              "name": "Everything Everything",
              "type": "artist",
              "uri": "spotify:artist:1HOeqtP7tHkKNJNLzQ2tnr"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6RaFspd5Yw90HK0CBBDquB"
          },
          "href": "https://api.spotify.com/v1/albums/6RaFspd5Yw90HK0CBBDquB",
          "id": "6RaFspd5Yw90HK0CBBDquB",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273892ab7af113e812930621b77",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02892ab7af113e812930621b77",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851892ab7af113e812930621b77",
              "width": 64
            }
          ],
          "is_playable": true,
          "name": "Get To Heaven (Deluxe Version)",
          "release_date": "2016-02-26",
          "release_date_precision": "day",
          "total_tracks": 17,
          "type": "album",
          "uri": "spotify:album:6RaFspd5Yw90HK0CBBDquB"
        }
      ],
      "limit": 2,
      "next": "https://api.spotify.com/v1/search?query=album%3Dget%262520to%262520heaven&type=album&market=US&locale=es%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=2&limit=2",
      "offset": 0,
      "previous": null,
      "total": 800
    },
    "artists": {
      "href": "https://api.spotify.com/v1/search?query=album%3Dget%262520to%262520heaven&type=artist&market=US&locale=es%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=0&limit=2",
      "items": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3nOmqhdVTODRutSb5Y8kYz"
          },
          "followers": {
            "href": null,
            "total": 11317
          },
          "genres": [
            "glitchcore",
            "hyperpop"
          ],
          "href": "https://api.spotify.com/v1/artists/3nOmqhdVTODRutSb5Y8kYz",
          "id": "3nOmqhdVTODRutSb5Y8kYz",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb49b79170c06c995daba6b311",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab6761610000517449b79170c06c995daba6b311",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f17849b79170c06c995daba6b311",
              "width": 160
            }
          ],
          "name": "heavn",
          "popularity": 34,
          "type": "artist",
          "uri": "spotify:artist:3nOmqhdVTODRutSb5Y8kYz"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/300EJp2Qq7PZVasUTd56Le"
          },
          "followers": {
            "href": null,
            "total": 696
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/300EJp2Qq7PZVasUTd56Le",
          "id": "300EJp2Qq7PZVasUTd56Le",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb52a7f0b00b6995efd8dd3f12",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab6761610000517452a7f0b00b6995efd8dd3f12",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f17852a7f0b00b6995efd8dd3f12",
              "width": 160
            }
          ],
          "name": "HEAVEN",
          "popularity": 22,
          "type": "artist",
          "uri": "spotify:artist:300EJp2Qq7PZVasUTd56Le"
        }
      ],
      "limit": 2,
      "next": "https://api.spotify.com/v1/search?query=album%3Dget%262520to%262520heaven&type=artist&market=US&locale=es%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=2&limit=2",
      "offset": 0,
      "previous": null,
      "total": 45
    },
    "tracks": {
      "href": "https://api.spotify.com/v1/search?query=album%3Dget%262520to%262520heaven&type=track&market=US&locale=es%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=0&limit=2",
      "items": [
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5FhcqamaRFfpZb4VHV47fu"
                },
                "href": "https://api.spotify.com/v1/artists/5FhcqamaRFfpZb4VHV47fu",
                "id": "5FhcqamaRFfpZb4VHV47fu",
                "name": "Kikuo",
                "type": "artist",
                "uri": "spotify:artist:5FhcqamaRFfpZb4VHV47fu"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3fFajEtPI0sXa1Eo0WJMKJ"
            },
            "href": "https://api.spotify.com/v1/albums/3fFajEtPI0sXa1Eo0WJMKJ",
            "id": "3fFajEtPI0sXa1Eo0WJMKJ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2738fdb0c09eb333c24eb1bc53b",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e028fdb0c09eb333c24eb1bc53b",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048518fdb0c09eb333c24eb1bc53b",
                "width": 64
              }
            ],
            "is_playable": true,
            "name": "きくおミク",
            "release_date": "2012-07-13",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:3fFajEtPI0sXa1Eo0WJMKJ"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5FhcqamaRFfpZb4VHV47fu"
              },
              "href": "https://api.spotify.com/v1/artists/5FhcqamaRFfpZb4VHV47fu",
              "id": "5FhcqamaRFfpZb4VHV47fu",
              "name": "Kikuo",
              "type": "artist",
              "uri": "spotify:artist:5FhcqamaRFfpZb4VHV47fu"
            }
          ],
          "disc_number": 1,
          "duration_ms": 279600,
          "explicit": false,
          "external_ids": {
            "isrc": "JPE561202056"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/11mV5Ol1OcOimE20hpASVR"
          },
          "href": "https://api.spotify.com/v1/tracks/11mV5Ol1OcOimE20hpASVR",
          "id": "11mV5Ol1OcOimE20hpASVR",
          "is_local": false,
          "is_playable": true,
          "name": "天国へ行こう",
          "popularity": 51,
          "preview_url": "https://p.scdn.co/mp3-preview/e28db2b35eabe527db5dcf1ed6e52ef13fd8dde0?cid=cfe923b2d660439caf2b557b21f31221",
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:11mV5Ol1OcOimE20hpASVR"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6TxY5T8v9RjF7Ry4XQvWT5"
                },
                "href": "https://api.spotify.com/v1/artists/6TxY5T8v9RjF7Ry4XQvWT5",
                "id": "6TxY5T8v9RjF7Ry4XQvWT5",
                "name": "Chris Travis",
                "type": "artist",
                "uri": "spotify:artist:6TxY5T8v9RjF7Ry4XQvWT5"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4AARGSDwdwxsWj0M1hiMU9"
            },
            "href": "https://api.spotify.com/v1/albums/4AARGSDwdwxsWj0M1hiMU9",
            "id": "4AARGSDwdwxsWj0M1hiMU9",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ffa4064cb0e135b5e1ca41a2",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ffa4064cb0e135b5e1ca41a2",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ffa4064cb0e135b5e1ca41a2",
                "width": 64
              }
            ],
            "is_playable": true,
            "name": "Side Effects EP",
            "release_date": "2014-04-23",
            "release_date_precision": "day",
            "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:4AARGSDwdwxsWj0M1hiMU9"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6TxY5T8v9RjF7Ry4XQvWT5"
              },
              "href": "https://api.spotify.com/v1/artists/6TxY5T8v9RjF7Ry4XQvWT5",
              "id": "6TxY5T8v9RjF7Ry4XQvWT5",
              "name": "Chris Travis",
              "type": "artist",
              "uri": "spotify:artist:6TxY5T8v9RjF7Ry4XQvWT5"
            }
          ],
          "disc_number": 1,
          "duration_ms": 255940,
          "explicit": true,
          "external_ids": {
            "isrc": "CA5KR1805573"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2HEoWCdoCM6JfTaEGGgxXX"
          },
          "href": "https://api.spotify.com/v1/tracks/2HEoWCdoCM6JfTaEGGgxXX",
          "id": "2HEoWCdoCM6JfTaEGGgxXX",
          "is_local": false,
          "is_playable": true,
          "name": "Get High",
          "popularity": 41,
          "preview_url": "https://p.scdn.co/mp3-preview/bde2159f27e0a383e15f612b368543c1c52b4e1e?cid=cfe923b2d660439caf2b557b21f31221",
          "track_number": 10,
          "type": "track",
          "uri": "spotify:track:2HEoWCdoCM6JfTaEGGgxXX"
        }
      ],
      "limit": 2,
      "next": "https://api.spotify.com/v1/search?query=album%3Dget%262520to%262520heaven&type=track&market=US&locale=es%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=2&limit=2",
      "offset": 0,
      "previous": null,
      "total": 167
    }
  };



searchSpotify();

//export default searchSpotify;