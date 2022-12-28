import axios from 'axios'
import React, {useEffect, useState} from 'react'
import  { default as api } from '../../config/config.json'
import userAvarta from '../../assets/images/userAvarta.png'

export default function ChatFriends({selectedCard, activeCard}) {
    const [friends, setFriends] = useState([])
    const getFriends = async ()=>{
        const token = localStorage.getItem('userToken')
        var config = {
            method: 'get',
            url: `${api.url}/friend/get-friends`,
            headers: { Authorization: `Bearer ${token}` },
            };
        try {
            const res = await axios(config)
            setFriends(res.data.friends)
        } catch (error) {
            console.log(error.response.data)
        }
    }
    useEffect(() => {
      getFriends()
    }, [])
    
  return (
    <div>
         {friends.map((friend) =>{
                    return (
                        <div className='row' key= {friend.friend.id}>
                            <div className={`col-md-12 mb-4 p-2 each-user ${selectedCard === friend.friend.id && 'active-card'}`} 
                            onClick={()=> activeCard(friend.friend.id, 
                            friend.friend.avatar, 
                            friend.friend.first_name, 
                            friend.friend.last_name)}>
                                <div className="d-flex flex-start align-items-center" key={friend.friend.key}>
                                    <img className="rounded-circle shadow-1-strong me-3"
                                    src={friend.friend.avatar ? friend.friend.avatar : userAvarta}  alt="Profile-picture" width="40"
                                    height="40" /> 
                                    <div>
                                    <h6 className="fw-bold">{friend.friend.first_name} {friend.friend.last_name}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
    </div>
  )
}
