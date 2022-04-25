import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import RecentGames from '../RecentGames'

export default function LibraryfilterSelection() {

  return (
    <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <Row>
            <Col>
            <Nav variant="pill" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="0">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="1">Blockchain</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="2">Native</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col>
            <Tab.Content>
                <Tab.Pane eventKey="0">
                <RecentGames />
                </Tab.Pane>
                <Tab.Pane eventKey="1">
                Blockchain Games
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                Native Games
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </div>
  )
}
