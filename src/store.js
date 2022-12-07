import { createStore, combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { fetchAllGamesReducer } from "./Reducers/Games.Reducer"
import { signupReducer } from "./Reducers/AuthReducer/signup.Reducer"


const reducer = combineReducers({
    fetchAllGames: fetchAllGamesReducer,
    signup:signupReducer
})

const initialState = {}
const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;