import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatFriends from './ChatFriends'
import Search from './Search'
import './messenger.scss'
import  { default as api } from '../../config/config.json'
import Message from './Message'
import axios from 'axios'
import ChatBox from './ChatBox'
import ChatNavbar from './ChatNavbar'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {io} from 'socket.io-client';



export default function Messenger() {
  const [selectedCard, setSelectedCard] = useState('')
  const [conversation, setConversation] = useState([])
  const [firstLoad, setFirstLoad] = useState(true)
  const [content, setContent] = useState('')
  const [showEmojis, setShowEmojis] = useState(false);
  const [isMessage, setIsMessage] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [state, setState] = useState({
    chatid: '',
    sender: '',
    content: ""
  })
  const [userDetails, setUserDetails] = useState({
    avatar: null,
    firstname: "",
    lastname: ''
  })

  const scrollRef = useRef()
  // const socket = useRef()

  const getUserId = async()=>{
    const token = localStorage.getItem('userToken')
    var config = {
        method: 'get',
        url: `${api.url}/auth/profile`,
        headers: { Authorization: `Bearer ${token}` },
      };
    try {
        const res = await axios(config)
        localStorage.setItem("user_id",res.data.id)
    } catch (error) {
        console.log(error.response.data)
    }
  }

  useEffect(()=>{
    getUserId()
  },[])

  useEffect(()=>{
    const socket = io("ws://localhost:5000") 
    console.log(socket)
  }, [])
  
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setContent(state.content + emoji);
  };

    const activeCard = async(id, avatar, firstname, lastname)=>{
      setSelectedCard(id)
      setUserDetails({
        avatar,
        firstname,
        lastname
      })
      setFirstLoad(false)
      const socket = io("ws://localhost:5000")
      socket.emit("joinChat",id)
      const token = localStorage.getItem('userToken')
      var config = {
          method: 'post',
          url: `${api.url}/chat/create-chat`,
          headers: { Authorization: `Bearer ${token}` },
          data: {id}
        };
      try {
        const res = await axios(config)
        setConversation(res.data.message)
        setState({sender: localStorage.getItem('user_id'), chatid: res.data.id})
       
      } catch (error) {
        console.log(error.response.data)
      }
    }

    useEffect(()=>{

    }, [isMessage])
    useEffect(()=>{
      scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }, [conversation])

    const sendMessage = async(e)=>{
      const token = localStorage.getItem('userToken')
      let id = state.chatid
      var config = {
          method: 'post',
          url: `${api.url}/chat/chat-user/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: state
        };
      try {
        if(state.content){
          const res = await axios(config)
          setConversation([...conversation, res.data.result] )
          setState({...state, content: ""})
          setIsMessage(!isMessage)
          return
        }
        // setConversation(res.data.message)
      } catch (error) {
        console.log(error.response.data)
      }
      const socket = io("ws://localhost:5000")
      socket.emit("newMessage",state)
    }
  return (
    <div className='container'>
        <div className='col-12 col-md-3 friend-list pr-0'>
        <Search/>
        <ChatFriends 
        selectedCard={selectedCard}
        activeCard={activeCard}/>
        </div>
        <div className='col-md-9 pl-0'>
          {selectedCard &&
           <ChatNavbar avatar={userDetails.avatar}
           firstName={userDetails.firstname}
           lastName={userDetails.lastname}/>
          }
            <div className='message-container '>
              {
                conversation?.length ? 
                  conversation.map(c=>{
                    return(
                      <div className='msg-content' ref={scrollRef} key={c.id}>
                        <Message c={c}/>
                      </div>
                    )
                  })
                :
                <h3 className='text-muted pl-2'>Select a conversation and start sending message</h3>
              }
            </div>
            <div className="row pl-3 msg-box" style={{display: firstLoad && "none"}}>
              {showEmojis && (
                <div className='emoji-icon'>
                  <Picker data={data} theme={localStorage.getItem('theme-dark') === 'dark'? 'dark' : "light"}  onSelect={addEmoji} />
                </div>
              )} 
              <div className='col-1 align-self-center'>
                <span style={{cursor:"pointer", fontSize:"13px"}}
                onClick={() => setShowEmojis(!showEmojis)}>
                  <i className="far fa-smile"></i>
                </span>
              </div>
              <div className='col-9'>
                  <textarea rows={'2'} placeholder="Write something ..."
                  className='form-control shadow-none' 
                  value={state.content}
                  onChange={(e)=> setState({...state, content: e.target.value})}/>
              </div>
              <div className="col-2 align-self-center">
                  <span onClick={sendMessage}>
                    <i class="fas fa-paper-plane"></i>
                  </span>
              </div>
              
          
          </div>
        </div>
    </div>
  )
}
