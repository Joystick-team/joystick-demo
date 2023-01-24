
import { OPEN_UPDATE_FORM } from "../Action-Creators/profileForm.AC";

export const profileFormAction = (value) => (dispatch) => {
    dispatch({type:OPEN_UPDATE_FORM,payload:value})
}