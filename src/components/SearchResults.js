//import './SearchResults.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Track from "./Track";

function SearchResults({results, tracklistChange}) {
  const addTrack = (indexToAdd) => {
   Number.isInteger(Number(indexToAdd)) && tracklistChange(prev => {
     console.log(prev);
      return [...prev, results[indexToAdd]]
    });
    //console.log(`Trying to add result index ${indexToAdd} to the tracklist.`);
  }

  if(!results) {
    return <div><p>Start a search and start jammming!</p></div>;
  } else if(!results.length) {
    return <div><p>Hmmm...we couldn't find anything. Please try a different search.</p></div>;
  }

  return (
    <ListGroup variant='flush'>
      {results.map( (result, index) => result && <ListGroup.Item key={index} ><Track track={result} key={index} index={index} clickHandler={addTrack} buttonLabel="+" /></ListGroup.Item> )} 
    </ListGroup>
  );
  //the "result &&" was necessary to prevent site crash when result was undefined.
};
  
  export default SearchResults;

//listgroup and items
//Add the flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.
//Toggle the action prop to create actionable list group items, with disabled, hover and active styles.


