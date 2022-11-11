import React from 'react'
import ErrorImag from '../../assets/gif/404new.gif'

import './errorpage.scss'
export default function ErrorPage() {
  return (
    <div className='error-page-container'>
        <div className="error-page-holder">
            <div className="">
                <div className="error-page-title">
                    <h4>Page Not Found</h4>
                </div>
                <div className="error-page-message">
                    <p>We are are sorry the page you are looking for could not be found...</p>
                </div>
                <div className="error-page-img">
                    <img src={ErrorImag} alt="error-page" />
                </div>
            </div>
        </div>
    </div>
  )
}
