import React from 'react'
import { useState } from 'react'
import InputField from '../../component/InputField'
import GamePad from '../../assets/images/GamePad.png'
import './auth.scss'

export default function Auth() {
    const [isRegister, setIsRegister] = useState(true)

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

    const input1 = new InputData('text', 'Enter Username', 'Username', 'login_username', 'login_username', 'login_username',)
    const input2 = new InputData('email', 'Enter email', 'Email', 'login_email', 'login_email', 'login_email',)
    const input3 = new InputData('password', 'Password', 'Repeat Password', 'login_password', 'login_password', 'login_password',)
    const input4 = new InputData('text', 'Enter email address or Username', 'Email address or Username', 'login_username', 'login_username', 'login_username',)
    const input6 = new InputData('password', 'Password', 'Password', 'login_password', 'login_password', 'login_password',)
    const input5 = new InputData('password', 'Password', 'Create Password', 'login_password', 'login_password', 'login_password',)

    const [registerInputData, setRegisterData] = useState([input1, input2, input5, input3])
    const [loginInputData, setloginDate] = useState([input4, input6])

    const setLog = {
        fontSize: '16px',
        lineHeight: '20px',
        textDecorationLine: 'underline',
        color: '#C71F1F',
        cursor: 'pointer',
        transition: `all 500ms ease-out`
    }

    const checkRegister = () => {
        setIsRegister(!isRegister)
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
                { isRegister ? 
                <div className='register-auth'>
                    <form action="" method="post">
                        <div className="register-form-title">Join the game!</div>
                        <p className="register-description">Go inside the best gamers social network!</p>
                        
                        {registerInputData.map((item, idx) => {
                            return <InputField key={idx} item={item} />
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
                            Do you already have an account?  <span style={setLog} onClick={checkRegister} >Log in</span>
                        </div>
                    </form>

                </div>
                :
                <div className='login-auth'>
                    <form action="" method="post">
                        <div className="login-form-title">Welcome Back!</div>
                        <p className="login-description">Go inside the best gamers social network!</p>
                        
                        {loginInputData.map((item, idx) => {
                            return <InputField key={idx} item={item} />
                        })}

                        <div className="form-group">
                            <button type="submit"> Login</button>
                        </div>
                        <div className="check-register">
                            Don’t have an account?  <span style={setLog} onClick={checkRegister} >Sign Up</span>
                        </div>
                    </form>
                </div>
            }
            </div>
       </div>
    </div>
  )
}
