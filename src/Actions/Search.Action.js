import { SEARCH_REQUEST } from "../Action-Creators/Search.AC";

export const searchAction = (searchTerm) => (dispatch) => {
    dispatch({type:SEARCH_REQUEST,payload:searchTerm})
}