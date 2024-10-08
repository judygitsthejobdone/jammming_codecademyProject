//import './SearchBar.css';
import { useState } from "react";
import { Container, Stack, FormGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Row, Col} from "react-bootstrap";

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
        
        <Form onSubmit={handleSubmit} ><Stack gap={1} className="ms-auto">
            <Container fluid><Row>
                <Col><FormGroup>
                    <FloatingLabel
                        label="Search"
                    >
                        <Form.Control 
                            id="search" 
                            type="search"
                            size="lg" 
                            placeholder="Track, Artist, or Genre" 
                            value={search} 
                            onChange={handleSearchInput}
                        ></Form.Control>
                    </FloatingLabel>
                </FormGroup></Col>
                <Col sm={4}><FormGroup>
                    <FloatingLabel 
                        label="Limit by Year"
                    >
                        <Form.Control 
                            id="year"
                            type="text" 
                            pattern={pattern}
                            size="md"
                            placeholder="e.g., 1999 or 1980-2001"
                            title="Use format YYYY or YYYY-YYYY. No others symbols or characters permitted."
                            value={year}
                            onChange={handleYearInput}
                        ></Form.Control>
                    </FloatingLabel>
                </FormGroup></Col>
            </Row></Container>
            <Container><Button type="submit" >Go</Button></Container>
        
        </Stack></Form>
        
    );
}

export default SearchBar;