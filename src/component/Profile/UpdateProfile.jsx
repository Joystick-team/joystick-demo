import React, { useState, useRef } from 'react';
import {useDispatch,useSelector} from "react-redux"
// import Resizer from "react-image-file-resizer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updateProfileAction } from '../../Actions/Authentication/Profile.Update.Action';
// import { updateProfileAction } from '../../Actions/updateProfileAction';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import "./UpdateProfile.css"
export const ProfileUpdate = () => {
  const avatarRef = useRef(null)
  // const cropperRef = useRef(null);
  // const image = avatarRef.current?.files[0]
  const [show, setShow] = useState(false);

  const [first_name,setFirstname] = useState("")
  const [last_name,setLastname] = useState("")
  const [avatar,setAvater] = useState("")
  const [bio,setBio] = useState("")
  const [website,setWebsite] = useState("")
  const [location,setLocation] = useState("")
  const [phone,setPhone] = useState("")
  const [date,setDate] = useState(new Date())
  const [gender, setGender] = useState("male")
  const [image, setImage] = useState(null)
  const [crop, setCrop] = useState()
  const [completedCrop,setCompletedCrop] = useState(null)
  const [aspect] = useState(1/1)
  const [test, setTest] = useState(null)
  const [fileName, setFileName] = useState("")
  const [fileType,setFileType] = useState("")


  // const resizeFile = (file) => new Promise(resolve => {
  //   Resizer.imageFileResizer(file, 200, 200, 'JPEG', 100, 0,
  //   uri => {
  //     resolve(uri);
  //   }, 'file',100,100 );
  // });
 
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
  console.log("completed",completedCrop)

  // function base64toBlob(base64Data, contentType) {
  //   contentType = contentType || '';
  //   var sliceSize = 1024;
  //   var byteCharacters = atob(base64Data);
  //   var bytesLength = byteCharacters.length;
  //   var slicesCount = Math.ceil(bytesLength / sliceSize);
  //   var byteArrays = new Array(slicesCount);

  //   for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
  //     var begin = sliceIndex * sliceSize;
  //     var end = Math.min(begin + sliceSize, bytesLength);

  //     var bytes = new Array(end - begin);
  //     for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
  //       bytes[i] = byteCharacters[offset].charCodeAt(0);
  //     }
  //     byteArrays[sliceIndex] = new Uint8Array(bytes);
  //   }
  //   return new File(byteArrays, { type: contentType });
  // }

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
  
  const {
        profile_updating,
        profile_update_success,
        profile_update_data,
        profile_update_error
  } = useSelector(state => state.profileUpdate)

  const dispatch = useDispatch()

  console.log("update_data", profile_update_data)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async(e) => {
    e.preventDefault()
    // const avatar = await resizeFile(image)
    // console.log("avater",avatar)
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("website", website);
    formData.append("location", location);
    formData.append("phone", phone);
    formData.append("date", date);
    formData.append("gender", gender);
    // formData.append("avatar", avatar);
    formData.append("bio", bio);
    dispatch(updateProfileAction(formData))
    //this is to see the values contained in the formData
    // for (let pair of formData.entries()) {
    //   console.log(pair); 
    // }
  }

  return (
    <>
      <button onClick={handleShow}>
        update profile
      </button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} enctype="multipart/form-data">
            {
              profile_updating ? "loading" : profile_update_success ? "updated" : profile_update_error && <span>{ profile_update_error}</span>
            }
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                value={first_name}
                onChange={(e)=>setFirstname(e.target.value)}
                type="text"
                placeholder="jane"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                value={last_name}
                onChange={(e)=>setLastname(e.target.value)}
                type="text"
                placeholder="smith"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Avatar</Form.Label>
              <Form.Control
                // ref={avatarRef}
                onChange={handleImageChange}
                type="file"
                placeholder="Profile picture must have a 1:1 aspect ratio"
                autoFocus
                accept="image/*"
              />
              {
                image &&<ReactCrop
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c)=>setCompletedCrop(c)}
                  aspect={aspect}
                >
                  <img src={image} alt="Crop me" onLoad={imgLoad}/>
                </ReactCrop>
              }

              {
                // test&& <img src={test} alt= "test"/>
              } 
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gender</Form.Label>
               <Form.Select aria-label="Default select example" value={gender} onChange={(e)=>setGender(e.target.value)} >
                <option value="male">male</option>
                <option value="female">female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                value={date}
                required pattern="[0-9]{4}-[0-9]{2}"
                placeholder="20-06-2000"
                onChange={(e)=>setDate(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Website</Form.Label>
              <Form.Control
                value={website}
                onChange={(e)=>setWebsite(e.target.value)}
                type="text"
                placeholder="https://janesmith.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                type="text"
                placeholder="Lagos, NG"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                type="text"
                placeholder="+2348179157208"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows={3} 
                value={bio}
                onChange={(e)=>setBio(e.target.value)}
                placeholder="Software Engineer"
                autoFocus
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button variant="primary" type="submit">
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}



