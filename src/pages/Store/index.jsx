import React from 'react'
import MyCard from '../../component/MyCard'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import { Games, Collectible, Marketplace } from '../../storefiles'
import './stores.scss'

export default function Store() {

  const MarketplaceDetails = Marketplace.map((marketitem, idx) => {
    return <div className="marketplace-details">
              <img loading='lazy' key={marketitem.key} src={marketitem.img} alt="logo" />
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
              <img loading='lazy' key={collection.key} src={collection.img} alt="logo" />
            </div>
  })
  return (
    <div className='store'>
        <div className="main"> 
        <div className="nft-marketplace-container">
        NFT Marketplaces <br />
        <div className="nft-marketplace-content">
          {MarketplaceDetails}
        </div>
        
        </div>
        <br />
        <div className="games-details">
        <PreviousNextMethods rowNum={4} header={'Games'}>
          {Gamesdetails}
          </PreviousNextMethods>
          </div>
        <br />
        <div className="collectible-container">
        <PreviousNextMethods rowNum={5} header={'Collectibles'}>
          {CollectibleDetails}
        </PreviousNextMethods>
        </div>
        </div>
    </div>
  )
}
