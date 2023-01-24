import React,{useState} from 'react'
import "./Update.form.css"


export const UpdateForm = () => {
    const [type, setType] = useState("text")
    const [focus,setFocus] = useState(false)
    
    const focusHandler = () => {
        setType("date")
        setFocus(true)
    }
    const blurHandler = () => {
        setType("text")
        setFocus(false)
    }
  return (
    <div className='update--container'>
          <h3>Update Profile</h3>
          <div className='img--rectangle'>
              <img src='/assets/images/inputRectangle.png' alt='camera' className='inputRectangle' />
              <img src='/assets/images/camera.png' alt='camera' className='camera'/>
          </div>
          <form>
              <div className='circular_input--container'>
                  <input className='circular_input' type="file" />
                  <img src='/assets/images/snap.png' alt='snap' className='snapImg'/>
              </div>
              <div className='flexedInputContainer'>
                  <div className='firstName--container'>
                      <label>First Name</label>
                      <input/>
                  </div>
                  <div className='lastName--container'>
                      <label>Last Name</label>
                      <input/>
                  </div>
              </div>  
              <div className='username--container'>
                  <label>UserName</label>
                  <input/>
              </div>
              <div className='bio--container'>
                  <label>Bio</label>
                  <textarea cols={33}/>
              </div>
              <div className='email--container'>
                  <label>Email</label>
                  <input/>
              </div>
              <div className='flexedBio--container'>
                  <div className='Dob--container'>
                      <label>Date of Birth</label>
                      {/* <input type="date" className='date--input' required pattern="\d{4}-\d{2}-\d{2}"/> */}
                      <input type={type} placeholder="MM/DD/YYYY" onFocus={focusHandler} onBlur={blurHandler} className="calender--input" />
                     {!focus&& <img src='/assets/images/calender.png' alt='calender' className='calender--img'/>}
                  </div>
                  <div className='gender--container'>
                      <label>Gender</label>
                      <div className='radioBtn--container'>
                        <input type="radio" id='male' name='male' value="male" />
                        <label htmlFor='male'>M</label>
                        <input type="radio" id='female' name='male' value="female" />
                        <label htmlFor='female'>F</label>
                      </div>
                  </div>
              </div>
        </form>
    </div>
  )
}
