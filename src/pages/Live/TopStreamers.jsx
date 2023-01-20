import React from 'react'
import FriendrequestData from '../../component/Chats/Friendrequest/FriendrequestData';
import Dropdown from 'react-bootstrap/Dropdown';

export default function TopStreamers() {
    const display = FriendrequestData.map((f)=>{
        return(
            <React.Fragment key={f.key} className='mb-3'>
                <div className='col-4 col-md-1 mb-3 align-self-center'>
                    <span className='mr-2'>{f.key}</span>
                    <img src={f.image} height='45px' width='45px'
                    style={{borderRadius:"50%"}} />
                </div>
                <div className='col-5 col-md-3 mb-3 align-self-center'>
                        {f.title} <br/>
                        <small className='big'>2 minutes ago</small>
                        <small className='small'>12.5k Followers</small> 
                </div>
                <div className='col-3 col-md-4 big mb-3 align-self-center' style={{fontSize: '13px'}}>
                12.5k Followers
                </div>
                <div className='col-3 big mb-3'>
                <button className='btn btn-rank'> 455 Contents Streamed</button>
                </div>
                <div className='col-3 col-md-1 text-right mb-3 align-self-center'>
                    <Dropdown className='remove-arrow' drop='right'>
                        <Dropdown.Toggle className=" icon b-0 p-0"  id="dropdown-custom-components">
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>   
                            <Dropdown.Item>
                                <small>View Profile</small>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <small>follow</small>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <small>Turn on notification</small>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </React.Fragment>
        )
    })
  return (
    <div className='container-fluid streamers mt-5'>
        <h5>Top Streamers</h5>
        <div className='row mt-4'>
            {display}
        </div>
    </div>
  )
}
