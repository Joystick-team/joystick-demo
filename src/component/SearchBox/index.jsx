import React,{useState} from 'react'
import { Form, FormControl,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchAction } from '../../Actions/Search.Action'
import { FiSearch } from 'react-icons/fi'
import './search.scss'

export default function SearchBox(props) {
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch()

  const searchHandler = (e) => {
    e.preventDefault()
    // props.onSearch(searchTerm)
    dispatch(searchAction(searchTerm))
    setSearchTerm("")
  }
  return (
    <div className="search-box-holder">
        <Form className="d-flex search-box-container" onSubmit={searchHandler}>
            <span><FiSearch /></span>
            <FormControl
                type="search"
                placeholder={` Search...`}
                className="me-2 search-box"
          aria-label="Search"
          value={searchTerm}
                // onChange={(event) => event.stopPropagation()}
                onChange={(e) =>setSearchTerm(e.target.value)}
                // onClick={props.onClick}
            />
            <Button type='search' variant="outline-success">Search</Button>
        </Form>
    </div>
  )
}
