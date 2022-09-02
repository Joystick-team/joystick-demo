import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import Auth from '..'
import ModalEffect from '../../../component/Modal'
import SelectDropDown from '../../../component/SelectDropDown'

export default function AuthButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    
    const toggleRegister = () => {
        setIsOpen(!isOpen);
    }

    const checkRegister = () => {
        setIsRegister(!isRegister)
    }

    const options = ['Login', 'Sign Up']

    let handleChange = (options) => {
        if(options === 'Login') { 
            setIsOpen(true);
            setIsRegister(true)
        } else if(options === 'Sign Up') {
            setIsOpen(true);
            setIsRegister(false)
        }else{
            // setCurrentValue(`Game Option ${options}`) 
        }
    }

  return (
    <div className="user-reg" style={{cursor: 'pointer'}}>
    <ModalEffect show={isOpen} closeModal={toggleRegister}>
        <div className="">
            <Auth isRegister={isRegister} checkRegister={checkRegister} />
        </div>
    </ModalEffect>

        <div className="user-reg-icons">
            <abbr title="User login">
                <SelectDropDown options={options} 
                    placeholder={<FaUserAlt />}
                    label={<FaUserAlt />}
                    onChange={handleChange}
                /> 
            </abbr>
        </div>
    </div>
  )
}
