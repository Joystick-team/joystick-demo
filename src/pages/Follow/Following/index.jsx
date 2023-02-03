import React,{useEffect} from 'react'
import PageLayout from '../pageLayout'
import {CgArrowLongLeft} from "react-icons/cg"
import "./following.scss"
import following1 from "../../../assets/images/creator3.png"
import Person from '../Person'
import { useSelector, useDispatch } from "react-redux"
import { fetchAllFollowingAction } from '../../../Actions/Mutuals/Following.Actions'

export default function Following() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllFollowingAction())
  },[])
  
  const {loading,success,error,followings} = useSelector(state=>state.fetchAllFollowing)

  console.log(loading,success,error,followings,"followingp")
  return (
    <PageLayout>
       <div className='following-div'>
          <div className='following-main'>
              <h5 className='following-top'>
                <CgArrowLongLeft onClick={() => history.go(-1)} />
                <span>Following</span>
              </h5>
              {followings?.data.length===0?
                <div>
                  You have no following.
                </div>
                :

              <div className='following-col'>
                   {followings?.data?.map((following)=>{

                    return(
                      <Person  followee={following} btnName={"Following"} />
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



