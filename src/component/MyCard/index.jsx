import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function MyCard(props) {
  return (
    <div className='myCard'>
        <Card className='mb-3' style={{ color: '#fff', background: '#0D0D0D'}}>
            <Card.Img src={props.img} />
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text style={{color: '#ebebf599'}}>
                    {props.text}
                </Card.Text>
                <Button className='text-white' variant=''> {props.button} </Button>
            </Card.Body>
        </Card>

    </div>
  )
}
