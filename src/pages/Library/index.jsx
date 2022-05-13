// import { Tab } from 'bootstrap'
// import { Tab } from 'bootstrap'
import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
// import { Col, Nav, Row, Tabs } from 'react-bootstrap'
import { IoOptionsOutline } from 'react-icons/io5'
import Layout from '../../component/Layout'
// import LibraryfilterSelection from '../../component/LibraryFilter'
import RecentGames from '../../component/RecentGames'
import './library.scss'

export default function Library() {
  return (
    <div className="library">
      <Layout> 
      <div className="main">
      
      {/* <div className="library-filter"> */}
        {/* <div className="filter-menu">
          <div className="filter-menu-header">
            <div>Filter </div>  <p><IoOptionsOutline /></p>
          </div>
          <div className="library-listed">
            <form action="" className="filter-menu-list">

              <label htmlFor="html"> 
                <input type="radio" id="html" name="fav_games" value="All" /> All
              </label>

              <label htmlFor="Blockchain">
                <input type="radio" id="Blockchain" name="fav_games" value="Blockchain" /> Blockchain 
              </label>

              <label htmlFor="Native"> 
                <input type="radio" id="Native" name="fav_games" value="Native" /> Native
              </label>
            </form>
          </div>
        </div> */}
        
        {/* <div className="library-games">
          <RecentGames />
        </div> */}
      {/* </div> */}

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">

        <Row>
          <Col sm={2}>
                   <div className="library-filter"> 
        <div className="filter-menu">
          <div className="filter-menu-header">
            <div>Filter </div>  <p><IoOptionsOutline /></p>
          </div>
            <Nav variant="" className="flex-column">
            <form action="" className="filter-menu-list">
              <label htmlFor="All"> 
                <Nav.Item>
                    <Nav.Link eventKey="first">
                      <input type="radio" id="All" name="fav_games" value="All" /> All
                    </Nav.Link>
                  </Nav.Item>
              </label>

              <label htmlFor="Blockchain">
              <Nav.Item>
                  <Nav.Link eventKey="second">
                    <input type="radio" id="Blockchain" name="fav_games" value="Blockchain" /> Blockchain 
                  </Nav.Link>
                </Nav.Item>
              </label>

              <label htmlFor="Native">
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <input type="radio" id="Native" name="fav_games" value="Native" /> Native
                  </Nav.Link>
                </Nav.Item> 
              </label>
            </form>
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
    </Layout> 
    </div>
    
  )
}
