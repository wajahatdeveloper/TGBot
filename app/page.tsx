"use client";

// React-related imports
import * as React from 'react';
import { Suspense, useEffect, useState } from 'react';
import Image from "next/image"; // For optimized images
import useMediaQuery from '@mui/material/useMediaQuery'; // For responsive behavior

// MUI components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Typography } from '@mui/material';

// Material-UI Icons
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

// Custom Components
import Stats from "./components/Rewards";
import Progression from './components/Progression';
import Rewards from './components/Rewards';
import ComplexThumbnail from './components/ComplexThumbnail';
import HeaderBar from './components/Headerbar';
import ExplorationCard from './components/ExplorationCard';
import ProfileScreen from './components/ProfileScreen';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
  
  const isMobile = useMediaQuery('(max-width:600px)');
  const [dubaiProgress, setDubaiProgress] = useState<number>(0);
  const [sfProgress, setSfProgress] = useState<number>(0);
  const [startAppParam, setStartAppParam] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [navValue, setNavValue] = useState(0);

  <Progression
  userId={startAppParam}
  onProgressUpdate={({ dubaiProgress, sfProgress }) => {
    setDubaiProgress(dubaiProgress);
    setSfProgress(sfProgress);
  }}
/>

  const handleProgressUpdate = (progress: { dubaiProgress: number; sfProgress: number }) => {
    setDubaiProgress(progress.dubaiProgress);
    setSfProgress(progress.sfProgress);
  };
  
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
  
  const handleAvatarClick = () => setNavValue(4); // Navigate to Profile screen

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const startapp = params.get("startapp") as string;
    setStartAppParam(startapp);
    setIsLoading(false);
  }, []);



  if (isLoading) return <div className="p-8">Loading...</div>;
  

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
    // Define common styles for reuse
    const flexCenterStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const cardStyle = {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      flex: 1,
      textAlign: 'center',
      backgroundColor: '#000000',
    };
  
    const titleStyle = {
      fontWeight: 'bold',
      marginBottom: '16px',
      textAlign: 'center',
    };
  
    switch (navValue) {
      case 0: // Home
        return (
          <Box
            sx={{
              ...flexCenterStyle,
              flexDirection: isMobile ? 'column' : 'row',
              gap: '24px',
              width: '100%',
              height: '75%',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', width: '100%' }}>
              <ComplexThumbnail
                src="/dubai.jpg"
                alt="Dubai"
                onClick={GotoDubai}
                label="Dubai"
                description="Explore the luxurious and modern architecture of Dubai."
              />
              <ComplexThumbnail
                src="/sf.jpg"
                alt="San Francisco"
                onClick={GotoSf}
                label="San Francisco"
                description="Discover the vibrant culture and iconic landmarks of San Francisco."
              />
            </Box>
          </Box>
        );
  
      case 1: // Exploration Progress and Achievements
        return (
          <>
            {/* Header Bar */}
            <HeaderBar userId={startAppParam} coins={0} onAvatarClick={handleAvatarClick} />
  
            {/* Scrollable Content */}
            <Box
              sx={{
                padding: '16px',
                paddingTop: '80px', // Prevent overlap with header
                overflowY: 'scroll',
                maxHeight: 'calc(100vh - 64px)', // Adjust for header height
                scrollbarWidth: 'thin',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <Typography variant="h5" sx={titleStyle}>
                Exploration Progress
              </Typography>
  
              {/* Progress Cards */}
              <Box sx={{ display: 'flex', flexDirection: isMobile ? 'row' : 'row', gap: '16px' }}>
                <ExplorationCard
                  city="Dubai"
                  progress={dubaiProgress}
                  icon={<SearchIcon />}
                  onDetailsClick={() => console.log('Viewing Dubai Progress Details')}
                  image="/dubai.jpg"
                />
                <ExplorationCard
                  city="San Francisco"
                  progress={sfProgress}
                  icon={<SearchIcon />}
                  onDetailsClick={() => console.log('Viewing SF Progress Details')}
                  image="/sf.jpg"
                />
              </Box>
  
              {/* Achievements Section */}
              <Box sx={{ marginTop: '32px' }}>
                <Typography variant="h5" sx={titleStyle}>
                  Achievements
                </Typography>
  
                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '16px' }}>
                  <Box sx={cardStyle}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Badges
                    </Typography>
                    <Typography>Total: {0}</Typography>
                  </Box>
                  <Box sx={cardStyle}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Coins
                    </Typography>
                    <Typography>Total: {0}</Typography>
                  </Box>
                </Box>
  
                <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
                  <Button variant="contained" color="primary">
                    Leaderboard
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        );
  
      case 2: // Coin Page
        return <p>Coin Page</p>;
  
      case 3: // Account
        return (
          <Button variant="outlined" className="w-full" onClick={shareUrl} sx={{ width: '75%' }}>
            Share
          </Button>
        );
  
      case 4: // Profile Screen
        return (
          <ProfileScreen
            userId={startAppParam}
            dubaiProgress={dubaiProgress}
            sfProgress={sfProgress}
            badgesCount={0} // Replace with actual badge data from Rewards
            coinsCount={0} // Replace with actual coin data from Rewards
          />
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
      <div style={{ borderTop: "1px solid #1b1e23", backgroundColor: "#f5f5f5" }}>
  <Tabs
    value={navValue}
    onChange={handleChange}
    aria-label="navigation tabs"
    variant="fullWidth" // Ensure buttons are evenly spaced
    orientation="horizontal"
    TabIndicatorProps={{
      sx: { display: "none" }, // Hide the underline for a cleaner look
    }}
  sx={{
    display: "flex",
    justifyContent: "space-between", // Evenly distribute buttons
    backgroundColor: "#272a2f", // Background for the nav bar
    padding: "4px 0", // Add padding for mobile spacing
  }}
>
  <Tab
    icon={<HomeIcon sx={{ 
      fontSize:"2rem",
      fill: '#fff'

    }} />}
    aria-label="Explore"
    sx={{
      flexGrow: 1, // Ensure each button takes equal space
      minWidth: 0, // Prevent buttons from exceeding their container
    }}
    label={isMobile ? null : "Explore"}
  />
  
  <Tab
    icon={<EmojiEventsIcon style={{ fontSize: "2rem" }} />}
    aria-label="Achievements"
    style={{
      flexGrow: 1,
      minWidth: 0,
    }}
    label={isMobile ? null : "Achievements"}
  />
  <Tab
    icon={<PaidIcon style={{ fontSize: "2rem" }} />}
    aria-label="Wallet"
    style={{
      flexGrow: 1,
      minWidth: 0,
    }}
    label={isMobile ? null : "Wallet"}
  />
  <Tab
    icon={<ChatBubbleIcon style={{ fontSize: "2rem" }} />}
    aria-label="Community"
    style={{
      flexGrow: 1,
      minWidth: 0,
    }}
    label={isMobile ? null : "Community"}
  />
  <Tab
    icon={<AccountCircleIcon style={{ fontSize: "2rem" }} />}
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
