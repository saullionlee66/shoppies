import React, {useContext} from 'react'
import {Form,Alert} from 'react-bootstrap'
import {MovieContext} from './MovieContext'
import '../App.css';

function SearchBar() {
    const {search, updateSearch,count} = useContext(MovieContext)
    return (
        <div className="">
            <h1 className="text-primary">The Shoppies</h1>
            <h5 className="text-light text-left">Built by Saul Lee</h5>
            <Form>
            <Form.Control size="lg" type="text" value={search}
            onChange={updateSearch}
            placeholder="Search Movies here" />
            </Form>
            {count>=5 && <Alert variant="danger">You can nominate only 5 movies!</Alert> }

        </div>
    )
}

export default SearchBar
