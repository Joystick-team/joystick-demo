import React from 'react'
import { SiFacebook } from 'react-icons/si'
import LoadingButton from '../LoadingButton'
import banner from '../../assets/images/_112375695_crucible976.jpeg'
import DOMPurify from 'dompurify'
import './detailsCard.scss'
import { useState } from 'react'
export default function DetailsCard(props) {
    const [read, setRead] = useState(true)
    const handleDescription = () => {
        setRead(on => !on)
            
    }

    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(read ? (props.description ?? "CryptoBlades is a Play to Earn RPG that revolves around the gathering of legendary Blades, and mighty heroes to wield them! Strategically equip your party, and take advantage of the enemy's weaknesses as you gather experience and build your heroes up to take down legendary foes! Earn SKILL tokens and use them to forge Blades that you can use or sell on the marketplace." ).substr(0, 100) : props.description)
    })


  return (
    <div className='details-card-container'>
        <div className="details-card-holder">
            <div className="details-card">
                <div className="details-card-banner">
                    <img src={props.image ?? banner} alt={''} />
                    <div className="title">{props.name}</div>
                    <LoadingButton className='btn-play' color="danger" title='play'/>
                </div>
                <div className="details-card-body">
                    <div className="description"> 
                        <div dangerouslySetInnerHTML={sanitizedData()} />
                     <small style={{color: 'red', cursor: 'pointer'}} onClick={handleDescription}>{`${read ? ' ...Read More' : "Read Less"}`}</small> 
                    </div>
                    <div className="genres">
                        <div className='topic'>Genres</div>
                        <p>{props.tags_names.map((tag) => [tag]) ?? 'RPG, DeFi'}</p>
                    </div>
                    <div className="infomation">
                        <div className='topic'>Information</div>
                        <div className="devices">Devices: Web</div>
                        {/* <div className="blockchain">Blockchain: {props.network ?? <SiHiveBlockchain />}</div> */}
                        <div className="blockchain">Status: {props.public_status}</div>
                        <div className="ftp">Free To Play: <span>{props.free_to_play ? 'True' : 'False'}</span></div>
                        <div className="earn">Play To Earn: <span>{props.play_to_earn ? 'True' : 'False'}</span></div>
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
