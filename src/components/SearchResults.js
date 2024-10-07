//import './SearchResults.css';
import Track from "./Track";

function SearchResults({results, setTracklist}) {
  const addTrack = ({target}) => {
    //code to addTrack to tracklist goes here
    setTracklist(prev => [...prev])
    console.log(`Trying to add result index ${target.value} to the tracklist.`)
  }

  if(!results) {
    return <div><p>Start a search and start jammming!</p></div>;
  } else if(!results.length) {
    return <div><p>Hmmm...we couldn't find anything. Please try a different search.</p></div>;
  }

  return (
    <div>
      {results.map( (result, index) => <Track track={result} key={index} index={index} handleClick={addTrack} buttonLabel="+" /> )}
    </div>
  );
};
  
  export default SearchResults;