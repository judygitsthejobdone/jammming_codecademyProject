//import './SearchBar.css';
import { useState } from "react";

function SearchBar({handleSearch}) {
    const [search, setSearch] = useState('');
    //const [artist, setArtist] = useState();
    //const [genre, setGenre] = useState();
    const [year, setYear] = useState('');
    const pattern = "^[0-9]{4}(-[0-9]{4})?";

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Searching Spotify Web API for "${search}"`)
        handleSearch(search);
    };
    function handleSearchInput({target}) {
        setSearch(target.value)
    };
    function handleYearInput({target}) {
        const regex = new RegExp("(^[0-9]{4}-[0-9]{0,4}$)|(^[0-9]{0,4}$)");
        if (!regex.test(target.value)) {
            return document.getElementById('year').reportValidity();
        }
        setYear(target.value)
    };

    return (
        <div>
        <form onSubmit={handleSubmit} >
            <label htmlFor="search" >Search: </label>
            <input 
                id="search" 
                type="search" 
                placeholder="Track, Artist, or Genre" 
                value={search} 
                onChange={handleSearchInput}
            ></input>
            <label htmlFor="year" > Limit by Year: </label><input 
                id="year"
                type="text" 
                pattern={pattern}
                placeholder="e.g., 1999 or 1980-2001"
                title="Use format YYYY or YYYY-YYYY. No others symbols or characters permitted."
                value={year}
                onChange={handleYearInput}
            ></input>
            <button type="submit">Go</button>
        </form>
        </div>
    );
}

export default SearchBar;