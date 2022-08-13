import React from 'react'
import { SiFacebook, SiHiveBlockchain } from 'react-icons/si'
import LoadingButton from '../LoadingButton'
import banner from '../../assets/images/_112375695_crucible976.jpeg'

import './detailsCard.scss'
export default function DetailsCard(props) {
  return (
    <div className='details-card-container'>
        <div className="details-card-holder">
            <div className="details-card">
                <div className="details-card-banner">
                    <img src={props.img ?? banner} alt={''} />
                    <div className="title">{props.title}</div>
                    <LoadingButton className='btn-play' color="danger" title='play'/>
                </div>
                <div className="details-card-body">
                    <div className="description"> 
                        <div className='topic'>Description</div> 
                        <p>
                            {props.description ?? "CryptoBlades is a Play to Earn RPG that revolves around the gathering of legendary Blades, and mighty heroes to wield them! Strategically equip your party, and take advantage of the enemy's weaknesses as you gather experience and build your heroes up to take down legendary foes! Earn SKILL tokens and use them to forge Blades that you can use or sell on the marketplace."}
                        </p>
                    </div>
                    <div className="genres">
                        <div className='topic'>Genres</div>
                        <p>{props.genres ?? 'RPG, DeFi'}</p>
                    </div>
                    <div className="infomation">
                        <div className='topic'>Information</div>
                        <div className="devices">Devices: Web</div>
                        <div className="blockchain">Blockchain: {props.network ?? <SiHiveBlockchain />}</div>
                        <div className="ftp">Free To Play: <span>{props.FTP ?? 'Crypto Required'}</span></div>
                        <div className="earn">Earn: <span>{props.earn ?? 'Crypto, NFT'}</span></div>
                    </div>
                    <div className="community">
                        <div className='topic'>Community</div>
                        <div className="community-icons">
                            {props.icons ??  <SiFacebook />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
