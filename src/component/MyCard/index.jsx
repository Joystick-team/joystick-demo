import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function MyCard(props) {
  return (
    <div className='myCard'>
        <Card className='mb-3' style={{ color: '#fff', background: '#0D0D0D'}}>
            <Card.Img src={props.img} />
            <Card.Body  style={{padding: '1rem 0px 0rem'}}>
                <Card.Title  style={{ margin: '.1rem'}}>
                    {props.title}
                </Card.Title>
                <Card.Text style={{color: '#ebebf599', margin: '0px'}}>
                    {props.text}
                </Card.Text>
                <Button className='text-white' style={{padding: '0rem'}} variant=''> {props.button} </Button>
            </Card.Body>
        </Card>

    </div>
  )
}
