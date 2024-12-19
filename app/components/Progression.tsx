"use client";
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';  // Ensure db is correctly initialized
import { Slider } from '@mui/material';

export default function Progression({
  userId,
  onProgressUpdate,
}: {
  userId: string;
  onProgressUpdate: (progress: { dubaiProgress: number; sfProgress: number }) => void;
}) {
  const [dubaiProgress, setDubaiProgress] = useState<number>(0);
  const [sfProgress, setSfProgress] = useState<number>(0);

  useEffect(() => {
    if (!db || !userId) return;

    const fetchProgress = async () => {
      const userRef = doc(db, 'users', userId);
      try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          const dubai = data?.dubaiProgress ?? 0;
          const sf = data?.sfProgress ?? 0;
          setDubaiProgress(dubai);
          setSfProgress(sf);
          onProgressUpdate({ dubaiProgress: dubai, sfProgress: sf });
        }
      } catch (error) {
        console.error('Firestore or userId is undefined!');
      }
    };

    fetchProgress();
  }, [userId, onProgressUpdate]);

  return (
    <ul className="space-y-4" style={{ width: "100%" }}>
      <h4 className="font-bold text-xl text-white-800 text-center">Progression</h4>
      <h5>Dubai</h5>
      <Slider
        aria-label="Dubai Progress"
        value={dubaiProgress}
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
        value={sfProgress}
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
