import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href='#'
          rel="noopener noreferrer"
        >
          Jammming with Judy
        </a>
      </header>
      <SearchBar />
      <SearchResults />
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