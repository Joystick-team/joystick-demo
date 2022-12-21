import { SEARCH_REQUEST } from "../Action-Creators/Search.AC";

export const searchReducer = (state={},{type,payload}) => {
    switch (type) {
        case SEARCH_REQUEST:
            return { search_string: payload };
        default:
            return state;
    }
}