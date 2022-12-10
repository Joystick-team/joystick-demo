import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { logoutAction } from '../../Actions/Authentication/Signin.Action'
import './dropdown.scss'

export default function SelectDropDown(props) {
  const optionsList = props.options
  const [currentOption, setCurrentOption] = useState();
  const { userToken } = useSelector(state => state.signin)
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logoutAction())
    navigate("/home")
  }
  useEffect(() => {
    if(currentOption){
      props.getValue(currentOption)
      
    }
    //eslint-disable-next-line
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
      {!userToken?.access_token &&  optionsList.map((item, idx) => (
          <Dropdown.Item as="button" onClick={ e => {
            setCurrentOption(e.target.value);
          } } key={idx} value={item}>{item}</Dropdown.Item>
      ))}
        {
          userToken?.access_token &&<Dropdown.Item as="button" onClick={logoutHandler}>
          logout
        </Dropdown.Item>
        }
    </DropdownButton>

    </div>
  )
}