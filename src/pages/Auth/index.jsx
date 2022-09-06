import React from 'react'
import { useState } from 'react'
import InputField from '../../component/InputField'
import GamePad from '../../assets/images/GamePad.png'
import  { default as api } from '../../config/config.json'
import './auth.scss'
import { AppContextInit } from '../../context/AppContext'
import axios from 'axios'

export default function Auth(props) {
    // eslint-disable-next-line
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

    const [inputsData, setInputsData] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputsData(prev => ({...prev, [name]: value}))
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        var config = {
            method: 'post',
            url: `${api.url}/auth/login`,
            headers: { },
            data : inputsData
          };
           
          axios(config)
          .then(function (response) {
            console.log(response.data);
                JSON.stringify(response.inputsData);
                
                setSuccess(true)
                setMessage("Welcome Back");
                setIsUser(true)
                console.log('test 1', success);
                localStorage.setItem('userToken', response.inputsData.access_token)
          })
          .catch(function (error) {
            
            setSuccess(false)
            setMessage("An error occured during Login");
            setIsUser(true)
            console.log('test 2', success);
            
            console.log(error);

            setTimeout(() => {
                setIsUser(false)
            }, 2000);
          });
    }

    let handleRegisterSubmit = async (e) => {
        e.preventDefault();

        var config = {
            method: 'post',
            url: `${api.url}/auth/signup`,
            headers: { },
            data : inputsData
          };
          axios(config)
          .then(function (response) {
            console.log(response.inputsData);
            JSON.stringify(response.inputsData);
            
            console.log('test 3', success);
                localStorage.setItem('userToken', response.inputsData.access_token)
                setMessage("User created successfully");
                setIsUser(true)
                setSuccess(true)
          })
          .catch(function (error) {
            
            console.log('test 4', success);
            setMessage("An error occured during Registration");
            setIsUser(true)
            setSuccess(false)
            console.log(error);

            setTimeout(() => {
                setIsUser(false)
            }, 2000);
          });
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
                { props.isRegister ? 
                
                <div className='login-auth'>
                    <form action="" method="post" onSubmit={handleLoginSubmit}>
                        <div className="login-form-title">Welcome Back!</div>
                        <p className="login-description">Go inside the best gamers social network!</p>
                        
                        {/* {loginInputData.map((item, idx) => {
                            return <InputField key={idx} onChange={handleChange} item={item} />
                        })} */}
                        <div className={`form-group bmd-form-group`}>
                            <label className={`bmd-label-static`}>Enter Username <span>*</span></label>
                            <input name={'username'} type={'username'} onChange={handleChange} className={`form-control `} placeholder={'Enter Username'} required/>
                        </div>

                        <div className={`form-group bmd-form-group`}>
                            <label className={`bmd-label-static`}>Password <span>*</span></label>
                            <input name={'password'} type={'password'} onChange={handleChange} className={`form-control `} placeholder={'Enter Password'} required/>
                        </div>

                        <div className="form-group">
                            <button type="submit"> Login</button>
                        </div>
                        <div className="check-register">
                            Don’t have an account?  <span style={setLog} onClick={props.checkRegister.bind()} >Sign Up</span>
                        </div>
                    </form>
                </div>
                 :
                 (<div className='register-auth'>
                 <form action="" method="post" onSubmit={handleRegisterSubmit}>
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
                         <button type="submit" >Register</button>
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
