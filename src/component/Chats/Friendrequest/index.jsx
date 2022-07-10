export default function Friendrequest(props) {
    return (
      <div>
          <div className="chat-details">
              <div className="chat-profile">
              <img loading='lazy' style={{cursor: 'pointer'}} src={props.image} alt="chat-Avarta" />
              <div className="chatdetails" style={{cursor: 'pointer'}}>
                  <p className="profile-chat-title" >{props.title}</p>
              </div>
              {/* <div className="btn-request" style={{display: 'flex', alignItems: 'center'}}>
                <button>accept</button>
                <button>decline</button>
              </div> */}
              </div>
        </div>
      </div>
    )
  }