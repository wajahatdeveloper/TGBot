"use client"

import { useState } from 'react';

const TelegramUserInfo = () => {
  const [userId, setUserId] = useState(null);

  const fetchUserInfo = async () => {
    try {
      const res = await fetch(`http://${process.env.NEXT_PUBLIC_WEBHOOK_URL}/api/bot`);
      const data = await res.json();
      console.log('Bot Info:', data);
      setUserId(data.userId);
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchUserInfo}>Get User Info</button>
      {userId && <p>Your Telegram User ID is: {userId}</p>}
    </div>
  );
};

export default TelegramUserInfo;