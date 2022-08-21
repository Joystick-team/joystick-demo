import React from 'react'

export default function InputField(props) {
  return (
    <>
        <div className={`form-group bmd-form-group ${props.item.groupClass}`}>
            <label className={`bmd-label-static ${props.item.labelClass}`}>{props.item.label} <span>*</span></label>
            <input name={props.item.name} type={props.item.type} onChange={props.onChange} className={`form-control ${props.item.inputClass}`} placeholder={props.item.placeholder} required/>
        </div>
    </>
  )
}
