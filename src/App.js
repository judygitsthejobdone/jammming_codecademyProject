//import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Footer from './components/Footer';
import searchSpotify from './utils/SpotifyWebAPI';
import { createPlaylist } from './utils/SpotifyWebAPI';
import { Navbar, NavbarBrand} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);
  const [tracklist, setTracklist] = useState([mockTrack, mockTrack]);
  
  const handleSearch = (q, type) => { 
    searchSpotify(q, type)
      .then( res => setResults(() => res) )
  };
  const handleCreatePlaylist = (name) => {
    return createPlaylist(name).then(res => {
      res.ok ? console.log(`playlist "${name}" created.`) : console.log(`Could not save playlist "${name}". Response.ok=${res.ok} and Response.status=${res.status}`)
      return res.json();
    })
  };
  //const handleTracklistChange = (newval) => setTracklist(newval);

  return (
    <div className="App">
      <Navbar sticky='top' data-bs-theme="dark" className="bg-dark justify-content-center" >
        <NavbarBrand
          className="App-link"
          href='.'
          rel="noopener noreferrer"
        >
          Jammming with Judy
        </NavbarBrand>
      </Navbar>
      <Navbar sticky="top" data-bs-theme="light" className="bg-dark justify-content-around" ><SearchBar handleSearch={handleSearch} /></Navbar>
      <Container fluid>
        <Row xs={1} md={2} >
          <Col className="bg-dark pb-3" ><SearchResults results={results} tracklistChange={setTracklist}/></Col>
          <Col className="bg-secondary" ><Playlist tracklist={tracklist} tracklistChange={setTracklist} createPlaylist={handleCreatePlaylist} /></Col>
        </Row>
      </Container>
      
      
      <Footer />
    </div>
  );
}

export default App;

/**- Create static components
    - App
    - SearchBar
        - Search button
    - SearchResults
    - Playlist
    - Tracklist
    - Track
    - Save to Spotify button
     */

    const mockTrack = {
      "track":"Get High",
      "album":"Side Effects EP",
      "artist":"Chris Travis",
      "src":"https://i.scdn.co/image/ab67616d00004851ffa4064cb0e135b5e1ca41a2",
      "altText":"Side Effects EP album art",
      "uri":"spotify:track:2HEoWCdoCM6JfTaEGGgxXX"
  }
  