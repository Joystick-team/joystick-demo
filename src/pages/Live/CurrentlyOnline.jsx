import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import userAvarta from '../../assets/images/userAvarta.png'
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';


export default function CurrentlyOnline({allOnline}) {
    const display = allOnline?.map(a=>{
        return(
            <div className='col-6 col-md-3' key={a.id}>
                <Link to={`/livestream/${a.name}`}>
                <div className="card 
                            card-stream" onClick={()=>localStorage.getItem('user_id')  
                            === a.user.id ? changeStreamStatus(a.id) : increaseRoomCount(a.id)}>
                                <img className="card-img-top" src={a.thumbnail} alt="thumbnail"/>
                                <div className="card-img-overlay pl-0 pt-1">
                                    <span className='count-tag'>
                                        <span className='ml-1 mr-3'><img src={'/assets/images/Vector-eye.png'}
                                            height={10} 
                                            alt='vector'/> 
                                        </span>
                                        {a.room_members === null ? 0 : a.room_members.length}
                                    </span>
                                    <div className='text-right'>
                                        <button className='btn btn-live-now pt-0'>Live 
                                            <span className='ml-1'><img src={'/assets/images/Vector.png'} alt='vector'/> </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    <div className='row mt-2'>
                        <div className="col-2">
                            <img src={a.user.avatar ? a.user.avatar : userAvarta } 
                            height={'35px'} className='rounded' 
                            alt='profile-pics'/>
                        </div>
                        <div className="col-8 align-self-center">
                            <p style={{fontSize: "14px"}}>
                                {a.user.first_name ? <>{a.user.first_name} {a.user.last_name}</>  :  <>Hello Avatar!!</> } </p>
                            <p style={{fontSize: "15px"}}>{a.room_name}</p>
                        </div>
                        <div className="col-2 text-right">
                            <Dropdown className='remove-arrow' drop='right'>
                                <Dropdown.Toggle className=" icon b-0 p-0"  id="dropdown-custom-components">
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item >
                                        <small>Tip</small>
                                    </Dropdown.Item>     
                                    <Dropdown.Item>
                                        <small>View Profile</small>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <small>Unfollow</small>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <small>Turn on notification</small>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
  return (
        <div className='container-fluid mt-5'>
            <div className='row mt-3'>
                {display}
            </div>
        </div>
  )
}
