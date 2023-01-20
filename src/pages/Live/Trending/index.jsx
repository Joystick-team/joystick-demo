import React, { useEffect, useState } from 'react'
import {TrendingData} from './trendingData'
import "./sliders.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import userAvarta from '../../../assets/images/userAvarta.png'
import Slicker from '../Slicker';


let slidesToShow = 3;
export default function TrendingStreams({trending}) {
    const disp = trending.map((t)=>{
        return(
            // <div className='col-md-3 col-6 mb-3' key={t.key}>
                <div className="card" style={{height: "326px"}}
                key={t.key}>
                    <img src={t.thumbnail} className='card-img-top'
                    alt='name' 
                    width='100%'
                    />
                    <div className='row-footer'>
                        <div className="card-img-overlay ">
                              <div className='row row-card-footer'>
                                <div className="col-2 col-md-1 align-self-center">
                                    <img src={t.user.avatar ? t.user.avatar : userAvarta } 
                                    // height={'70px'} 
                                    alt='profile-pics'/>
                                </div>
                                <div className="col-6 col-md-8 align-self-center pt-1">
                                    <p style={{fontSize: "12px"}}>
                                        {t.user.first_name ? <>{t.user.first_name} {t.user.last_name}</>  :  <>Hello Avatar!!</> } 
                                        <br/>
                                        {t.room_name}
                                    </p>
                                    
                                </div>
                                <div className="col-4 col-md-3 align-self-center">
                                  <button className='btn  pr-0 btn-trend mt-2'>
                                    <div className="row">
                                      <div className="col-7 pt-1">
                                        Live
                                      </div>
                                      <div className="col-5 align-self-center text-left">
                                        <img src={'/assets/images/Vector.png'} className='pr-1'
                                        height="90px" alt='vector'/>
                                      </div>
                                    </div>
                                      {/* <span className='ml-1'> </span> */}
                                  </button>
                                </div>
                            </div>
                      </div>
                    </div>
            </div>
        )
    })
   
  return (
    <div className='container'>
        <div className="row trending big">
        <Slicker rowNum={trending.length >4 ? 4 : trending.length} header={'Trending'}>
               {disp}
        </Slicker>
        </div>
        <div className="row trending small">
          <Slicker rowNum={1} header={'Trending'}>
                {disp}
          </Slicker>
        </div>
    </div>
  )
}
