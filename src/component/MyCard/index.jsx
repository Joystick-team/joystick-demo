import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './mycard.scss'

export default function MyCard(props) {
  return (
    <div className='mycard'>
        <Card className='mb-3 mycard-card' style={{ border: 'none', color: 'var(--primary)', background: 'var(--background)'}}>
            <Card.Img className='cardimg mycard-img' src={props.img} />
            <Card.Body className="mycard-body" style={{/*padding: '1rem 0px 0rem'*/}}>
                <Card.Title  className="mycard-title" style={{color: 'var(--primary)', margin: '.1rem'}}>
                    {props.title}
                </Card.Title>
                <Card.Text className="mycard-text" style={{color: 'var(--plain-text)', margin: '0px'}}>
                    {props.text} <span className='card-icons'>{props.icons}</span>
                </Card.Text>
                <Button className="mycard-btn" style={{color: 'var(--primary)', padding: '0rem'}} variant='var(--primary)'> {props.button} </Button>
            </Card.Body>
        </Card>

    </div>
  )
}
