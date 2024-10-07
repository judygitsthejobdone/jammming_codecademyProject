//import './Playlist.css';
import { useState } from 'react';
import Track from './Track';

function Playlist({tracklist, setTracklist}) {
    const [playlistName, setPlaylistName] = useState('');

    function handleNameChange({target}) {
        setPlaylistName(target.value);
    }
    function removeTrack({target}) {
        setTracklist(tracklist.filter(index => index!==target.value))
        console.log(`Trying to remove playlist index ${target.value} from the tracklist.`)
    }
    function handleSave() {
        //code to save playlist
        //props.savePlaylist(playlistName, tracklist);
        console.log(`saving playlist ${playlistName} to user's account...`);
    }
    return (
      <div>
        <label htmlFor="playlistName" >Playlist: </label>
        <input type="text" id="playlistName" maxLength={50} value={playlistName} onChange={handleNameChange}></input>
        {tracklist.map( ( track, index ) => <Track track={track} key={index} index={index} handleClick={removeTrack} buttonLabel="-" /> ) }
        <br />
        <button type='button' onClick={handleSave}>Save Playlist</button>
      </div>
    );
}

  export default Playlist;