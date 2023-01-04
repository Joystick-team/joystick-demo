import axios from 'axios'
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import styled from 'styled-components'
import { default as api } from '../../config/config.json'

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
function PasscodeModal({ toggleModal, modal, url }) {
  const [state, setState] = useState({ name: url, pass_code: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    // console.log(state)
    const token = localStorage.getItem('userToken')
    if (!token) {
      setMessage('User login is required!!')
      return navigate('/')
    }
    try {
      var config = {
        method: 'post',
        url: `${api.test_url}/api/v1/room/confirm-passcode`,
        headers: { Authorization: `Bearer ${token}` },
        data: state,
      }
      const res = await axios(config)
      console.log(res.data)
      if (res.data.result.statusCode == '200') {
        toggleModal()
        setIsLoading(false)
      } else {
        setMessage('Invalid passcode')
        setIsLoading(false)
      }
    } catch (err) {
      setMessage('something went wrong, try again')
      setIsLoading(false)
    }
    // console.log(state)
  }

  return (
    <div className='row'>
      <Styles>
        <div className='col-12'>
          <Modal
            isOpen={modal}
            toggle={toggleModal}
            backdrop='static'
            keyboard={false}
          >
            <ModalHeader>
              <h6>Enter meeting Passcode</h6>
            </ModalHeader>
            <ModalBody>
              {message && (
                <Alert variant='danger' className='text-center'>
                  {message}
                </Alert>
              )}
              <form className='mt-2' onSubmit={v => handleSubmit(v)}>
                <div className='mt-2'>
                  <div className='form-group'>
                    <input
                      type='text'
                      onChange={e =>
                        setState({ ...state, pass_code: e.target.value })
                      }
                      className='form-control'
                      placeholder='Passcode'
                    />
                  </div>

                  <div className='form-group mt-2'>
                    <button className='btn btn-md btn-success w-100'>
                      {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                  </div>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </div>
      </Styles>
    </div>
  )
}

export default PasscodeModal
