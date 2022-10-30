import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NODATA from '../../../assets/images/nodata.png'
import './nodata.scss'

export default function NoData() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)

        setTimeout(() => {
            window.location.reload(false)
        }, 200);
       
    }
  return (
    <div className="nodata__container">
       <div className="nodata">
            <div className="dev__error_content_image">
                <img src={NODATA} alt="" className=''/>
            </div>
            <div className="dev__error_content__title">
                <h3> Data not found </h3>
            </div>
            <div className="dev__error_content__message">
                <p>Sorry we can’t load the page you are looking for </p>
            </div>
            <div className="dev__error_content__btn">
                <Button variant="danger" onClick={goBack}>Go back To Previous Page</Button>
            </div>
       </div>
    </div>
  )
}
