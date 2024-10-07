//import './Track.css';

//Future: Refactor to make the button an add/remove dependent on status in playlist

function Track({result}) {
    function handleAdd() {
      //code to add to playlist component
    }
    return (
      <div>
        <img src={result.src} alt={result.altText}/>
        <h2>{result.track}</h2>
        <h3 >{result.artist}</h3>
        <p>{result.album}</p>
        <button type="button" name="add" onClick={handleAdd} >+</button>
      </div>
    );
}
  
export default Track;