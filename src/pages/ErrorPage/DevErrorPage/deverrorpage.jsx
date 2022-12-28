import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import heavy from '../../../assets/images/Heavy moving.png'
import JOYSTICK from '../../../assets/images/JOYSTICK-logo.png'
import JOYSTICK2 from '../../../assets/images/JOYSTICK-light.png'
import './deverrorpage.scss'

export default function DevErrorPage() {
    function getDeviceTheme() {
        if (window.matchMedia) {
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark';
            } else {
            return 'light';
            }
        }
        return 'light';
    }
    const deviceTheme = getDeviceTheme()

    // eslint-disable-next-line 
    const [themeDetector, setThemeDetector] = useState(localStorage.getItem('dark') ?? deviceTheme)
    const navigate = useNavigate()
    
    const goBack = () => {
        navigate(-1)

        setTimeout(() => {
            window.location.reload(false)
        }, 200);
       
    }

  return (
    <div className='deverrorpage'>
        <div className="dev__error__logo">
                <Link className={'no__link'} to="/">
                    
                    { themeDetector === 'light' || themeDetector === null ? 
                        <img src={JOYSTICK} alt="JOYSTICK-logo" />
                        :
                        <img src={JOYSTICK2} alt="JOYSTICK-logo" />
                    }
                </Link>
        </div>
        <div className="dev__error_content__container">
           <div className="dev__error_content">
                <div className="dev__error_content_image">
                    <img src={heavy} alt="" className=''/>
                </div>
                <div className="dev__error_content__title">
                    <h3> <span>Oooops!</span> Wrong Move</h3>
                </div>
                <div className="dev__error_content__message">
                    <p>You’ve found a page that does’t exist. Breathe in, breath out, eat well and try again</p>
                </div>
                <div className="dev__error_content__btn">
                    <Button variant="danger" onClick={goBack}>Go back To Previous Page</Button>
                </div>
           </div>
        </div>
    </div>
  )
}
