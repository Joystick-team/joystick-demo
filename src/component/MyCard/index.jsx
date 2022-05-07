import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './mycard.scss'

export default function MyCard(props) {
  return (
    <div className='myCard'>
        <Card className='mb-3' style={{ border: 'none', color: 'var(--primary)', background: 'var(--background)'}}>
            <Card.Img className='cardimg' src={props.img} />
            <Card.Body  style={{padding: '1rem 0px 0rem'}}>
                <Card.Title  style={{color: 'var(--primary)', margin: '.1rem'}}>
                    {props.title}
                </Card.Title>
                <Card.Text style={{color: 'var(--plain-text)', margin: '0px'}}>
                    {props.text}
                </Card.Text>
                <Button style={{color: 'var(--primary)', padding: '0rem'}} variant='var(--primary)'> {props.button} </Button>
            </Card.Body>
        </Card>

    </div>
  )
}
