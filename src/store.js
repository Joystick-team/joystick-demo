import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchAllGamesReducer } from "./Reducers/Games.Reducer";
import { signupReducer } from "./Reducers/AuthReducer/signup.Reducer";
import { signinReducer } from "./Reducers/AuthReducer/signin.Reducer";
import { profileReducer } from "./Reducers/AuthReducer/profile.Reducer";
import { profileUpdateReducer } from "./Reducers/AuthReducer/Profile.Update.Reducer";
import { searchReducer } from "./Reducers/Search.Reducer";
import { fetchAllPostsReducer } from "./Reducers/Posts.Reducer";
import { fetchNotificationsReducer } from "./Reducers/Notifications.Reducer";
import { fetchAllFollowersReducer } from "./Reducers/MutualReducers/Followers.Reducer";
import { fetchAllFollowingReducer } from "./Reducers/MutualReducers/Following.Reducing";



const reducer = combineReducers({
  fetchAllGames: fetchAllGamesReducer,
  signup: signupReducer,
  signin: signinReducer,
  profile: profileReducer,
  posts: fetchAllPostsReducer,
  profileUpdate: profileUpdateReducer,
  search: searchReducer,
  notifications: fetchNotificationsReducer,
  updateProfile: updateProfileReducer,
  updateForm:updateFormReducer
});
const token = localStorage.getItem("userToken")
  ? JSON.parse(localStorage.getItem("userToken"))
  : null;
const signup_id = localStorage.getItem("signup_id")
  ? JSON.parse(localStorage.getItem("signup_id"))
  : null;

const initialState = {
  signin: { userToken: token },
  signup: { userId: signup_id },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
