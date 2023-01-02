import React, { useEffect, useState } from 'react'

function MyComponent() {
  const [unreadMessageCounts, setUnreadMessageCounts] = useState({})

  useEffect(() => {
    // Connect to websocket
    const socket = new WebSocket('ws://my-websocket-server.com')

    // Set up event handler for incoming messages
    socket.onmessage = event => {
      const data = JSON.parse(event.data)
      const { sender, message } = data

      // Increment unread message count for sender
      setUnreadMessageCounts(counts => {
        return {
          ...counts,
          [sender]: (counts[sender] || 0) + 1,
        }
      })
    }
  }, [])

  // Render unread message counts for each user
  return (
    <div>
      {Object.entries(unreadMessageCounts).map(([user, count]) => (
        <div key={user}>
          {user}: {count} unread messages
        </div>
      ))}
    </div>
  )
}
