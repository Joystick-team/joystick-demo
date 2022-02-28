import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ErrorAlert from '../../component/ErrorAlert';
import MyCard from '../../component/MyCard';
export default function HomePage() {
  return (
    <div>
      <ErrorAlert />
       <div className="recent-games">
       <MyCard 
          title='Grace'
          text='Blockchain'
          img='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
          button="Play"
        />
        <MyCard 
          title='Grace'
          text='Blockchain'
          img='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
          button="Play"
        />
        <MyCard 
          title='Grace'
          text='Blockchain'
          img='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
          button="Play"
        />
       </div>
    </div>
  )
}
