import React from 'react'
import "./recommendation.scss"
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
import LoadingButton from '../../../../../../component/LoadingButton'


export default function Recommendations ({recommendations}) {
  return (
    <div className='recommendation-div'>
        <main className='recommendation-div-top'>
            <h5>
                People you might know
            </h5>
            <h5 style={{color:"red"}}>
                See All
            </h5>
        </main>
       {recommendations.map((recommendation)=>{
          return(
            
             <main  className='recommendation-div-mid'>
               <img src={ recommendation?.img}/>
              <h5 >
                <span className='recommendation-name'>{recommendation?.name}</span>
                <span className='recommendation-descp'>{recommendation?.description}</span>
                 <h6>
                    <AiFillFacebook />
                    <AiFillInstagram />
                    <AiFillLinkedin />
                 </h6>

                 <main className='recommendation-div-btns'>
                  <LoadingButton type='submit' title={"Ignore"} variant='red'  className='ignore-btn'/>
                 <LoadingButton type='submit' title={"Follow"} variant='red'  className='follow-btn'/>
                 </main>
             </h5>

           
            </main>
           
          )
       })
    
       }

  

    </div>
  )
}
