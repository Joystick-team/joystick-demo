import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAIL } from "../../Action-Creators/Authenication/Profile.Auth";
import axios from "axios";

export const profileAction = () => async (dispatch, getState) => {
    try {
        dispatch({type: PROFILE_REQUEST });
        const { signin } = getState();
        const userToken = signin?.userToken;
        console.log("tk",userToken?.access_token)
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken?.access_token}`
            }
        }
        const { data } = await axios.get("https://api.joysticklabs.io/api/v1/auth/profile", config)
        dispatch({ type: PROFILE_SUCCESS, payload: data })
        console.log("profile",data)
    } catch (error) {
        dispatch({type:PROFILE_FAIL,payload:error?.response?.data?.message})
        console.log(error)
    }
}