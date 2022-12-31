import React from 'react'

export default function Search() {
  return (
    <div className="search mb-3">
      <div className="searchForm">
        <input
          type="text"
          className='form-control shadow-none'
          placeholder="Find a user"
          // value={username}
        />
      </div>
      {/* {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )} */}
    </div>
  )
}
