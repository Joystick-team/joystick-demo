import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { AppContextInit } from '../../context/AppContext'
import './dropdown.scss'
export default function SelectDropDown(props) {
  const optionsList = props.options
const [currentOption, setCurrentOption] = useState();

  useEffect(() => {
    if(currentOption){
      props.getValue(currentOption)
      // props.clicked()
    }
  }, [currentOption])
  return (
    <div className='select'>
      {/* <label htmlFor="label">
      <span className="label">{props.label}</span>
        <select name="label" id="label" onChange={(event) => props.onChange(event.target.value)}>
        <option value={props.placeholder} disabled hidden> 
          {` ${props.placeholder ?? 'Choose...'}`}
           {props.children}
        </option>
          {optionsList.map((item, idx) => (
            <option key={idx} value={item}> {item} </option>
          ))}
        </select>
        
      </label>   */}



    <DropdownButton id="dropdown-basic-button" title={props.placeholder} >
      {optionsList.map((item, idx) => (
          <Dropdown.Item as="button" onClick={ e => {
            setCurrentOption(e.target.value);
          } } key={idx} value={item}>{item}</Dropdown.Item>
      ))}
    </DropdownButton>

    </div>
  )
}