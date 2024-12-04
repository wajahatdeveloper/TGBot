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
import TelegramUserInfo from './components/TelegramUserInfo';

export default function Home() {

  let userId = "abc";

  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <TelegramUserInfo></TelegramUserInfo>
      <div className="flex justify-center items-center min-h-screen">
        {/* Container for buttons with vertical layout */}
        <div className="flex flex-col justify-center items-center space-y-4 max-w-xs w-full">
          <Progression userId={userId}></Progression>
          <Rewards></Rewards>
          <Button variant="contained" className="w-full">
            Goto Dubai City
          </Button>
          <Button variant="contained" className="w-full">
            Goto San Francisco City
          </Button>
          <hr/>
          <Button variant="outlined" className="w-full">
            Share
          </Button>
        </div>
      </div>
    </Suspense>
  );
}