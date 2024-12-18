"use client";

import { Suspense, useEffect, useState } from 'react';
import Image from "next/image";
// import { useLaunchParams } from "@telegram-apps/sdk-react";
import dynamic from 'next/dynamic';
import Button from '@mui/material/Button';
import Stats from "./components/Rewards";
import Progression from './components/Progression';
import Rewards from './components/Rewards';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
  
  const GotoDubai = () => {
    window.open(`https://zohaibb936.itch.io/dubai?userId=${startAppParam}`, "_blank");
  };
  
  const GotoSf = () => {
    window.open(`https://zohaibb936.itch.io/sanfrancisco?userId=${startAppParam}`, "_blank");
  };
  
  const shareUrl = () => {
    const url = "https://t.me/ark786_bot"; // URL to share
    const text = ""; // Custom message
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    
    window.open(telegramShareUrl, "_blank"); // Open Telegram share in a new tab

    
    return (
      <div>
        {/* Correct way to reference images from the public directory */}
        <Image src="/dubai.jpg" alt="Dubai" width={300} height={200} />
        <Image src="/sf.jpg" alt="San Francisco" width={300} height={200} />
      </div>
    );
  };

  const [startAppParam, setStartAppParam] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [navValue, setNavValue] = React.useState(0);

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const startapp = params.get("startapp") as string;
    setStartAppParam(startapp);
    setIsLoading(false); // Mark loading as complete
  }, []);


  if (isLoading) {
    // Show suspense fallback until loading is complete
    return <div className="p-8">Loading...</div>;
  }

  function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    if (
      event.defaultPrevented ||
      event.button !== 0 || // ignore everything but left-click
      event.metaKey ||
      event.ctrlKey ||
      event.altKey ||
      event.shiftKey
    ) {
      return false;
    }
    return true;
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ))
    ) {
      setNavValue(newValue);
    }
  };

  const project = () => {
    switch (navValue) {
      case 0: // home
      return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', justifyContent: 'center' }}>
            <ComplexThumbnail
                src="/dubai.jpg"
                alt="Dubai Complex"
                onClick={GotoDubai}
                label="Dubai Complex"
            />
            <ComplexThumbnail
                src="/sf.jpg"
                alt="San Francisco Complex"
                onClick={GotoSf}
                label="San Francisco Complex"
            />
        </div>
    );
        /*return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Button variant="outlined" onClick={GotoDubai}>
        Goto Dubai City
      </Button>
      <Button variant="outlined" onClick={GotoSf}>
        Goto San Francisco City
      </Button>
    </div>
        );
      case 1: // trophy
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '75%' }}>
          <Progression userId={startAppParam} />
          <Rewards userId={startAppParam} />
        </div>
      );
      */
      case 2: // coin
        return <p>Coin Page</p>;
      case 3: // account
        return (
          <Button variant="outlined" className="w-full" onClick={shareUrl} style={{ width: '75%' }}>
            Share
          </Button>
        );
      default:
        return <div>Invalid navigation value.</div>;
    }
  };

  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
       <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh", // Full viewport height
          justifyContent: "space-between", // Push content and tabs apart
        }}
      >
        {/* Main content area */}
        <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          {startAppParam ? (
            project() // Dynamically rendered content
          ) : (
            <div>No startapp parameter found.</div>
          )}
        </div>

        {/* Tabs - Always at the bottom */}
        <div style={{ borderTop: "1px solid #ccc" }}>
        <Tabs
    value={navValue}
    onChange={handleChange}
    aria-label="icon tabs example"
    variant="fullWidth"
    style={{ width: "100%" }}
>
    <Tab icon={<HomeIcon />} aria-label="explore-complexes" />
    <Tab icon={<EmojiEventsIcon />} aria-label="challenges-achievements" />
    <Tab icon={<PaidIcon />} aria-label="harmony-wallet" />
    <Tab icon={<ChatBubbleIcon />} aria-label="community-hub" />
    <Tab icon={<AccountCircleIcon />} aria-label="profile-progress" />
</Tabs>
        </div>
      </div>
    </Suspense>
  );
}

import { StaticImageData } from 'next/image'; // Import the type

interface ComplexThumbnailProps {
    src: string | StaticImageData; // Define the type of src
    alt: string;
    onClick: () => void; // Define the type of onClick
    label: string;
}

const ComplexThumbnail = ({ src, alt, onClick, label }: ComplexThumbnailProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
      <div
          style={{
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // Smooth transitions
              transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Scale on hover
              boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none', // Subtle shadow on hover
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
      >
          <Image src={src} alt={alt} width={300} height={169} style={{ objectFit: 'cover' }} />
          <div style={{ padding: '8px', textAlign: 'center' }}>{label}</div>
      </div>
  );
};