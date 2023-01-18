import React, { useEffect, useState } from "react";
import NotificationCard from "../../component/NotificationCard";
import ActiveFriends from "../../component/ActiveFriends";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllNotifications } from "../../Actions/Notifications.action";
import NotificationsLoader from "../../component/NotificationsLoader";
import "./notifications.scss";

const Notifications = () => {
  const { notifications } = useSelector((state) => state);
  const { userToken } = useSelector((state) => state.signin);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    userToken?.access_token &&
      dispatch(fetchAllNotifications(page, setLoading));
  }, [page]);

  return (
    <div className="notifications">
      <div className="notifications-content">
        <div className="left-section">
          <div className="header">
            <p className="header-text">Notifications</p>
          </div>
          {loading ? (
            <NotificationsLoader />
          ) : notifications?.data?.length !== 0 ? (
            <div className="left-body">
              {notifications?.data?.map((notification) => (
                <NotificationCard notification={notification} />
              ))}
            </div>
          ) : (
            <div className="empty-data">
              You don't have any notifications yet.
            </div>
          )}

          {notifications?.data?.length !== 0 && (
            <div className="load-more-btn">
              <button disabled={loading} onClick={() => setPage(page + 1)}>
                Load More..
              </button>
            </div>
          )}
        </div>

        <div className="right-section">
          <ActiveFriends />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
