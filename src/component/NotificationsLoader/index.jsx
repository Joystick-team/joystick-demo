import "./notifyloader.scss";

const NotificationsLoader = () => {
  return (
    <div className="loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NotificationsLoader;
