import React from 'react'
import { useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { signupAction } from '../../Actions/Authentication/Sigup.Action'
import { loginAction } from '../../Actions/Authentication/Signin.Action'
import Message from '../../component/Message'
import Loader from '../../component/Loader'
// import InputField from '../../component/InputField'
import GamePad from '../../assets/images/GamePad.png'
import  { default as api } from '../../config/config.json'
import './auth.scss'
import { AppContextInit } from '../../context/AppContext'
import axios from 'axios'

export default function Auth(props) {
    // eslint-disable-next-line
    const [first_name,setFirstname] = useState("")
    const [last_name,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [login_username,setLogin_username] = useState("")
    const [login_password, setLogin_password] = useState("")

    const [check, setCheck] = useState(false)
    const [disable, setDisable] = useState(true)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error, userId,signup_success } = useSelector(state => state.signup)
    const { signin_loading,signin_success, signin_error, userToken } = useSelector(state => state.signin)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signupAction(first_name, last_name, email, password, username));
        setFirstname("");
        setLastname("");
        setEmail("");
        setUsername("");
        setPassword("");
    }
    const loginHandler = (e) => {
        e.preventDefault()
        dispatch(loginAction(login_username,login_password))
    }
    useEffect(() => {
        signin_success && navigate("/home")
        check&&setDisable(false)
        !check&& setDisable(true)
    },[signin_success,navigate,check])
    
    const { isUser, setIsUser, message, setMessage, success, setSuccess } = AppContextInit()

    function InputData(type, placeholder, label, htmlFor, name, id, labelClass, inputClass, groupClass){
        this.type = type
        this.placeholder = placeholder
        this.label = label
        this.htmlFor = htmlFor
        this.name = name
        this.id = id
        this.labelClass = labelClass
        this.inputClass = inputClass
        this.groupClass = groupClass
    }

    const input1 = new InputData('text', 'Enter Username', 'Username', 'username', 'username', 'login_username1',)
    const input2 = new InputData('email', 'Enter email', 'Email', 'email', 'email', 'login_email2',)
    const input5 = new InputData('password', 'Password', 'Create Password', 'password', 'password', 'login_password6',)
    const input3 = new InputData('password', 'Password', 'Repeat Password', 'repeat_password', 'repeat_password', 'login_password3',)

    const input4 = new InputData('text', 'Enter email address or Username', 'Email address or Username', 'email', 'email', 'login_username4',)
    const input6 = new InputData('password', 'Password', 'Password', 'password', 'password', 'login_password5',)

    // eslint-disable-next-line
    const [registerInputData, setRegisterData] = useState([input1, input2, input5, input3])
    // eslint-disable-next-line
    const [loginInputData, setloginDate] = useState([input4, input6])

    const [isLoading, setIsLoading] = useState(false)
    const [inputsData, setInputsData] = useState({});

    async function postDataAuth({url, option, res}) {
        var config = {
            method: 'post',
            url: url,
            headers: { },
            data : option
          };

        try{ 
            setIsLoading(true)
            const response =  await axios(config);
            console.log(response.status)
                setSuccess(true)
                setMessage(() => res)
                localStorage.setItem('userToken', response.data.access_token)
                setIsLoading(false)
                setIsUser(true)

        }catch(error){ 
            setIsLoading(true)
            setSuccess(false)
            setMessage(() => error.response.data.message ?? res)
            console.log(error.response.data.message);
            setIsLoading(false)
            setIsUser(true)

            setTimeout(() => {
                setIsUser(false)
            }, 2000);
        }   

    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputsData(prev => ({...prev, [name]: value}))
    }
    
    const handleLoginSubmit = async (event) => {
        event.preventDefault(); 
        postDataAuth({
            url: `${api.test_url}/api/v1/auth/login`, 
            option : inputsData, 
            res : success ? "Welcome Back" : "An error occured during Login"
        })     
    }

    let handleRegisterSubmit = async (e) => {
        e.preventDefault();

        postDataAuth({
            url: `${api.test_url}/api/v1/auth/signup`, 
            option : inputsData, 
            res :  success ? "User created successfully" : "An error occured during signup"
        })  
      };

    const setLog = {
        fontSize: '16px',
        lineHeight: '20px',
        textDecorationLine: 'underline',
        color: '#C71F1F',
        cursor: 'pointer',
        transition: `all 500ms ease-out`
    }

  return (
    <div className="auth">
       <div className="auth-container">
            <div className="auth__image__container">
                <div className="auth__image">
                    <img src={GamePad} 
                        alt="auth-label" 
                    />
                </div>
            </div>
            <div className="auth__content">
                {  !props.isRegister ? 
                
                <div className='login-auth'>
                          <form onSubmit={loginHandler}>
                              {
                                  signin_loading ? <Loader /> : signin_success ? "logged In!" : signin_error && <Message varriant="danger" text={signin_error} />
                              }
                        <div className="login-form-title">Welcome Back!</div>
                        <p className="login-description">Go inside the best gamers social network!</p>
                        
                        {/* {loginInputData.map((item, idx) => {
                            return <InputField key={idx} onChange={handleChange} item={item} />
                        })} */}
                        <div className={`form-group bmd-form-group`}>
                            <label className={`bmd-label-static`}>Enter Username <span>*</span></label>
                            <input name='username' type="text" onChange={(e)=>{setLogin_username(e.target.value)}} value={login_username} className={`form-control `} placeholder='Enter Username' required/>
                        </div>

                        <div className={`form-group bmd-form-group`}>
                            <label className={`bmd-label-static`}>Password <span>*</span></label>
                            <input name='password' type="password" onChange={(e)=>{setLogin_password(e.target.value)}} value={login_password} className={`form-control `} placeholder='Enter Password' required/>
                        </div>

                        <div className="form-group">
                            <button type="submit"> {`${isLoading ? 'Loading...' : 'Login'}`}</button>
                        </div>
                        <div className="check-register">
                            Don’t have an account?  <span style={setLog} onClick={props.checkRegister.bind()} >Sign Up</span>
                        </div>
                    </form>
                </div>
                 :
                 (<div className='register-auth'>
                 {/* <form action="" method="post" onSubmit={handleRegisterSubmit}>
                     <div className="register-form-title">Join the game!</div>
                     <p className="register-description">Go inside the best gamers social network!</p>
                     
                     {registerInputData.map((item, idx) => {
                         return <InputField key={idx} onChange={handleChange} item={item} />
                     })}

                     <div className="form-group">
                         <label htmlFor="register_checkbox">
                             <input type="checkbox" className='register_checkbox' id='register_checkbox' name='register_checkbox' />
                             {' '} I agree to terms & conditions
                         </label>
                     </div>
                     <div className="form-group">
                         <button type="submit" >{`${isLoading ? 'Loading...' : 'Register'}`}</button>
                     </div>
                     <div className="check-register">
                         Do you already have an account?  <span style={setLog} onClick={props.checkRegister.bind()} >Log in</span>
                     </div>
                 </form> */}
                 <form action="" method="post" onSubmit={handleSubmit}>
                     <p className="register-form-title">Join the game!</p>
                     <p className="register-description">Go inside the best gamers social network!</p>
                              {
                                  loading ? <Loader /> : signup_success ? <Message text="registered! please login" />:error&&<Message text={error}/>
                              }
                        <div >
                            <label className={`bmd-label-static`}>Enter Username <span>*</span></label>
                            <input name="username" type="text" onChange={(e)=>{setUsername(e.target.value)}} value={username} className={`form-control `} placeholder={'Enter Username'} required/>
                        </div>
                        <div >
                            <label className={`bmd-label-static`}>Enter Firstname <span>*</span></label>
                            <input name="first_name" type="text" onChange={(e)=>{setFirstname(e.target.value)}} value={first_name} className={`form-control `} placeholder={'Enter Firstname'} required/>
                        </div>
                        <div >
                            <label className={`bmd-label-static`}>Enter Lastname <span>*</span></label>
                            <input name="last_name" type="text" onChange={(e)=>{setLastname(e.target.value)}} value={last_name} className={`form-control `} placeholder={'Enter Lastname'} required/>
                        </div>
                        <div >
                            <label className={`bmd-label-static`}>Enter Email <span>*</span></label>
                            <input name="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} className={`form-control `} placeholder={'Enter Email'} required/>
                        </div>
                        <div >
                            <label className={`bmd-label-static`}>Enter Password <span>*</span></label>
                            <input name="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} className={`form-control `} placeholder={'Enter Password'} required/>
                        </div>
                        {/* <div className={`form-group bmd-form-group`}>
                            <label className={`bmd-label-static`}>Enter Username <span>*</span></label>
                            <input name="password2" type="password" onChange={handleChange} className={`form-control `} placeholder={'Enter Confirm password'} required/>
                        </div> */}

                     <div className='check_box--container' >
                        <input type="checkbox" id='register_checkbox' name='register_checkbox' onChange={(e)=>{setCheck(prev=>!prev)}} />
                        <span>I agree to terms & conditions</span>
                     </div>
                     <div>
                         <button type="submit" disabled={disable?true:false} className={!disable&& "btn_color"}>Signup</button>
                     </div>
                             
                     <div className="check-register">
                         Do you already have an account?  <span style={setLog} onClick={props.checkRegister.bind()} >Log in</span>
                    </div>
                 </form>

             </div>)
            }
            </div>
       </div>
    </div>
  )
}
