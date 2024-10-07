import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import searchSpotify from './utils/SpotifyWebAPI';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState(null);
  
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
      <SearchResults results={results} />
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