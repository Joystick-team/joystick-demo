import React, { useState,useEffect,useMemo } from 'react'
import { useDispatch, useSelector } from "react-redux"
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import chroma from 'chroma-js';


import { profileAction } from '../../Actions/Authentication/Profile.Action'
import { updateProfileAction } from '../../Actions/Authentication/Profile.Update.Action'; 
import { profileFormAction } from '../../Actions/profileForm.Action';
import axios from "axios"
import "./Update.form.css"


export const UpdateForm = () => {

    const { profile_data } = useSelector(state => state.profile)
    const { userToken } = useSelector(state => state.signin)
   

    const {
        profile_updating,
        profile_update_success,
        profile_update_data,
        profile_update_error
    } = useSelector(state => state.profileUpdate)
    
    const [type, setType] = useState("text")
    const [focus, setFocus] = useState(false)
        
    const [first_name,setFirstname] = useState("")
    const [last_name, setLastname] = useState("")
    const [username,setUsername]= useState("")
    const [email,setEmail] = useState("")
    const [avatar,setAvater] = useState("")
    const [cover,setCover] = useState("")
    const [bio,setBio] = useState("")
    const [website,setWebsite] = useState("")
    const [location,setLocation] = useState("")
    const [phone,setPhone] = useState("")
    const [date,setDate] = useState()
    const [gender, setGender] = useState("male")
    const [image, setImage] = useState(null)
    const [crop, setCrop] = useState()
    const [completedCrop,setCompletedCrop] = useState(null)
    const [aspect] = useState(1/1)
    const [test, setTest] = useState(null)
    const [fileName, setFileName] = useState("")
    const [fileType, setFileType] = useState("")

    const options = useMemo(() => countryList().getData(), [])
    

    const changeLocationHandler = value => {
        setLocation(value)
    }

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'transparent',width:"20rem",color:"white" }),
        option: (base, state) => ({
            ...base,
            backgroundColor: "grey",
        })
    };

    // console.log("phone", "+".concat(phone))
    // const modifiedPhoneNumber =  "+".concat(phone)

    const fetchProfile = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken?.access_token}`
            }
        }
        const { data } = await axios.get("https://api.joysticklabs.io/api/v1/auth/profile", config)
        console.log(data,"profile")
        setEmail(data?.email)
        setUsername(data?.username)
    }
   
    const dispatch = useDispatch()

    useEffect(() => {
        userToken?.access_token && dispatch(profileAction())
        profile_data && setEmail(profile_data?.email)
        fetchProfile()
    },[userToken?.access_token,dispatch])

    const handleImageChange = (e) => {
        const { files } = e.target;
        console.log("files",files[0])
        if (files && files.length > 0) {
            setFileName(files[0].name)
            setFileType(files[0].type)
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.addEventListener("load", () => {
                setImage(reader.result)
                // console.log("base64",reader.result)
            })
        }
    }

    console.log('location',location?.label)

    function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || "";
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        // console.log(byteArrays);

        return new File(byteArrays, fileName, { type: contentType });
    }

    const imgLoad = (e) => {
        const base64 = e.currentTarget.src
        const result = b64toBlob(base64.substring(base64.indexOf(",") + 1),fileType)
        setAvater(result);
        console.log("img",result)
    }  
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        // const avatar = await resizeFile(image)
        // console.log("avater",avatar)
        const formData = new FormData();
        formData.append("first_name", first_name);
        formData.append("last_name", last_name);
        formData.append("website", website);
        formData.append("location", location?.label);
        formData.append("phone", "+".concat(phone) );
        formData.append("date", date);
        formData.append("gender", gender);
        // formData.append("avatar", avatar);
        formData.append("bio", bio);
        dispatch( updateProfileAction(formData))
        //this is to see the values contained in the formData
        // for (let pair of formData.entries()) {
        //   console.log(pair); 
        // }
  }
    
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
          {
              profile_updating?"updating":profile_update_success?"success":profile_update_error&&"error"
          }
          <form onSubmit={handleSubmit}>
              
              <div className='cover--container'>
                  <input className='cover-pic--input' value={cover} onChange={ (e)=>setCover(e.target.value)}  type="file"/>
                  <img src='/assets/images/camera.png' alt='camera' className='camera'/>
              </div>
              <div className='circular_input--container'>
                  <input className='circular_input' type="file" onChange={handleImageChange} />
                  <img src='/assets/images/snap.png' alt='snap' className='snapImg'/>
              </div>
              <div className='flexedInputContainer'>
                  <div className='firstName--container'>
                      <label>First Name</label>
                      <input
                          value={first_name}
                          onChange={(e) => setFirstname(e.target.value)}
                          required
                      />
                  </div>
                  <div className='lastName--container'>
                      <label>Last Name</label>
                      <input
                          value={last_name}
                          onChange={(e) => setLastname(e.target.value)}
                       />
                  </div>
              </div>  
              <div className='username_phone--group'>
                    <div className='username--container'>
                        <label>Username</label>
                        <input value={username}/>
                    </div>
                    <div className='phone--container'>
                        <label>Phone number</label>
                        {/* <input/> */}
                        <PhoneInput
                            country={'NG'}
                            value={phone}
                            onChange={call => setPhone(call)}
                            className="phone--input"
                          inputStyle={{ backgroundColor: "transparent",color:"white" }}
                          dropdownStyle={{backgroundColor:"transparent"}}
                            
                        />
                    </div>
                  </div>
              <div className='location--container'>
                  <label>Location</label>
                  {/* <input value={location} onChange={ (e)=>setLocation(e.target.value)} /> */}
                  <Select
                      options={options}
                      value={location}
                      onChange={changeLocationHandler}
                      styles={colourStyles }
                     
                  />
              </div>
              <div className='website--container'>
                  <label>Website</label>
                  <input value={website} onChange={ (e)=>setWebsite(e.target.value)}/>
              </div>
              <div className='bio--container'>
                  <label>Bio</label>
                  <textarea
                      cols={33}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                   />
              </div>
              <div className='email--container'>
                  <label>Email</label>
                  <input value={email} />
              </div>
              <div className='flexedBio--container'>
                  <div className='Dob--container'>
                      <label>Date of Birth</label>
                      <input type={type}
                          placeholder="MM/DD/YYYY"
                          onFocus={focusHandler}
                          onBlur={blurHandler}
                          className="calender--input"
                           value={date}
                          onChange={(e)=>setDate(e.target.value)}
                      />
                     {!focus&& <img src='/assets/images/calender.png' alt='calender' className='calender--img'/>}
                  </div>
                  <div className='gender--container' >
                      <label>Gender</label>
                      <div className='radioBtn--container' onChange={(e)=>setGender(e.target.value)} value={gender}>
                        <input type="radio" id='male' name='male' value="male" checked />
                        <label htmlFor='male'>M</label>
                        <input type="radio" id='female' name='male' value="female" />
                        <label htmlFor='female'>F</label>
                      </div>
                  </div>
                  <div className='btn--container'>
                       <button className='cancel-btn' id="cancel-btn" type="button" onClick={()=>dispatch(profileFormAction(false))}>cancel</button>
                       <button className='save-btn' id='save-btn' type="submit" >save</button>
                      {/* <div className='cancel-btn'>Cancel</div> */}
                     
                  </div>
              </div>
        </form>
    </div>
  )
}
