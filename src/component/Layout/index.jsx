import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BottomNav from '../NavMenus/BottomNav'
import SideNav from '../NavMenus/SideNav'
import TopNav from '../NavMenus/TopNav'
import './layout.scss'

export default function Layout(props) {
  return (
    <div>
        <Container fluid>
            <Row>
              <div className={props.class}>
                  <div class="grid-container">
                      <div class="item1">
                        <TopNav />
                        <BottomNav />
                      </div>
                      <div class="item2" >
                        <SideNav />
                      </div>
                      {/* <div class="item3">Main */}
                      <div className="children-div" style={{display: 'block'}}>
                        {props.children}
                      </div>
                       <div class="item4">
                       <SideNav />
                       </div>
                      {/* <div class="item5">Footer</div> */}
                  </div>
              </div>
            </Row>
        </Container>

    </div>
  )
}
