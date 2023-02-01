import { HiOutlinePaperAirplane } from "react-icons/hi2";

const LiveChat = () => {
  const Chats = () => {
    return (
      <div className="chats">
        <img src="/assets/images/joystick-user.png" alt="" />
        <div>
          <p>Annette Black</p>
          <p>How are you and todnmdolds slkssksms posns?</p>
        </div>
      </div>
    );
  };

  return (
    <div className="live-chat">
      <h4>Live Chat</h4>
      <div className="chat-comments">
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />

        <Chats />
      </div>
      <div className="comment">
        <input type="text" placeholder="Add a comment..." />
        <HiOutlinePaperAirplane />
      </div>
    </div>
  );
};

export default LiveChat;
