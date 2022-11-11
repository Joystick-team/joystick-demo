import React, {useState, useEffect} from 'react';
import MakePost from './MakePost'
import styled from 'styled-components';
import  { default as api } from '../../../../config/config.json'
import axios from 'axios';

const Styles = styled.div`
        .container-fluid{
            margin: 0px !important;
            padding: 0px !important
        }
        `

function Feed(props) {
    const getData = async()=>{
        var config = {
            method: 'get',
            url: `${api.url}/auth/profile`,
            headers: { },
          };
        try {
            const res = await axios(config)
            console.log(res.data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
    useEffect(()=>{
       getData()
    }, [])
    return (
        <Styles>
            <div className='container-fluid'>
                <div className='row'>
                    <MakePost/>
                </div>
            </div>
        </Styles>
    );
}

export default Feed;