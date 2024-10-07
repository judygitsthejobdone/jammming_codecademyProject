//import './SearchResults.css';
import Track from "./Track";

function SearchResults({results}) {
  /**For each arr item received from API feed to Track component to render */
  let jsx = [];

  if(!results) {
    jsx = <div><p>Start a search and start jammming!</p></div>;
  } else if(!results.length) {
    jsx = <div><p>Hmmm...we couldn't find anything. Please try a different search.</p></div>
  } else {
    results.forEach( (result) => {jsx.push(<Track result={result} />)} ) 
    jsx = <div>{jsx}</div>;
  }
  
  return jsx;
  }
  
  export default SearchResults;