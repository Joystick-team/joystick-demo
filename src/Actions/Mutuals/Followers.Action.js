import axios from 'axios'
import { FETCH_ALL_FOLLOWERS_REQUEST, 
    FETCH_ALL_FOLLOWERS_SUCCESS,
    FETCH_ALL_FOLLOWERS_FAIL} from '../../Action-Creators/Mutuals/FetchFollwers.AC';

export const fetchAllFollowersAction = () =>
  async (dispatch,getState) => {
    try {
      dispatch({ type:FETCH_ALL_FOLLOWERS_REQUEST })
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
        `https://api.joysticklabs.io/api/v1/auth/mutual?type=followers&page=1&limit=15`,
     

        config
      )
      dispatch({ type:FETCH_ALL_FOLLOWERS_SUCCESS, payload: data })
      console.log("followers",data?.data)
    } catch (error) {
      dispatch({ type: FETCH_ALL_FOLLOWERS_FAIL, payload: error })

      console.log('error', error?.response)
    }
  }
