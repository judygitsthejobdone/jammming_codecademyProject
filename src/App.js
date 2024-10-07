import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Footer from './components/Footer';
import searchSpotify from './utils/SpotifyWebAPI';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState(null);
  const [tracklist, setTracklist] = useState([mockTrack, mockTrack]);
  
  const handleSearch = (q, type) => { 
    searchSpotify(q, type)
      .then( res => setResults(res) )
  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href='.'
          rel="noopener noreferrer"
        >
          Jammming with Judy
        </a>
      </header>
      <SearchBar handleSearch={handleSearch} />
      <SearchResults results={results} setTracklist={setTracklist} />
      <Playlist tracklist={tracklist} setTracklist={setTracklist} />
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
  