import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function LoadingScreen(props) {
  return (
    <>
        <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {props.isloading && <div style={{textAlign: 'center', margin: '5% 50%'}}> <Spinner animation="border" /></div>}
        </div>
      </>
  )
}
