"use client";

import { Suspense, useEffect, useState } from 'react';
import Image from "next/image";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import { useLaunchParams } from "@telegram-apps/sdk-react";
import dynamic from 'next/dynamic';
import { Button } from '@headlessui/react';
import Stats from "./components/Rewards";
import Progression from './components/Progression';
import Rewards from './components/Rewards';

// Créer un composant client-only pour le TaskBoard
// const TaskBoardClient = dynamic(() => Promise.resolve(TaskBoard), {
//   ssr: false
// });

// function TaskBoard() {
//   const [groupId, setGroupId] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   // const launchParams = useLaunchParams();

//   useEffect(() => {
//      const initializeComponent = async () => {
//       try {
//         // if (launchParams?.startParam) {
//         //   const encodedGroupId = launchParams.startParam;
//         //   try {
//         //     const decodedGroupId = atob(encodedGroupId);
//         //     console.log("Decoded Group ID:", decodedGroupId);
//         //     setGroupId(decodedGroupId);
//         //   } catch (error) {
//         //     console.error("Error decoding group ID:", error);
//         //     setError("Invalid group ID format");
//         //   }
//         // } else {
//         //   console.log("No start_param available");
//         //   setError("No group ID provided");
//         // }
//        } catch (error) {
//          console.error("Error in initializeComponent:", error);
//          setError("An error occurred while initializing the component");
//        } finally {
//          setIsLoading(false);
//        }
//      };

//     initializeComponent();
//   }, []);

//   if (isLoading) {
//     return <div className="p-8">Loading...</div>;
//   }

//   if (error) {
//     return <div className="p-8 text-red-500">{error}</div>;
//   }

//   // if (!groupId) {
//   //   return <div className="p-8">Please provide a valid group ID</div>;
//   // }

//   return (
//     <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-8">
//       <header className="flex items-center justify-between">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <h1 className="text-2xl font-bold">Task Board - Group {groupId}</h1>
//       </header>

//       <main className="flex flex-col gap-8">
//         <TaskForm />
//         <TaskList />
//       </main>

//       <footer className="flex justify-center text-sm text-gray-500">
//         Powered by Next.js
//       </footer>
//     </div>
//   );
// }

export default function Home() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      {/* <TaskBoardClient /> */}
      <div className="flex justify-center items-center min-h-screen">
        {/* Container for buttons with vertical layout */}
        <div className="flex flex-col justify-center items-center space-y-4 max-w-xs w-full">
          <Progression></Progression>
          <Rewards></Rewards>
          <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-500 active:bg-sky-700 w-full">
            Goto Dubai City
          </Button>
          <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-500 active:bg-sky-700 w-full">
            Goto San Francisco City
          </Button>
        </div>
      </div>
    </Suspense>
  );
}