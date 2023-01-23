import React from 'react'
import "./Update.form.css"


export const UpdateForm = () => {
  return (
    <div className='update--container'>
        <h3>Update Profile</h3>
          <form>
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
                      <input type="date"/>
                  </div>
                  <div>
                      <label>Gender</label>
                      <input type="checkbox"/>
                      <input type="checkbox"/>
                  </div>
              </div>
        </form>
    </div>
  )
}
