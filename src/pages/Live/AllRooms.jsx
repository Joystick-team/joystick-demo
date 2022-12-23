import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ProfileDetails from '../../component/ProfileDetails';
import styled from 'styled-components';


function AllRooms({allRoom}) {
    const [color, setColor] = useState('')
    const display = allRoom?.map(a=>{
        return(
            <div className='card pl-2 pr-2 mt-3' key={a.id}>
                <div className='row pt-3'>
                    <div className='col-7 col-md-6'>
                        <ProfileDetails />
                        <h6>Livestream name: {a.room_name}</h6>
                        {/* <small>Created at: {a.created_at}</small> */}
                    </div>
                    <div className='col-5 col-md-6 text-right align-self-center'>
                        <button className='btn btn-md'>
                            <Link to={`/livestream/${a.name}`} style={{textDecoration:'none', color:'white'}}>
                                Join room
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <Styles>
            <div className='row'>
                <div className='container-fluid'>
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