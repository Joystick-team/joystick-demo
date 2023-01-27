import React,{useState} from 'react'
import "./recommendation.scss"
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
import LoadingButton from '../../../../../../component/LoadingButton'


export default function Recommendations ({recommendations}) {
  const [trigger,setTrigger]=useState(false)
  return (
    <div className='recommendation-div'>
        <main className='recommendation-div-top'>
            <h5>
                People you might know
            </h5>
            <h5 style={{color:"red"}}>
           {trigger?
               <span onClick={()=>setTrigger(false)}> See less</span>
                :
                <span onClick={()=>setTrigger(true)}> See All</span>
           }
            </h5>
        </main>
      <div className='recommendation-scroll'>
     { trigger?
        <>
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

       </>
          :
            
          <main  className='recommendation-div-mid'>
          <img src={ recommendations[0]?.img}/>
         <h5 >
           <span className='recommendation-name'>{recommendations[0]?.name}</span>
           <span className='recommendation-descp'>{recommendations[0]?.description}</span>
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
       }
     </div>
  

    </div>
  )
}
