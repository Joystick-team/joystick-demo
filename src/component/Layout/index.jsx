import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './layout.scss'

export default function Layout() {
  return (
    <div>
        <h1>Grid Layout</h1>
        <Container fluid>
            <Row>
                <p>This grid layout contains six columns and three rows:</p>

                <div class="grid-container">
                <div class="item1">Header</div>
                <div class="item2">Menu</div>
                <div class="item3">Main</div>  
                <div class="item4">Right</div>
                <div class="item5">Footer</div>
                </div>
            </Row>
        </Container>

    </div>
  )
}
