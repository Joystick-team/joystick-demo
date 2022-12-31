import React, {useState, useEffect} from 'react';
import MakePost from './MakePost'
import styled from 'styled-components';
import  { default as api } from '../../../../config/config.json'
import axios from 'axios';
import NewsFeed from './NewsFeed';
import { AppContextInit } from '../../../../context/AppContext';

const Styles = styled.div`
        .container-fluid{
            margin: 0px !important;
            padding: 0px !important
        }
        `

function Feed(props) {
    const { isUser, setIsUser, message, setMessage, success, setSuccess } = AppContextInit()
    const getData = async()=>{
        const token = JSON.parse(localStorage.getItem('userToken'))
        var config = {
            method: 'get',
            url: `${api.url}/auth/profile`,
            headers: { Authorization: `Bearer ${token}` },
          };
        try {
            const res = await axios(config)
            console.log(res.data)
        } catch (error) {
            console.log(error.response.data.message)
            setMessage(() => error.response.data.message)
            setIsUser(false)
        }
    }
    useEffect(()=>{
       getData()
    }, [])
    return (
        <Styles>
            <div className='container-fluid'>
                <NewsFeed/>
            </div>
        </Styles>
    );
}

export default Feed;