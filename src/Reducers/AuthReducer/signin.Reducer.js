import { SIGININ_REQUEST, SIGININ_SUCCESS, SIGININ_FAIL, LOGOUT } from "../../Action-Creators/Authenication/Signin.Auth";
export const signinReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SIGININ_REQUEST:
            return { signin_loading: true, signin_success: false };
        case SIGININ_SUCCESS:
            return { signin_loading: false, signin_success: true, userToken: payload };
        case SIGININ_FAIL:
            return { signin_loading: false, signin_success: false, signin_error: payload };
        case LOGOUT:
            return {};
        default:
            return state;
    }
}