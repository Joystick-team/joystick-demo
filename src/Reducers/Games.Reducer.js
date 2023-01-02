import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS,FETCH_GAMES_FAIL } from "../Action-Creators/FetchGames.AC";


export const fetchAllGamesReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case FETCH_GAMES_REQUEST:
            return { loading: true,sucess:false };
        case FETCH_GAMES_SUCCESS:
            return { loading: false, sucess: true, games: payload };
        case FETCH_GAMES_FAIL:
            return { loading: false, sucess: false, error: payload };
        default:
            return state;
    }
}