//import './SearchResults.css';
import Track from "./Track";

function SearchResults({results, setTracklist}) {
  /**For each arr item received from API feed to Track component to render */
  let jsx = [];
  const addTrack = ({target}) => {
    //code to addTrack to tracklist goes here
    setTracklist(prev => [...prev])
    console.log(`Trying to add result index ${target.value} to the tracklist.`)
  }

  if(!results) {
    jsx = <div><p>Start a search and start jammming!</p></div>;
  } else if(!results.length) {
    jsx = <div><p>Hmmm...we couldn't find anything. Please try a different search.</p></div>
  } else {
    results.forEach( (result, index) => {jsx.push(<Track track={result} key={index} index={index} handleClick={addTrack} buttonLabel="+" />)} ) 
    jsx = <div>{jsx}</div>;
  }
  
  return jsx;
  }
  
  export default SearchResults;