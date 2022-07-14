import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { IoOptionsOutline } from 'react-icons/io5'
import MyCard from '../../component/MyCard'
import AllGamesData from '../../librarygamesdata'
import './library.scss'

export default function Library() {
  const fetchBlockchain = AllGamesData.filter((game) => game.text === 'Blockchain')
  const fetchAdventure = AllGamesData.filter((game) => game.text === 'Adventure')
  const fetchArcade = AllGamesData.filter((game) => game.text === 'Arcade')
  
  const fetchdata = AllGamesData.map((game, idx) => (
        <Col>
            <MyCard 
                key={idx}
                title={game.title}
                text={game.text}
                img={game.img}
                button="Play"
            />
        </Col>
    ))

  const Blockchain = fetchBlockchain.map((game, idx) => (
    <Col>
        <MyCard 
            key={idx}
            title={game.title}
            text={game.text}
            img={game.img}
            button="Play"
        />
    </Col>
))

const Adventure = fetchAdventure.map((game, idx) => (
  <Col>
      <MyCard 
          key={idx}
          title={game.title}
          text={game.text}
          img={game.img}
          button="Play"
      />
  </Col>
))

const Arcade = fetchArcade.map((game, idx) => (
  <Col>
      <MyCard 
          key={idx}
          title={game.title}
          text={game.text}
          img={game.img}
          button="Play"
      />
  </Col>
))

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
              <label htmlFor="All"> 
                <Nav.Item>
                    <Nav.Link eventKey="first" >
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

              <label htmlFor="Adventure">
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <input type="radio" id="Adventure" name="fav_games" value="Adventure" /> Adventure
                    <span class="checkmark"></span>
                  </Nav.Link>
                </Nav.Item> 
              </label>
                <label htmlFor="Arcade">
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <input type="radio" id="Arcade" name="fav_games" value="Arcade" /> Arcade
                    <span class="checkmark"></span>
                  </Nav.Link>
                </Nav.Item> 
              </label>
            </Nav>
            </div>
          </div>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Container>
                  <Row xs={3} md={4} className="g-4 recent-games-items">
                        {fetchdata}
                    </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Container>
                  <Row xs={3} md={4} className="g-4 recent-games-items">
                      {Blockchain}
                    </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
               <Container>
                  <Row xs={3} md={4} className="g-4 recent-games-items">
                        {Adventure}
                    </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Container>
                  <Row xs={3} md={4} className="g-4 recent-games-items">
                        {Arcade}
                    </Row>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
    </div>
    
  )
}
