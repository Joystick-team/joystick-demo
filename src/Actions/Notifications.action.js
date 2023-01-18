import { FETCH_NOTIFICATIONS } from "../Action-Creators/Notifications.AC";
import axios from "axios";

export const fetchAllNotifications = (page) => async (dispatch, getState) => {
  try {
    const { signin } = getState();
    const userToken = signin?.userToken;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userToken?.access_token}`,
      },
    };
    const { data } = await axios.get(
      `https://api.joysticklabs.io/api/v1/notification?page=${page}`,
      config
    );
    console.log("notifications", data);
    dispatch({ type: FETCH_NOTIFICATIONS, payload: data });
  } catch (error) {
    console.log("notifications error", error?.response?.data?.message);
  }
};
