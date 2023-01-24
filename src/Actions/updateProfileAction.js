import { UPDATE_OPEN } from "../Action-Creators/updateProfile.AC";

export const updateProfileAction = (value) => (dispatch) => {
    dispatch({type:UPDATE_OPEN,payload:value})
}