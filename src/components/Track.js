//import './Track.css';

function Track({track, handleClick, buttonLabel, index}) {
    return (
      <div>
        <img src={track.src} alt={track.altText}/>
        <h2>{track.track}</h2>  
        <h3 >{track.artist}</h3>
        <p>{track.album}</p>
        <button type="button" name="add" onClick={handleClick} value={index}>{buttonLabel}</button>
      </div>
    );
}
  
export default Track;