import {  FETCH_ALL_POSTS_FAIL,
    FETCH_ALL_POSTS_REQUEST ,
    FETCH_ALL_POSTS_SUCCESS,} from "../Action-Creators/FetchAllPosts.AC";


export const fetchAllPostsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case  FETCH_ALL_POSTS_REQUEST:
            return { loading: true,sucess:false };
        case FETCH_ALL_POSTS_SUCCESS:
            return { loading: false, sucess: true, posts: payload };
        case  FETCH_ALL_POSTS_FAIL:
            return { loading: false, sucess: false, error: payload };
        default:
            return state;
    }
}