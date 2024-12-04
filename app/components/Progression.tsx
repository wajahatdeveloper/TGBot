"use client";

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';  // Ensure db is correctly initialized
import { Slider } from '@mui/material';

export default function Progression({ userId }: { userId: string }) {
  // Initialize state with a default value to avoid uncontrolled -> controlled warning
  const [dubaiProgress, setDubaiProgress] = useState<number>(0);
  const [sfProgress, setSfProgress] = useState<number>(0);

  useEffect(() => {

// Check if db and userId are defined
console.log('db:', db);
console.log('userId:', userId);

// If db or userId is undefined, log a message and exit
if (!db || !userId) {
  console.error('Firestore or userId is undefined!');
  return;
}

    // Reference to the user's document in the 'users' collection
    const userRef = doc(db, 'users', userId);

    // Fetch the user's document
    const fetchUserProgress = async () => {
      try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          // Assuming the document has 'dubaiProgress' and 'sfProgress' fields
          if (userData?.dubaiProgress !== undefined && userData?.sfProgress !== undefined) {
            setDubaiProgress(userData.dubaiProgress);
            setSfProgress(userData.sfProgress);
          }
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching user progress:', error);
      }
    };

    fetchUserProgress();
  }, [userId]); // Run this effect when userId changes

  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <ul className="space-y-4" style={{ width: "100%" }}>
      <h4 className="font-bold text-xl text-white-800 text-center">Progression</h4>
      <h5>Dubai</h5>
      <Slider
        aria-label="Dubai Progress"
        value={dubaiProgress} // Controlled value
        getAriaValueText={valuetext}
        step={0.1}
        marks
        min={0}
        max={1}
        valueLabelDisplay="auto"
        disabled
      />
      <h5>San Francisco</h5>
      <Slider
        aria-label="San Francisco Progress"
        value={sfProgress} // Controlled value
        getAriaValueText={valuetext}
        step={0.1}
        marks
        min={0}
        max={1}
        valueLabelDisplay="auto"
        disabled
      />
    </ul>
  );
}