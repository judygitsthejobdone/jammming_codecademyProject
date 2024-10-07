//import './Playlist.css';
import { useState } from 'react';

function Playlist(props) {
    const [playlistName, setPlaylistName] = useState('');
    const [tracklist, setTracklist] = useState([]);
    function handleNameChange({target}) {
        setPlaylistName(target.value);
    }
    function handleSave() {
        //code to save playlist
        //props.savePlaylist(playlistName, tracklist);
    }
    return (
      <div>
        <label htmlFor="playlistName" >Playlist: </label>
        <input type="text" id="playlistName" maxLength={50} value={playlistName} onChange={handleNameChange}></input>
        <br />
        <button type='button' onClick={handleSave}>Save Playlist</button>
      </div>
    );
}
  
  export default Playlist;