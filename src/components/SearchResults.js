//import './SearchResults.css';
import Result from "./Result";

function SearchResults({results}) {
  /**For each arr item received from API feed to Result component to render */
  let jsx = [];

  if(!results) {
    jsx = <div><p>Start a search and start jammming!</p></div>;
  } else if(!results.length) {
    jsx = <div><p>Hmmm...we couldn't find anything. Please try a different search.</p></div>
  } else {
    results.forEach( (result) => {jsx.push(<Result result={result} />)} ) 
    jsx = <div>{jsx}</div>;
  }
  
  return jsx;
  }
  
  export default SearchResults;