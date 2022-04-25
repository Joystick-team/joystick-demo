// import { Tab } from 'bootstrap'
import React from 'react'
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
      
      <div className="library-filter">
        <div className="filter-menu">
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
