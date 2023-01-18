import { FETCH_NOTIFICATIONS } from "../Action-Creators/Notifications.AC";
import axios from "axios";

export const fetchAllNotifications =
  (page, setLoading) => async (dispatch, getState) => {
    setLoading(true);
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
      dispatch({ type: FETCH_NOTIFICATIONS, payload: data });
      setLoading && setLoading(false);
    } catch (error) {
      setLoading && setLoading(false);
      console.log("notifications error", error?.response?.data?.message);
    }
  };
