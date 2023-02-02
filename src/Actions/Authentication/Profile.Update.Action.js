import { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL } from "../../Action-Creators/Authenication/Profile.Update"
import axios from "axios"

export const updateProfileAction = (formData) => async (dispatch, getState) => {
    console.log("inputs",formData)
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST })
        const { signin } = getState();
        const userToken = signin?.userToken;
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${userToken?.access_token}`
            }
        };
        const { data } = await axios.patch("https://api.joysticklabs.io/api/v1/auth/profile",formData,config);
        console.log("update_result", data);
        dispatch({type:UPDATE_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        console.log("update_error",error?.response?.data?.message)
        dispatch({type:UPDATE_PROFILE_FAIL,payload:error?.response?.data?.message})
    }
}