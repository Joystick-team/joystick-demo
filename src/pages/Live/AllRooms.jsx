import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import userAvarta from '../../assets/images/userAvarta.png'
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import  { default as api } from '../../config/config.json'
import axios from 'axios';


function AllRooms({allRoom}) {
    console.log(allRoom)
    const changeStreamStatus = async(id)=>{
        const token = JSON.parse(localStorage.getItem('userToken')).access_token
        try{
            var config = {
                method: 'put',
                url: `${api.url}/room/stream-status/${id}`,
                headers: { Authorization: `Bearer ${token}` }
              };
              if(token){
                const res = await axios(config)
                return
              }
         } catch (error) {
            console.log(error)
         }
    }
    const increaseRoomCount = async(id)=>{
        const token = JSON.parse(localStorage.getItem('userToken')).access_token
        try{
            var config = {
                method: 'post',
                url: `${api.url}/room/join-room/${id}`,
                headers: { Authorization: `Bearer ${token}` },
                data: {userid : localStorage.getItem('user_id')}
              };
              if(token){
                const res = await axios(config)
                console.log(res)
              }
         } catch (error) {
            console.log('something went wrong')
         }
    }
    const display = allRoom?.map(a=>{
        return(
            <div className='col-6 col-md-3 mb-2' key={a.id}>
                    <div >
                        <Link to={`/livestream/${a.name}`} state={{ id: a.id }}>
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
                                            <span className='ml-1'><img src={'./assets/images/Vector.png'} alt='vector'/> </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className='row mt-2'>
                            <div className="col-2">
                                <img src={a.user.avatar ? a.user.avatar : userAvarta } 
                                height={'30px'} width={'25px'}
                                style={{borderRadius:"50%"}}
                                alt='profile-pics'/>
                            </div>
                            <div className="col-8 align-self-center">
                                <p style={{fontSize: "13.5px"}}>
                                    {a.user.first_name ? <>{a.user.first_name} {a.user.last_name}</>  :  <>Hello Avatar!!</> } </p>
                                <p style={{fontSize: "13px"}}>{a.room_name}</p>
                            </div>
                            <div className="col-2 text-center">
                                <Dropdown className='remove-arrow' drop='right'>
                                    <Dropdown.Toggle className=" icon b-0 p-0"  id="dropdown-custom-components">
                                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item >Tip</Dropdown.Item>     
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
                    </div>
            </div>
        )
    })
    return (
        <Styles>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    {display}
                </div>
            </div>
        </Styles>
    );
}

const Styles = styled.div`
        .card a:link{
           text_decoration: none !important
        }
        button{
            background-color: #1BB04A;
            color: white
        }
        .btn-md:hover{
            background-color: green;
            color: white
        }
        
        `

export default AllRooms;