import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Settings_Nav from "./Settings_Nav"
import { UpdateAccountData, EditAccountData, SecurityData } from './Account.data';
import { profileFormAction } from '../../Actions/profileForm.Action';
import { UpdateForm } from './Update.form';
import "./settings.css"

export default function Settings() {
  const val = false;
  const [selected, setSelected] = useState("Account")
  const [data, setData] = useState([])
  const [display, setDisplay] = useState(true)
  const { open } = useSelector(state => state.updateProfile)
  const { openUpdateForm } = useSelector(state => state.updateForm)
  const { profile_data } = useSelector(state => state.profile)
  
  const dispatch = useDispatch()
  
  
// useEffect(()=>{console.log("open",open)},[open])


  const handleDisplay = () => {
    dispatch(profileFormAction(true))
  }


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
       {profile_data?.id?setData(EditAccountData): setData(UpdateAccountData)};
        break;
      case "Security":
        setData(SecurityData);
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
                  <Settings_Nav navs={el.title} active={selected === el.id}
                    setSelected={setSelected} id={el.id}
                    key={el.id}
                  />
                )
              })
            }
          </ul>
        </div> 
        
        <div className='settings--main'>{data?.map(item => {
            return (
              <div className="settings--content" key={item.title}>
                <h5 className={openUpdateForm?"hideForm":'settings--heading'}>{item.title}</h5>

                <div className={openUpdateForm? "hideForm":'content'} onClick={!item.info5?handleDisplay:undefined}>
                  <h6>{item.info1}</h6>
                  <p>{ item.info2}</p>
              </div>
                <div className={openUpdateForm? "hideForm":'content'}>
                  <h6>{item.info3}</h6>
                  <p>{ item.info4}</p>
              </div>
              </div>
            )
        })}
          <div className={openUpdateForm?"updateFormShow":'hideForm'}>
             <UpdateForm/>
          </div>
        </div>
        
      </div>
     
      <div className="side-adverts">
        {/* The left advert/chat/friends should be written here */}
        
      </div>
    </div>
    
  )
}
