import { FETCH_ALL_FOLLOWING_REQUEST,FETCH_ALL_FOLLOWING_SUCCESS,FETCH_ALL_FOLLOWING_FAIL } from "../../Action-Creators/Mutuals/FetchFollowing.AC";

    export const fetchAllFollowingReducer = (state = [], { type, payload }) => {
        switch (type) {
            case   FETCH_ALL_FOLLOWING_REQUEST:
                return { loading: true,sucess:false };
            case  FETCH_ALL_FOLLOWING_SUCCESS:
                return { loading: false, sucess: true, followings: payload };
            case    FETCH_ALL_FOLLOWING_FAIL:
                return { loading: false, sucess: false, error: payload };
            default:
                return state;
        }
    }