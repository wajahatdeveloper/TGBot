"use client";

import useMediaQuery from '@mui/material/useMediaQuery'; // Import for responsive behavior

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
import Paper from '@mui/material/Paper';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
  
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen width is less than 600px
  
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
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row', // Responsive direction
          gap: '24px',
          alignItems: 'center',
          justifyContent: 'center', // Center content
          width: '100%',
          height: '75%' // added height
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', width: '100%' }}> {/* Changed to column */}
        <ComplexThumbnail
            src="/dubai.jpg"
            alt="Dubai Complex"
            onClick={GotoDubai}
            label="Dubai Complex"
            description="Explore the luxurious and modern architecture of Dubai."
        />
        <ComplexThumbnail
            src="/sf.jpg"
            alt="San Francisco Complex"
            onClick={GotoSf}
            label="San Francisco Complex"
            description="Discover the vibrant culture and iconic landmarks of San Francisco."
        />
    </div>
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
        */
      case 1: // trophy
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '75%' }}>
          <Progression userId={startAppParam} />
          <Rewards userId={startAppParam} />
        </div>
      );
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
        height: "100vh",
        justifyContent: "space-between",
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

      {/* Responsive Bottom Navigation */}
      <div style={{ borderTop: "1px solid #ccc", backgroundColor: "#f5f5f5" }}>
      <Tabs
  value={navValue}
  onChange={handleChange}
  aria-label="navigation tabs"
  variant="fullWidth" // Ensure buttons are evenly spaced
  orientation="horizontal"
  TabIndicatorProps={{
    style: { display: "none" }, // Hide the underline for a cleaner look
  }}
  style={{
    display: "flex",
    justifyContent: "space-between", // Evenly distribute buttons
    backgroundColor: "#f5f5f5", // Background for the nav bar
    padding: "4px 0", // Add padding for mobile spacing
  }}
>
  <Tab
    icon={<HomeIcon style={{ fontSize: "20px" }} />}
    aria-label="Explore"
    style={{
      flexGrow: 1, // Ensure each button takes equal space
      minWidth: 0, // Prevent buttons from exceeding their container
    }}
    label={isMobile ? null : "Explore"}
  />
  <Tab
    icon={<EmojiEventsIcon style={{ fontSize: "20px" }} />}
    aria-label="Achievements"
    style={{
      flexGrow: 1,
      minWidth: 0,
    }}
    label={isMobile ? null : "Achievements"}
  />
  <Tab
    icon={<PaidIcon style={{ fontSize: "20px" }} />}
    aria-label="Wallet"
    style={{
      flexGrow: 1,
      minWidth: 0,
    }}
    label={isMobile ? null : "Wallet"}
  />
  <Tab
    icon={<ChatBubbleIcon style={{ fontSize: "20px" }} />}
    aria-label="Community"
    style={{
      flexGrow: 1,
      minWidth: 0,
    }}
    label={isMobile ? null : "Community"}
  />
  <Tab
    icon={<AccountCircleIcon style={{ fontSize: "20px" }} />}
    aria-label="Profile"
    style={{
      flexGrow: 1,
      minWidth: 0,
    }}
    label={isMobile ? null : "Profile"}
  />
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
    description : string;
}

const ComplexThumbnail = ({ src, alt, onClick, label, description }: ComplexThumbnailProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Paper
    elevation={isHovered ? 4 : 2}
    style={{
        cursor: 'pointer',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        position: 'relative', // Important for absolute positioning of text
        height: '100%',
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onClick={onClick}
>
    <div style={{ flex: 1, overflow: 'hidden' }}>{/* Image Container */}
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} sizes="100vw" />
    </div>
    <div style={{ // Text Overlay
        position: 'absolute',
        bottom: 0, // Position at the bottom
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background
        color: 'white',
        padding: '16px',
        textAlign: 'center',
        backdropFilter: isHovered ? 'blur(5px)' : 'blur(0px)',
        transition: 'backdrop-filter 0.3s ease'
    }}>
        <h3>{label}</h3>
        <p style={{ fontSize: '0.9rem' }}>{description}</p>
    </div>
</Paper>
  );
};