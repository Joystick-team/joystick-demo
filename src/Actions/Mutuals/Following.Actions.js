import axios from 'axios'
import { FETCH_ALL_FOLLOWING_REQUEST, 
    FETCH_ALL_FOLLOWING_SUCCESS,
    FETCH_ALL_FOLLOWING_FAIL} from '../../Action-Creators/Mutuals/FetchFollowing.AC';

export const fetchAllFollowingAction = () =>
  async (dispatch,getState) => {
    try {
      dispatch({ type:FETCH_ALL_FOLLOWING_REQUEST })
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
        `https://api.joysticklabs.io/api/v1/auth/mutual?type=following&page=1&limit=15`,
     

        config
      )
      dispatch({ type:FETCH_ALL_FOLLOWING_SUCCESS, payload: data })
      console.log("following",data.data)
    } catch (error) {
      dispatch({ type: FETCH_ALL_FOLLOWING_FAIL, payload: error })

      console.log('error', error?.response)
    }
  }
