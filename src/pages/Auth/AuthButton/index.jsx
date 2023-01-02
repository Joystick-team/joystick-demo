import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { FaUserAlt } from 'react-icons/fa'
import Auth from '..'
import ModalEffect from '../../../component/Modal'
import SelectDropDown from '../../../component/SelectDropDown'
import { AppContextInit } from '../../../context/AppContext'

export default function AuthButton() {
    // const [isOpen, setIsOpen] = useState(false)
    // const [isRegister, setIsRegister] = useState(false)
    const { signin_loading, signin_success, signin_error, userToken } = useSelector(state => state.signin)
    const { userId,signup_success } = useSelector(state => state.signup)
    const [signUp, setSignUp] = useState(true)
    const {setMobileDrawer, regModal, setRegModal, isUser} = AppContextInit();

    const toggleRegister = () => {
        setRegModal(false);
    }

    const checkRegister = () => {
        setSignUp(!signUp)
    }

    const options = ['Login', 'Sign Up']

    let handleChange = (options) => {
        // console.log(options)
        if(options === 'Login') { 
           setRegModal(true)
           setSignUp(false)
        } else if(options === 'Sign Up') {
            setRegModal(true)
           setSignUp(true)
        }
            setMobileDrawer(false)
        
    }
    useEffect(() => {
     const timer = setTimeout(() => {
         signup_success&& setSignUp(false)
     }, 1000);
        return ()=>clearInterval(timer)
    },[signup_success])

  return (
    <>{
        !isUser &&     
        <div className="user-reg" style={{cursor: 'pointer'}}>
        <ModalEffect show={signin_success? false:regModal} closeModal={toggleRegister}>
            <div className="">
                <Auth isRegister={signUp} checkRegister={checkRegister} />
            </div>
        </ModalEffect>
    
            <div className="user-reg-icons">
                <abbr title="User login">
                    <SelectDropDown options={options} 
                        placeholder={<FaUserAlt />}
                        label={<FaUserAlt />}
                        getValue={handleChange}
                        // clicked={props.clicked}
                    /> 
                </abbr>
            </div>
        </div>
    }</>
  )
}
