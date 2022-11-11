import React,{useEffect, useState} from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { IoOptionsOutline } from 'react-icons/io5'
import MyCard from '../../component/MyCard'
import SelectDropDown from '../../component/SelectDropDown'
import AllGamesData from '../../Store/librarygamesdata'
import './library.scss'
// import LibraryfilterSelection from "../../component/LibraryFilter"

export default function Library() {
  const fetchBlockchain = AllGamesData.filter((game) => game.text.includes('Blockchain'))
  const fetchAdventure = AllGamesData.filter((game) => game.text === 'Adventure')
  const fetchArcade = AllGamesData.filter((game) => game.text === 'Arcade')
  const [show,setShow]=useState(false)
  const fetchdata = AllGamesData.map((game, idx) => (
        <Col>
            <MyCard 
                key={game.key}
                title={game.name}
                text={game.text}
                img={game.images}
                button="Play"
            />
        </Col>
    ))

  const Blockchain = fetchBlockchain.map((game, idx) => (
    <Col>
        <MyCard 
            key={game.key}
            title={game.name}
            text={game.text}
            img={game.images}
            button="Play"
        />
    </Col>
))

const Adventure = fetchAdventure.map((game, idx) => (
  <Col>
      <MyCard 
          key={game.key}
          title={game.name}
          text={game.text}
          img={game.images}
          button="Play"
      />
  </Col>
))

const Arcade = fetchArcade.map((game, idx) => (
  <Col>
      <MyCard 
          key={game.key}
          title={game.name}
          text={game.text}
          img={game.images}
          button="Play"
      />
  </Col>
))
const options = ['All', 'Blockchain', 'Adventure', 'Arcade']
const [isMobile, setIsMobile] = useState(false)
const [filteredItem, setFilteredItem] = useState(fetchdata)

useEffect(() => {
  if(window.innerWidth > 481){
    setIsMobile(true)
  }
}, [isMobile])

const handleFilterList = (option) => {
  if(option === 'All'){
    setFilteredItem(fetchdata)
  }else if(option === 'Blockchain'){
    setFilteredItem(Blockchain)
  }else if(option === 'Adventure'){
    setFilteredItem(Adventure)
  }else if(option === 'Arcade'){
    setFilteredItem(Arcade)
  }
}

  return (
    <div className="library">
      <div className="main">

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <div className="library-filter"> 
        
              <div className="filter-menu">
              <div className="span-filter-mobile">Games</div>
                <div className="filter-menu-header">
                  <div>Filter </div>  <p> { isMobile ? <span><IoOptionsOutline /></span> :
                <SelectDropDown options={options} 
                    placeholder={<IoOptionsOutline />}
                    label={<IoOptionsOutline />}
                    getValue={ (option) => handleFilterList(option)}
                /> }
                </p>
                </div>
                {show === true && (
                
                <>
                  {/* <LibraryfilterSelection /> */}
                  {/** mobile view*/}
                <Nav variant="" className="filter-mobile-options">
                    <label htmlFor="All"> 
                      <Nav.Item >
                        <Nav.Link eventKey="first"  >
                          <input type="radio" id="All" name="fav_games" value="All" onClick={()=>setShow(false)}/> All
                          <span className="checkmark"></span>
                        </Nav.Link>
                      </Nav.Item>
                    </label>

                    <label htmlFor="Blockchain">
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <input type="radio" id="Blockchain" name="fav_games" value="Blockchain" onClick={()=>setShow(false)}/> Blockchain 
                          <span className="checkmark"></span>
                        </Nav.Link>
                      </Nav.Item>
                    </label>

                      <label htmlFor="Adventure">
                        <Nav.Item>
                        <Nav.Link eventKey="third">
                          <input type="radio" id="Adventure" name="fav_games" value="Adventure" onClick={()=>setShow(false)}/> Adventure
                          <span className="checkmark"></span>
                        </Nav.Link>
                      </Nav.Item> 
                      </label>
                      <label htmlFor="Arcade">
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">
                          <input type="radio" id="Arcade" name="fav_games" value="Arcade" onClick={()=>setShow(false)}/> Arcade
                          <span className="checkmark"></span>
                        </Nav.Link>
                      </Nav.Item> 
                    </label>
                  </Nav>
                
                </>
              )
              }
                {/* Desktop view */}
                  <Nav variant="" className="flex-column">
                  <label htmlFor="All"> 
                    <Nav.Item>
                        <Nav.Link eventKey="first" >
                          <input type="radio" id="All" name="fav_games" value="All" /> All
                          <span className="checkmark"></span>
                        </Nav.Link>
                      </Nav.Item>
                  </label>

                  <label htmlFor="Blockchain">
                  <Nav.Item>
                      <Nav.Link eventKey="second">
                        <input type="radio" id="Blockchain" name="fav_games" value="Blockchain" /> Blockchain 
                        <span className="checkmark"></span>
                      </Nav.Link>
                    </Nav.Item>
                  </label>

                  <label htmlFor="Adventure">
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <input type="radio" id="Adventure" name="fav_games" value="Adventure" /> Adventure
                        <span className="checkmark"></span>
                      </Nav.Link>
                    </Nav.Item> 
                  </label>
                    <label htmlFor="Arcade">
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">
                        <input type="radio" id="Arcade" name="fav_games" value="Arcade" /> Arcade
                        <span className="checkmark"></span>
                      </Nav.Link>
                    </Nav.Item> 
                  </label>
                </Nav>
              </div>
            </div>
        
          </Col>
          <Col sm={10} className={'filter-display'}>
          {isMobile ?  <Tab.Content>
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
            
            :
            <Container>
                  <Row xs={3} md={4} className="g-4 recent-games-items">
                  {filteredItem}
                    </Row>
                </Container>
            }
          </Col>
        </Row>
      </Tab.Container>
      </div>
    </div>
    
  )
}
