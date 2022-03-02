import React from 'react'
import { Container, Row } from 'react-bootstrap'
// import TopNav from './NavMenus/TopNav'
import './layout.scss'

export default function Layout(props) {
  return (
    <div>
        <Container fluid>
            <Row>
                <div className={props.class}>
                    <div class="grid-container">
                    <div class="item1">
                    {/* <TopNav /> */}
                    </div>
                    <div class="item2">Menu</div>
                    {/* <div class="item3">Main */}
                    {props.children}
                    {/* </div>   */}
                    {/* {props.children} */}
                    {/* <div class="item4">Right</div>
                    <div class="item5">Footer</div> */}
                    
                    </div>
                </div>
            </Row>
        </Container>

    </div>
  )
}
