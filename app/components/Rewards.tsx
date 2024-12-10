"use client";

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';  // Ensure db is correctly initialized
import { Slider } from '@mui/material';

export default function Rewards({ userId }: { userId: string }) {
  // Initialize state with a default value to avoid uncontrolled -> controlled warning
  const [badgesCount, setbadgesCount] = useState<number>(0);
  const [coinsCount, setcoinsCount] = useState<number>(0);

  useEffect(() => {

    // If db or userId is undefined, log a message and exit
    if (!db || !userId) {
      console.error('Firestore or userId is undefined!');
      return;
    }

    // Check if db and userId are defined
    console.log('userId:', userId);

    // Reference to the user's document in the 'users' collection
    const userRef = doc(db, 'users', userId);

    // Fetch the user's document
    const fetchUserProgress = async () => {
      try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData?.badgesCollected !== undefined && userData?.coinsCollected !== undefined) {
            setbadgesCount(userData.badgesCollected);
            setcoinsCount(userData.coinsCollected);
          }
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching user progress:', error);
      }
    };

    fetchUserProgress();
  }, [userId]);

  return (
    <ul className="space-y-4" style={{ width: "100%" }}>
      <h4 className="font-bold text-xl text-white-800 text-center">Rewards</h4>
      <h5>Badges</h5>
      <h6>{badgesCount}</h6>
      <h5>Coins</h5>
      <h6>{coinsCount}</h6>
      </ul>
  );
}