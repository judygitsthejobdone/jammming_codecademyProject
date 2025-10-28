//import './Playlist.css';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Track from './Track';
import { FormGroup, Button, Modal } from 'react-bootstrap';

function Playlist({tracklist, tracklistChange, createPlaylist, updatePlaylistItems, renamePlaylist }) {
    const [playlistName, setPlaylistName] = useState('');
    const [currentPlaylist, setCurrentPlaylist] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const tracklistURIs = tracklist.map(track => track.uri);
    
    const handleClose = () => setShowModal(false);
    const handleRenamePlaylist = () => {
      console.log('executing code to update playlist: '+currentPlaylist.name);
      renamePlaylist(currentPlaylist.id, playlistName);
    }
    const handleCreatePlaylist = () => {
      createPlaylist(playlistName)
        .then( (playlist) => {
          setCurrentPlaylist(() => playlist);
          updatePlaylistItems(playlist.id, tracklistURIs);
        });
    }

    function handleNameChange({target}) {
        setPlaylistName(() => target.value);
    }
    function removeTrack(indexToRemove) {
        tracklistChange(tracklist.filter((val, index) => index !== indexToRemove));
        console.log(`Removed playlist index ${indexToRemove} from the tracklist.`);
        console.log(tracklist)
    }
    function handleSave() {     
        //code to save playlist
        const playlistExists = currentPlaylist;
        if(!playlistName.length){return alert('Please provide a name for the playlist.')};

        if(playlistExists) {
          //code to update existing playlist
          
          // if name is not same as current playlist, option to renamePlaylist or createNew
          if (playlistName !== currentPlaylist.name) {
            setShowModal(true)
          } else {updatePlaylistItems(currentPlaylist.id, tracklistURIs)};

        } else { 
          //code to create new playlist and set current Playlist
          handleCreatePlaylist();
        }        
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
        <Modal show={showModal} onHide={handleClose}>
          
          <Modal.Body>Would you like to Rename and Overwrite "{currentPlaylist && currentPlaylist.name}" or Create a New Playlist named "{playlistName}"?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {
              handleClose();
              handleRenamePlaylist();
              }}>
              Rename and Overwrite
            </Button>
            <Button variant="primary" onClick={() => {
              handleClose();
              handleCreatePlaylist();
              }}>
              Create New Playlist
            </Button>
            <Button variant="tertiary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    );
}

  export default Playlist;