import axios from 'axios'
import {
  FETCH_ALL_POSTS_FAIL,
  FETCH_ALL_POSTS_REQUEST ,
  FETCH_ALL_POSTS_SUCCESS,
} from '../Action-Creators/FetchAllPosts.AC'

export const fetchAllPostsAction = () =>
  async (dispatch,getState) => {
    try {
      dispatch({ type:FETCH_ALL_POSTS_REQUEST })
      const { signin } = getState();
      const userToken = signin?.userToken;
      console.log("post",userToken?.access_token)
      const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken?.access_token}`
        }
      }
      const { data } = await axios.get(
        `https://api.joysticklabs.io/api/v1/post/get-all-posts`,
     

        config
      )
      dispatch({ type:FETCH_ALL_POSTS_SUCCESS, payload: data })
      console.log("posts",data)
    } catch (error) {
      dispatch({ type: FETCH_ALL_POSTS_FAIL, payload: error })

      console.log('error', error?.response)
    }
  }
