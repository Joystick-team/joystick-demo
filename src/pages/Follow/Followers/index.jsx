import React,{useEffect} from 'react'
import PageLayout from '../pageLayout'
import {CgArrowLongLeft} from "react-icons/cg"
import "./followers.scss"
import following1 from "../../../assets/images/creator3.png"
import Person from '../Person'
import { useSelector, useDispatch } from "react-redux"
import { fetchAllFollowersAction } from '../../../Actions/Mutuals/Followers.Action'




export default function Followers() {
   
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllFollowersAction())
  },[])
  
  const {loading,success,error, followers} = useSelector(state=>state.fetchAllFollowers)

  console.log(loading,success,error, followers,"followers")


  return (
    <PageLayout>
          <div className='follower-div'>
          <div className='follower-main'>
              <h5 className='follower-top'>
                <CgArrowLongLeft onClick={() => history.go(-1)}/>
                <span>Following</span>
              </h5>
              {followers?.data.length===0?
                <div>
                  You have no followers
                </div>
                 :
              <div className='follower-col'>
                   {followers?.data.map((follower)=>{


                    return(
                      <Person  followee={follower} btnName={"Follow back"} />
                    )
                   })

                   }
              </div>

                  }
          </div>

          </div>
     


    </PageLayout>
   
  )
}

