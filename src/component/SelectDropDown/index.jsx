import React from 'react'

export default function SelectDropDown(props) {
  const optionsList = props.options

  return (
    <div className='select'>
      <label htmlFor="label">
      <span className="label">{props.label}</span>
        <select name="label" id="label" onChange={(event) => props.onChange(event.target.value)}>
        <option value={props.placeholder} disabled selected hidden> 
          {` ${props.placeholder ?? 'Choose...'}`}
          {/* {<FaUserAlt />} */}
          {props.children}
        </option>
          {optionsList.map((item, idx) => (
            <option key={idx} value={item}> {item} </option>
          ))}
          <datalist>{props.label}</datalist>
        </select>
        
      </label>
  
    </div>
  )
}