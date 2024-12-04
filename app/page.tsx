"use client";

import { Suspense, useEffect, useState } from 'react';
import Image from "next/image";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import { useLaunchParams } from "@telegram-apps/sdk-react";
import dynamic from 'next/dynamic';
import Button from '@mui/material/Button';
import Stats from "./components/Rewards";
import Progression from './components/Progression';
import Rewards from './components/Rewards';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {

  const [startGameParam, setStartGameParam] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const startGame = params.get("startapp") as string;
    setStartGameParam(startGame);
    setIsLoading(false); // Mark loading as complete
  }, []);


  if (isLoading) {
    // Show suspense fallback until loading is complete
    return <div className="p-8">Loading...</div>;
  }

  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <div className="flex justify-center items-center min-h-screen">
        {/* Container for buttons with vertical layout */}
        <div className="flex flex-col justify-center items-center space-y-4 max-w-xs w-full">
        {startGameParam ? (
          <>
            <Progression userId={startGameParam} />
            <Rewards />
            <Button variant="contained" className="w-full">
              Goto Dubai City
            </Button>
            <Button variant="contained" className="w-full">
              Goto San Francisco City
            </Button>
            <hr />
            <Button variant="outlined" className="w-full">
              Share
            </Button>
          </>
        ) : (
          <div>No startGame parameter found.</div>
        )}
        </div>
      </div>
    </Suspense>
  );
}