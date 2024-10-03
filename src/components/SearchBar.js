//import './SearchBar.css';
import { useState } from "react";

function handleSubmit(event) {
    event.preventDefault();
};

function SearchBar() {
    const [search, setSearch] = useState();
    //const [artist, setArtist] = useState();
    //const [genre, setGenre] = useState();
    const [year, setYear] = useState();
    function handleSearchInput({target}) {
        setSearch(target.value)
    };
    function handleYearInput({target}) {
        setYear(target.value)
    };

    return (
        <div>
        <form>
            <label for="search" >Search: </label>
            <input 
                id="search" 
                type="search" 
                placeholder="Track, Artist, or Genre" 
                value={search} 
                onChange={handleSearchInput}
            ></input>
            <label for="year" > Limit by Year: </label><input 
                id="year"
                type="text" 
                pattern="^[0-9]{4}(-[0-9]{4})?"
                title="Use format YYYY or YYYY-YYYY"
                value={year} 
                onChange={handleYearInput}
            ></input>
            <button type="submit" onClick={handleSubmit} >Go</button>
        </form>
        </div>
    );
}

export default SearchBar;