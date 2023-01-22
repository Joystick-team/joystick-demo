import React,{useEffect} from 'react'
import "./navs.css"
const Settings_Nav = ({ navs, active, setSelected, id }) => {
    
    useEffect(()=>{console.log("selcted", id)},[active])
  return (
      <li className={
          active ? "active" : "unactive"}
          onClick={() => setSelected(id)}>
          <span className={active ? "active_span" : "unactive"}>{navs}</span>
      </li>
  )
}

export default Settings_Nav
