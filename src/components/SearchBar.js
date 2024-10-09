//import './SearchBar.css';
import { useState } from "react";
import { Container, Stack, FormGroup, DropdownHeader } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Row, Col} from "react-bootstrap";

function SearchBar({handleSearch}) {
    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('');
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
    function handleSearchType({target}) {
        console.log(target.value)
        setSearchType(target.value);
    };

    return (
        
        <Form onSubmit={handleSubmit} ><Stack gap={1} className="ms-auto">
            <Container fluid><Row>
                <Col><FormGroup>
                    <FloatingLabel
                        label={"Search"+searchType}
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
            <Container><SplitButton 
                type="submit" 
                variant="primary" 
                title="Go" 
                autoClose="outside"
            >
                <DropdownHeader>header</DropdownHeader>
                <Dropdown.Item as="button" onClick={handleSearchType} eventKey="album" value=" by album" active={searchType == " by album" ? true : false}>Albums</Dropdown.Item>
                <Dropdown.Item as="button" onClick={handleSearchType} eventKey="artist" value=" by artist" active={searchType == " by artist" ? true : false}>Artists</Dropdown.Item>
                <Dropdown.Item as="button" onClick={handleSearchType} eventKey="song" value=" by song" active={searchType == " by song" ? true : false}>Songs</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as="button" onClick={handleSearchType} eventKey="any" value="" active={searchType == "" ? true : false} >Any</Dropdown.Item>     
            </SplitButton></Container>
        
        </Stack></Form>
        
    );
}

export default SearchBar;