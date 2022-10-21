import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ErrorImag from '../../assets/gif/404new.gif'

import './errorpage.scss'
export default function ErrorPage({message, btn, ...rest}) {
    const navigate = useNavigate()
    
    const goBack = () => {
        navigate(-1)
    }
  return (
    <div className='error-page-container'>
        <div className="error-page-holder">
            <div className="">
                <div className="error-page-title">
                    <h4>Page Not Found</h4>
                </div>
                <div className="error-page-message">
                    <p>{message ?? 'We are sorry the page you are looking for could not be found...'}</p>
                </div>
                <div className="error-page-img">
                    <img src={ErrorImag} alt="error-page" />
                </div>
            </div>
        </div>
        <div className="error-page-btn">
            {/* <button type='reset' onClick={goBack}>{btn ?? 'Go back'}</button> */}
            <Button variant="danger" onClick={goBack}>{btn ?? 'Go back'}</Button>
        </div>
    </div>
  )
}
