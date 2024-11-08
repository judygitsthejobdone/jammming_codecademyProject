//import './Playlist.css';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Track from './Track';
import { FormGroup, Button } from 'react-bootstrap';

function Playlist({tracklist, tracklistChange, createPlaylist}) {
    const [playlistName, setPlaylistName] = useState('');
    const [currentPlaylist, setCurrentPlaylist] = useState(null);
    
    useEffect(()=> {},[tracklist]);

    function handleNameChange({target}) {
        setPlaylistName(() => target.value);
    }
    function removeTrack(indexToRemove) {
        tracklistChange(tracklist.filter((val, index) => index != indexToRemove));
        console.log(`Removed playlist index ${indexToRemove} from the tracklist.`);
        console.log(tracklist)
    }
    function handleSave() {
        //code to save playlist
        const playlistExists = currentPlaylist;
        if(playlistExists) {
          //code to update existing playlist
          console.log('executing code to update playlist: '+currentPlaylist.name);
          //console.log(JSON.stringify(currentPlaylist));
        } else { 
          //code to create new playlist and set current Playlist
          createPlaylist(playlistName)
            .then((playlist) => setCurrentPlaylist(() => playlist));
          //code to add tracklist to new playlist
          
        }
        //props.savePlaylist(playlistName, tracklist);
        //console.log(`saving playlist ${playlistName} to user's account...`);
    }
    return (
      <Form inline="true" onSubmit={event => event.preventDefault()} data-bs-theme="dark" className="pb-3">
        <Container fluid ><FormGroup><Row xs={2}>
          <Col xs="auto" sm="auto" >
            <Form.Label className="text-dark pt-2 pb-1" htmlFor="playlistName" >Playlist: </Form.Label>
          </Col>
          <Col xs="9" sm="8" >
            <Form.Control type="text" id="playlistName" className="mt-1" maxLength={50} value={playlistName} onChange={handleNameChange}></Form.Control>
          </Col>
        </Row></FormGroup></Container>
        <ListGroup variant='flush'>
        {tracklist.map( ( track, index ) => track && <ListGroup.Item key={index} ><Track track={track} key={index} index={index} clickHandler={removeTrack} buttonLabel="-" /></ListGroup.Item> ) }
        </ListGroup>
        <br />
        <Button type='button' variant="dark" onClick={handleSave}>Save to Spotify</Button>
      </Form>
    );
}

  export default Playlist;