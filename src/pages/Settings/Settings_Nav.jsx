import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateProfileAction } from '../../Actions/updateProfileAction'
import { profileFormAction } from '../../Actions/profileForm.Action';
import "./navs.css"
const Settings_Nav = ({ navs, active, setSelected, id, }) => {

    const [showAccount, setShowAccount] = useState(false)
    const [showScurity, setShowSecurity] = useState(false)

    const dispatch = useDispatch()

    const handleChange = () => {
        if (id === "Security") {
            dispatch(updateProfileAction(false))
            dispatch(profileFormAction(false))
        }
        if (id === "Account") {
           dispatch(updateProfileAction(true))
        }
        setSelected(id)
    }

    
    
    
    useEffect(() => {
       
        
    }, [active])
    return (
        <li className={
            active ? "active" : "unactive"}
            onClick={handleChange}>
          <span className={active ? "active_span" : "unactive"}>{navs}</span>
      </li>
  )
}

export default Settings_Nav
