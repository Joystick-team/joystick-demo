import {FETCH_ALL_FOLLOWERS_SUCCESS,FETCH_ALL_FOLLOWERS_REQUEST,FETCH_ALL_FOLLOWERS_FAIL } from "../../Action-Creators/Mutuals/FetchFollwers.AC";
    export const fetchAllFollowersReducer = (state = [], { type, payload }) => {
        console.log(payload ,"fetching")
        switch (type) {
            case   FETCH_ALL_FOLLOWERS_REQUEST:
                return { loading: true,sucess:false };
            case  FETCH_ALL_FOLLOWERS_SUCCESS:
                return { loading: false, sucess: true, followers: payload };
            case    FETCH_ALL_FOLLOWERS_FAIL:
                return { loading: false, sucess: false, error: payload };
            default:
                return state;
        }
    }