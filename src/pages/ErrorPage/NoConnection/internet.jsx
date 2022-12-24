import React from 'react'
import { Button } from 'react-bootstrap'
import NotConnectImg from '../../../assets/images/network.png'
import './noconnection.scss'

export default function NoInternet() {
    const goBack = () => {
        setTimeout(() => {
            window.location.reload(false)
        }, 100);
    }
  return (
    <div className="noconnection__container">
        <div className="noconnection">
            <div className="noconnection_content_image">
                <img src={NotConnectImg} alt="" className=''/>
            </div>
            <div className="noconnection_content__title">
                <h3> You appear to be offline </h3>
            </div>
            <div className="noconnection_content__message">
                <p>check internet connection</p>
            </div>
            <div className="noconnection_content__btn">
                <Button variant="danger" onClick={goBack}>Try Again</Button>
            </div>
        </div>
    </div>
  )
}
