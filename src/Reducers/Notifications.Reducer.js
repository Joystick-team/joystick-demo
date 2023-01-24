import { FETCH_NOTIFICATIONS } from "../Action-Creators/Notifications.AC";

const initialState = {
  metadata: {
    total: 0,
    count: 0,
    page: 1,
    limit: 15,
  },
  data: [],
};

export const fetchNotificationsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
