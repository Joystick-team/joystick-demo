import {React, useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import { FaTimes } from "react-icons/fa";
import './erroralert.scss'

export default function DropAlert(props) {
  const [show, setShow] = useState(true);

  return (
    <div className='drop-message-alert'>
    <Alert show={show} variant="danger">
      <Alert.Heading>{props.title}</Alert.Heading>
      <p>
        {props.children}
      </p>
        {/* <hr /> */}
        <div className="d-flex justify-content-end close-alert">
          <Button onClick={() => setShow(false)} variant="outline">
            <FaTimes />
          </Button>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </div>
  );
}