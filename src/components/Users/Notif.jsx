import React, { useState } from 'react';

const NotificationPane = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'You have a new message', timestamp: new Date() },
    { id: 2, message: 'Your order has been shipped', timestamp: new Date() },
    // Add more notifications as needed
  ]);

  return (
    <div className="notification-pane">
      <h2>Notification History</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <strong>{notification.message}</strong>
            <p>{notification.timestamp.toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPane;
