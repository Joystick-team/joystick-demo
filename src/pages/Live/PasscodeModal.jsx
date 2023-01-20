import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Alert} from 'react-bootstrap';
import styled from "styled-components";
import axios from 'axios'
import  { default as api } from '../../config/config.json'


const Styles = styled.div`
          .modal {
            background: black;
            position: absolute;
            float: left;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        `
function PasscodeModal({toggleModal, modal, url}) {
  const [state, setState] = useState({room_name: url, passcode :''});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    console.log(state)
    const token = JSON.parse(localStorage.getItem('userToken')).access_token
    if(!token){
      return setMessage("User login is required!!")
    }
    try{
      var config = {
        method: 'post',
        url: `${api.url}/room/confirm-passcode`,
        headers: { Authorization: `Bearer ${token}` },
        data: state
      };
      const res = await axios(config)
      toggleModal()
    }catch(err){
      if(err.response.data.message){
        setMessage(err.response.data.message)
      }
      else{
        setMessage("something went wrong")
      }
      setIsLoading(false)
    }
    // console.log(state)
  }

  return (
       <div className="row">
        <Styles>

            <div className="col-12">
                <Modal isOpen= {modal} toggle={toggleModal} 
                backdrop="static"
                keyboard={false}>
                  <ModalHeader> 
                      <h6>Enter meeting Passcode</h6>
                  </ModalHeader>
                    <ModalBody>
                        {message && <Alert variant='danger' className='text-center'>{message}</Alert>}
                        <form className="mt-2" onSubmit={(v)=> handleSubmit(v)}>
                            <div className='mt-2'>
                              <div className='form-group'>
                                <input type='text' 
                                onChange={(e)=> setState({...state, passcode:e.target.value})}
                                className='form-control'
                                placeholder='Passcode'
                                required/>
                              </div>
                              
                              <div className='form-group mt-2'>
                                <button 
                                className='btn btn-md btn-success w-100'>
                                  {isLoading ? "Loading..." : "Submit"}
                                </button>
                              </div>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        </Styles>
      </div>
  );
}

export default PasscodeModal;