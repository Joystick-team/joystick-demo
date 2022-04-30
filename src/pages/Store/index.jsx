import React from 'react'
import Layout from '../../component/Layout'
import MyCard from '../../component/MyCard'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import { Games, Collectible, Marketplace } from '../../storefiles'

export default function Store() {

  const MarketplaceDetails = Marketplace.map((marketitem, idx) => {
    return <div className="marketplace-details">
              <img src={marketitem.img} alt="logo" />
            </div>
  })

  const Gamesdetails = Games.map((game, idx) => {
   return  <MyCard 
            key={game.key}
            title={game.title}
            text={game.type}
            button={game.btn}
            img={game.image}
          />
    
  });

  const CollectibleDetails = Collectible.map((collection, idx) => {
    return <div className="collectible-details">
              key={collection.key}
              <img src={collection.img} alt="logo" />
            </div>
  })
  return (
    <div className='store'>
      <Layout> 
        <div className="main"> 
        <div className="">
        NFT Marketplaces <br />
        {MarketplaceDetails}
        </div>
        <br />
        <div className="games-details">
        <PreviousNextMethods header={'Games'}>
          {Gamesdetails}
          </PreviousNextMethods>
          </div>
        <br />
        <div className="">
        <PreviousNextMethods header={'Collectibles'}>
          {CollectibleDetails}
        </PreviousNextMethods>
        </div>
        </div>
        <div className="side-adverts2" style={{display:'flex'}}>
          {/* The left advert/chat/friends should be written here */}
        </div>
      </Layout> 
    </div>
  )
}
