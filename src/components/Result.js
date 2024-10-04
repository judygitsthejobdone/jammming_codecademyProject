//import './Result.css';
//import { useState } from 'react';
//import { useEffect } from 'react';
const img = require('../resources/e_e-albumArt.jpeg'); //note: webpack needs local images to be required in rathern than referenced by source alone

function Result() {
    const result = {
        src: "example/hyperlink.jpeg", /**This still needs to be applied in the lower code */
        altText: "alternate text sample",
        album: 'sample album',
        artist: 'sample artist',
        track: 'sample song',
    }

    return (
      <div>
        <img src={img} alt={result.alt}/>
        <h2>{result.track}</h2>
        <h3 >{result.artist}</h3>
        <p>{result.album}</p>
      </div>
    );
}
  
  export default Result;