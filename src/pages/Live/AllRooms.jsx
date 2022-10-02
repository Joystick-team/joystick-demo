import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDetails from '../../component/ProfileDetails';
import styled from 'styled-components';

const Styles = styled.div`
        .card a:link{
           text_decoration: none !important
        }
        button{
            background-color: #1BB04A;
            color: white
        }
        .card{
            box-shadow: 2px 2px gray
        }
        `
function AllRooms({allRoom}) {
    const display = allRoom?.map(a=>{
        return(
            <Link to={`/livestream/${a.name}`}>
                <div className='card pl-2 pr-2 mt-3' key={a.id}>
                    <div className='row pt-3'>
                        <div className='col-6'>
                            <ProfileDetails />
                            <h6>Name: {a.name}</h6>
                            {/* <small>Created at: {a.created_at}</small> */}
                        </div>
                        <div className='col-6 text-right align-self-center'>
                            <button className='btn btn-md'>Join room</button>
                        </div>
                    </div>
                </div>
            </Link>
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

export default AllRooms;