import React from 'react'
// import { IoOptionsOutline } from 'react-icons/all'
import { IoOptionsOutline } from 'react-icons/io5'
import Layout from '../../component/Layout'
import RecentGames from '../../component/RecentGames'
import './library.scss'

export default function Library() {
  return (
    <div className="library">
      <Layout> 
      
      <div className="main">
      <div className="library-filter">
        <div className="filter-menu">
          <div className="filter-menu-header">
            <div>Filter </div>  <p><IoOptionsOutline /></p>
          </div>
          <ul className="filter-menu-list">
            <li>All</li>
            <li>Blockchain</li>
            <li>Native</li>
          </ul>
        </div>
        <div className="library-games">
          <RecentGames />
        </div>
      </div>
      </div>
    </Layout> 
    </div>
    
  )
}
