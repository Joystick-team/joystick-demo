import React,{useState,useEffect} from 'react'
import MyCard from '../../component/MyCard'
import PreviousNextMethods from '../../component/PreviousNextMethods'
import { Games, Collectible, Marketplace } from '../../Store/storefiles'
import './stores.scss'


export default function Store() {
  const [sliderCount, setSliderCount] = useState(Number(4))
  const [CollectibleCount, setCollectibleCount] = useState(Number(5))
  useEffect(() => {
    if(window.innerWidth < 431){
      setSliderCount(Number(3))
      setCollectibleCount(Number(3))
    }
    if(window.innerWidth < 1025){
      setSliderCount(Number(3))
      setCollectibleCount(Number(3))
    }
  }, [])

  const MarketplaceDetails = Marketplace.map((marketitem, idx) => {
    return <div className="marketplace-details">
              <img loading='eager' key={marketitem.key} src={marketitem.img} alt="logo" />
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
              <img className="collectible-details-img" loading='lazy' key={idx ?? collection.key} src={collection.img} alt="logo" />
            </div>
  })
  return (
    <div className='store'>
        <div className="main"> 
        <div className="nft-marketplace-container">
         <span className="span-nft-text"> NFT Marketplaces </span><br />
        <div className="nft-marketplace-content">
          {MarketplaceDetails}
        </div>
        
        </div>
        <br />
        <div className="games-details">
        <PreviousNextMethods rowNum={sliderCount} header={'Games'}>
          {Gamesdetails}
          </PreviousNextMethods>
          </div>
     
        <div className="collectible-container">
        <PreviousNextMethods rowNum={CollectibleCount} header={'Collectibles'}>
          {CollectibleDetails}
        </PreviousNextMethods>
        </div>
        <div className='empty-div'></div>
        </div>
    </div>
  )
}
