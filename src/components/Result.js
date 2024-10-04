//import './Result.css';

function Result({result}) {

    return (
      <div>
        <img src={result.src} alt={result.altText}/>
        <h2>{result.track}</h2>
        <h3 >{result.artist}</h3>
        <p>{result.album}</p>
      </div>
    );
}
  
export default Result;