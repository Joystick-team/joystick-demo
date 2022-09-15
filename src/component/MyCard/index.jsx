import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './mycard.scss'

export default function MyCard(props) {
  return (
    <div className='mycard'>
        <Card className={`${props.cardClass ?? 'mb-3 mycard-card' }`} style={{ border: 'none', color: 'var(--primary)', background: 'var(--background)'}}>
            <Card.Img className={`cardimg mycard-img`} src={props.img} />
            <Card.Body className="mycard-body" style={{/*padding: '1rem 0px 0rem'*/}}>
                <Card.Title  className="mycard-title" style={{ margin: '.1rem'}}>
                    {props.title}
                </Card.Title>
                <Card.Text className="mycard-text" style={{color: 'var(--plain-text)', margin: '0px'}}>
                    {props.text} <span className='card-icons'>{props.network}</span>
                    {/* {props.text} <span className='card-icons'>{props.network ?? <SiHiveBlockchain />}</span> */}
                </Card.Text>
                <Button className="mycard-btn" style={{ padding: '0rem'}} variant='var(--primary)' onClick={props.openModal}> {props.button} </Button>
                {/* <button className="mycard-btn" style={{color: 'var(--primary)', padding: '0rem'}} onClick={props.clickDetails}> {props.button} </button> */}
            </Card.Body>
           
        </Card>

    </div>
  )
}
