//import './Playlist.css';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Track from './Track';
import { FormGroup, Button } from 'react-bootstrap';

function Playlist({tracklist, setTracklist, createPlaylist}) {
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
        const playlistExists = false;
        if(playlistExists) {
          //code to update existing playlist
        } else { 
          //code to create new playlist
          createPlaylist(playlistName);
          //code to add tracklist to new playlist
          
        }
        //props.savePlaylist(playlistName, tracklist);
        //console.log(`saving playlist ${playlistName} to user's account...`);
    }
    return (
      <Form inline="true" onSubmit={event => event.preventDefault()} data-bs-theme="dark" className="pb-3">
        <Container fluid ><FormGroup><Row xs={2}>
          <Col xs="auto" sm="auto" ><Form.Label className="text-dark pt-2 pb-1" htmlFor="playlistName" >Playlist: </Form.Label></Col>
          <Col xs="9" sm="8" ><Form.Control type="text" id="playlistName" className="mt-1" maxLength={50} value={playlistName} onChange={handleNameChange}></Form.Control></Col>
        </Row></FormGroup></Container>
        <ListGroup variant='flush'>
        {tracklist.map( ( track, index ) => <ListGroup.Item key={index} ><Track track={track} key={index} index={index} handleClick={removeTrack} buttonLabel="-" /></ListGroup.Item> ) }
        </ListGroup>
        <br />
        <Button type='button' variant="dark" onClick={handleSave}>Save to Spotify</Button>
      </Form>
    );
}

  export default Playlist;