import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { IoOptionsOutline } from 'react-icons/io5'
import RecentGames from '../../component/RecentGames'
import './library.scss'

export default function Library() {
  return (
    <div className="library">
      <div className="main">

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <div className="library-filter"> 
          <div className="filter-menu">
            <div className="filter-menu-header">
              <div>Filter </div>  <p><IoOptionsOutline /></p>
            </div>
              <Nav variant="" className="flex-column">
            {/* <form action="" className="filter-menu-list"> */}
              <label htmlFor="All"> 
                <Nav.Item>
                    <Nav.Link eventKey="first">
                      <input type="radio" id="All" name="fav_games" value="All" /> All
                      <span class="checkmark"></span>
                    </Nav.Link>
                  </Nav.Item>
              </label>

              <label htmlFor="Blockchain">
              <Nav.Item>
                  <Nav.Link eventKey="second">
                    <input type="radio" id="Blockchain" name="fav_games" value="Blockchain" /> Blockchain 
                    <span class="checkmark"></span>
                  </Nav.Link>
                </Nav.Item>
              </label>

              <label htmlFor="Native">
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <input type="radio" id="Native" name="fav_games" value="Native" /> Native
                    <span class="checkmark"></span>
                  </Nav.Link>
                </Nav.Item> 
              </label>
            {/* </form> */}
            </Nav>
            </div>
          </div>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <RecentGames />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              Blockchain  Games
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                Native Games
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
    </div>
    
  )
}
