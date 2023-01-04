import { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL } from "../../Action-Creators/Authenication/Profile.Update";
export const profileUpdateReducer = (
    state = {
        profile_updating: false,
        profile_update_success: false,
        profile_update_data: null,
        profile_update_error: null
    },
    { type, payload }) => {
    switch (type) {
        case UPDATE_PROFILE_REQUEST:
            return { profile_updating: true, profile_update_success: false };
        case UPDATE_PROFILE_SUCCESS:
            return { profile_updating: false, profile_update_success: true, profile_update_data: payload };
        case UPDATE_PROFILE_FAIL:
             return { profile_updating: false, profile_update_success: false,profile_update_error:payload };
        default:
            return state;
    }
}