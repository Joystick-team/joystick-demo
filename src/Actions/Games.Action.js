import axios from "axios"
import { FETCH_GAMES_REQUEST,FETCH_GAMES_SUCCESS,FETCH_GAMES_FAIL } from "../Action-Creators/FetchGames.AC"

export const fetchGameAction = (id) => async(dispatch, getState) => {
    try {
        dispatch({ type: FETCH_GAMES_REQUEST })
        const {data} = await axios.get(`https://api.joysticklabs.io/api/v1/game?game_type=off_site&sort=asc-name&search_term=a&page=${id}&limit=15`)
        dispatch({type:FETCH_GAMES_SUCCESS,payload:data})
        console.log("games",data)
    } catch (error) {
        dispatch({ type: FETCH_GAMES_FAIL, payload: error })
        console.log("error", error);
    }
}