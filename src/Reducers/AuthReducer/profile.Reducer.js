import { PROFILE_REQUEST,PROFILE_SUCCESS,PROFILE_FAIL } from "../../Action-Creators/Authenication/Profile.Auth";

export const profileReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case PROFILE_REQUEST:
            return { profile_loading: true,profile_success:false };
        case PROFILE_SUCCESS:
            return { profile_loading: false, profile_success: true, profile_data: payload };
        case PROFILE_FAIL:
            return{profile_loading:false,profile_success: false,profile_error:payload}
        default:
            return state;
    }
}