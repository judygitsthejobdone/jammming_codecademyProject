//import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Footer from './components/Footer';
import { default as searchSpotify, createPlaylist, updatePlaylistItems, renamePlaylist, getUserData } from './utils/SpotifyWebAPI';
import { Navbar, NavbarBrand} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { checkForAuthCode, redirectToSpotifyAuthorize } from './utils/SpotifyOAuth';

function App() {
  const [results, setResults] = useState([]);
  const [tracklist, setTracklist] = useState([mockTrack, mockTrack]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect( () => {
    const checkLoginStatus = async () => {
      const hasAuthCode = await checkForAuthCode();
      console.log(hasAuthCode);
      if(!hasAuthCode) {
        console.log('Error verifying token.')
      } else {
        setLoggedIn(true);
        const userData = await getUserData();
        setUserInfo(userData);
      }
    
    }
    checkLoginStatus();
  }, [])
  
  const handleLogout = () => {
    localStorage.clear();
    setUserInfo(null);
  };
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
  const handleRenamePlaylist = (playlist_id, newName) => {
    return renamePlaylist(playlist_id, newName).then(res => {
      res.ok ? console.log(`playlist renamed to ${newName}.`) : console.log(`Could not rename playlist id "${playlist_id}". Response.ok=${res.ok} and Response.status=${res.status}`)
      return res.json();
    })
  };
  const handleUpdatePlaylistItems = (playlist_id, tracklistURIs) => {
    return updatePlaylistItems(playlist_id, tracklistURIs).then(res => {
      res.ok ? console.log('Playlist updated.') : console.log(`Playlist update failed.  Response.ok=${res.ok} and Response.status=${res.status}`)
      return res.json();
    })
  };

  return (
    <div className="App">
      <Navbar sticky='top' data-bs-theme="dark" className="bg-dark justify-content-end" >
        <NavbarBrand
          className="App-link"
          href='.'
          rel="noopener noreferrer"
        >
          Jammming with Judy
        </NavbarBrand>
        {loggedIn ? <Navbar.Text>Signed in as {userInfo.display_name} <button onClick={handleLogout}>logout</button></Navbar.Text> : <button onClick={redirectToSpotifyAuthorize}>login to Spotify</button>}
      </Navbar>

      <Navbar sticky="top" data-bs-theme="light" className="bg-dark justify-content-around" ><SearchBar handleSearch={handleSearch} /></Navbar>
      <Container fluid>
        <Row xs={1} md={2} >
          <Col className="bg-dark pb-3" ><SearchResults results={results} tracklistChange={setTracklist}/></Col>
          <Col className="bg-secondary" ><Playlist 
            tracklist={tracklist} 
            tracklistChange={setTracklist} 
            createPlaylist={handleCreatePlaylist} 
            updatePlaylistItems={handleUpdatePlaylistItems}
            renamePlaylist={handleRenamePlaylist}
            /></Col>
        </Row>
      </Container>
      
      
      <Footer />
    </div>
  );
}

export default App;

    const mockTrack = {
      "track":"Get High",
      "album":"Side Effects EP",
      "artist":"Chris Travis",
      "src":"https://i.scdn.co/image/ab67616d00004851ffa4064cb0e135b5e1ca41a2",
      "altText":"Side Effects EP album art",
      "uri":"spotify:track:2HEoWCdoCM6JfTaEGGgxXX"
  }
  