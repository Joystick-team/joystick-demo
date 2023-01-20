import React from 'react'
import "./intro.scss"
import  vector1 from "../../../../../../../assets/images/vector1.png"
import  vector2 from "../../../../../../../assets/images/Vector.png"
import  vector3 from "../../../../../../../assets/images/Vector3.png"

export default function Intro() {
  return (
      <div className='intro-div'>
                <div className='intro-header'>
                <h5>INTRO</h5>
                </div>
                <div className='intro-body-top'>
                   <main className='intro-body-top-item'>
                      <img src={ vector1} />
                      <h5>{"RayLous.com"}</h5>

                   </main>

                   <main className='intro-body-top-item'>
                      <img src={ vector2} />
                      <h5>{"Male"}</h5>

                   </main>


                   <main className='intro-body-top-item'>
                      <img src={ vector3} />
                      <h5>{"Birthday, Sep 22,2022"}</h5>

                   </main>

                  </div>

                  <div className='intro-body-social'>
                      <h5>SOCIALS</h5>


                  </div>
            
    </div>
  )
}
