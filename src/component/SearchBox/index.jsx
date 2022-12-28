import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import './search.scss'

export default function SearchBox(props) {
  return (
    <div className="search-box-holder">
        <Form className="d-flex search-box-container">
            <span><FiSearch /></span>
            <FormControl
                type="search"
                placeholder={` Search...`}
                className="me-2 search-box"
                aria-label="Search"
                onChange={(event) => event.stopPropagation()}
                onClick={props.onClick}
            />
            {/* <Button type='search' variant="outline-success">Search</Button> */}
        </Form>
    </div>
  )
}
