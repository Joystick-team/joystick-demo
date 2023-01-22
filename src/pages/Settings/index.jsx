import React, { useState, useEffect } from 'react'
import Settings_Nav from "./Settings_Nav"
import { UpdateAccountData,EditAccountData } from './Account.data';
import "./settings.css"

export default function Settings() {
  const val = false;
  const [selected, setSelected] = useState("Account")
  const [data, setData] = useState([])
  
  const item = [
    {
      id: "Account",
      title:"Account"
    },
    {
      id: "Security",
      title:"Security"
    },
    {
      id: "Wallet",
      title:"Wallet"
    },
    {
      id: "Streaming",
      title:"Streaming"
    },
    {
      id: "Prefrences",
      title:"Prefrences"
    },
    {
      id: "Notifications",
      title:"Notifications"
    },
  ]
  useEffect(() => {
    switch (selected) {
      case "Account":
        setData(UpdateAccountData);
        break;
      case "Security":
        setData([]);
        break;
      case "Wallet":
        setData([]);
        break;
      case "Streaming":
        setData([]);
        break;
      case "Prefrences":
       {val? setData([]):setData([])};
        break;
      case "Notifications":
        setData([]);
        break;
      default:
        setData([])
    }
  },[selected])
  return (
    <div className="settings">
      <div className="container"> 
        <div className='settings--nav' >
          <h6>Settings</h6>
          <ul>
            {
              item?.map(el => {
                return (
                  <Settings_Nav navs={ el.title}  active={selected === el.id} setSelected={setSelected} id={el.id} />
                )
              })
            }
          </ul>
        </div> 
        
        <div className='settings--main'>{data?.map(item => {
          return (
            <div>
              <h5>{item.title}</h5>
              <div>
                <h6>{item.info1}</h6>
                <p>{ item.info2}</p>
             </div>
              <div>
                <h6>{item.info3}</h6>
                <p>{ item.info4}</p>
             </div>
            </div>
          )
        })}</div>
      </div>
      <div className="side-adverts">
        {/* The left advert/chat/friends should be written here */}
        
      </div>
    </div>
    
  )
}
