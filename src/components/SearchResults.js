//import './SearchResults.css';
import ListGroup from 'react-bootstrap/ListGroup';
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
    <ListGroup variant='flush'>
      {results.map( (result, index) => <ListGroup.Item key={index} ><Track track={result} key={index} index={index} handleClick={addTrack} buttonLabel="+" /></ListGroup.Item> )}
    </ListGroup>
  );
};
  
  export default SearchResults;

//listgroup and items
//Add the flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.
//Toggle the action prop to create actionable list group items, with disabled, hover and active styles.


