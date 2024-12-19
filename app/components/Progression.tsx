"use client";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { Slider } from "@mui/material";

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
    if (!db || !userId) {
      console.error("Firestore or userId is undefined!");
      return;
    }

    const userRef = doc(db, "users", userId);

    const fetchUserProgress = async () => {
      try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData?.dubaiProgress !== undefined && userData?.sfProgress !== undefined) {
            setDubaiProgress(userData.dubaiProgress);
            setSfProgress(userData.sfProgress);
            onProgressUpdate({
              dubaiProgress: userData.dubaiProgress,
              sfProgress: userData.sfProgress,
            });
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user progress:", error);
      }
    };

    fetchUserProgress();
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
