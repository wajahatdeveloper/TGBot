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
import { Avatar, Typography, IconButton, AppBar, Toolbar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'; // Import the coin icon
import { Card, CardContent, LinearProgress} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import SearchIcon from '@mui/icons-material/Search';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const HeaderBar = ({
  userId,
  coins,
  onAvatarClick,
}: {
  userId: string;
  coins: number;
  onAvatarClick: () => void;
}) => {
  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ top: 0, zIndex: 1000 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Challenges & Achievements
        </Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography variant="body1">{coins}</Typography>
          <Avatar
            alt="User Avatar"
            src={`/user-avatars/${userId}.jpg`}
            onClick={onAvatarClick}
            style={{ cursor: "pointer" }}
          />
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

// Card Component for Exploration Progress
const ExplorationCard = ({
  city,
  progress,
  icon,
  onDetailsClick,
  image,
}: {
  city: string;
  progress: number;
  icon: JSX.Element;
  onDetailsClick: () => void;
  image: string;
}) => {
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', width: '45%', margin: '8px' }}>
      <img
        src={image}
        alt={`${city} `}
        style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px 4px 0 0' }}
        />
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
          {city} 
        </Typography>
        <Box display="flex" alignItems="center" gap="8px">
          {icon}
          <Typography variant="body2">Key Milestones</Typography>
        </Box>
        <Box marginY="16px">
          <LinearProgress
            variant="determinate"
            value={progress * 100}
            style={{ height: '10px', borderRadius: '4px' }}
            />
          <Typography variant="body2" align="right">
            {Math.round(progress * 100)}% Complete
          </Typography>
        </Box>
        <Button variant="outlined" onClick={onDetailsClick} fullWidth>
          View Progress Details
        </Button>
      </CardContent>
    </Card>
  );
};
const ProfileScreen = ({
  userId,
  dubaiProgress,
  sfProgress,
  badgesCount,
  coinsCount,
}: {
  userId: string;
  dubaiProgress: number;
  sfProgress: number;
  badgesCount: number;
  coinsCount: number;
}) => {
  return (
    <div
      style={{
        padding: "16px",
        overflowY: "scroll",
        maxHeight: "100vh",
        scrollbarWidth: "thin",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* Center-align Profile Heading */}
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        Profile
      </Typography>

      {/* Profile Overview */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <Avatar
          alt="User Avatar"
          src={`/user-avatars/${userId}.jpg`}
          style={{ width: "100px", height: "100px", margin: "0 auto" }}
        />
        <Typography variant="h6" style={{ marginTop: "8px" }}>
          Username
        </Typography>
        <Typography variant="body2">Customizable Header</Typography>
      </div>

      {/* Milestone Tracker */}
      <div style={{ marginBottom: "32px" }}>
        <Typography
          variant="h6"
          style={{
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          Milestone Tracker
        </Typography>
        <div style={{ marginBottom: "16px" }}>
          <Typography variant="body1" style={{ marginBottom: "4px" }}>
            Dubai: {Math.round(dubaiProgress * 100)}% Complete
          </Typography>
          <LinearProgress
            variant="determinate"
            value={dubaiProgress * 100}
            style={{ height: "10px", borderRadius: "4px" }}
          />
        </div>
        <div>
          <Typography variant="body1" style={{ marginBottom: "4px" }}>
            San Francisco: {Math.round(sfProgress * 100)}% Complete
          </Typography>
          <LinearProgress
            variant="determinate"
            value={sfProgress * 100}
            style={{ height: "10px", borderRadius: "4px" }}
          />
        </div>
      </div>

      {/* Badges & Rewards */}
      <div style={{ marginBottom: "32px" }}>
        <Typography
          variant="h6"
          style={{
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          Badges & Rewards
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: "16px",
          }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
              backgroundColor: "#000000",
              flex: 1,
            }}
          >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Badges
            </Typography>
            <Typography>{badgesCount}</Typography>
          </div>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
              backgroundColor: "#000000",
              flex: 1,
            }}
          >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Coins
            </Typography>
            <Typography>{coinsCount}</Typography>
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div style={{ marginBottom: "32px" }}>
        <Typography
          variant="h6"
          style={{
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          Settings & Preferences
        </Typography>
        <Typography>Manage notifications, wallet connections, and account preferences.</Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "16px" }}
          onClick={() => console.log("Settings Button Clicked")}
        >
          Open Settings
        </Button>
      </div>
    </div>
  );
};

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
        case 1: // Page 2: Exploration Progress and Achievements
        return (
          <>
            {/* Header Bar */}
            <HeaderBar userId={startAppParam} coins={0} onAvatarClick={handleAvatarClick} />
        
            {/* Scrollable Content */}
            <div
              style={{
                padding: "16px",
                paddingTop: "80px", // Prevent overlap with header
                overflowY: "scroll",
                maxHeight: "calc(100vh - 64px)", // Adjust for header height
                scrollbarWidth: "thin",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  fontWeight: "bold",
                  marginBottom: "16px",
                  textAlign: "center", // Center-align heading
                }}
              >
                Exploration Progress
              </Typography>
        
              {/* Progress Cards */}
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "row" : "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <ExplorationCard
                  city="Dubai"
                  progress={dubaiProgress}
                  icon={<SearchIcon />}
                  onDetailsClick={() => console.log("Viewing Dubai Progress Details")}
                  image="/dubai.jpg"
                />
                <ExplorationCard
                  city="San Francisco"
                  progress={sfProgress}
                  icon={<SearchIcon />}
                  onDetailsClick={() => console.log("Viewing SF Progress Details")}
                  image="/sf.jpg"
                />
              </div>
        
              {/* Achievements Section */}
              <div style={{ marginTop: "32px" }}>
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "bold",
                    marginBottom: "16px",
                    textAlign: "center", // Center-align heading
                  }}
                >
                  Achievements
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "16px",
                      flex: "1",
                      textAlign: "center",
                      backgroundColor: "#000000",
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      Badges
                    </Typography>
                    <Typography>Total: {0}</Typography>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "16px",
                      flex: "1",
                      textAlign: "center",
                      backgroundColor: "#000000",
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      Coins
                    </Typography>
                    <Typography>Total: {0}</Typography>
                  </div>
                </div>
                <div style={{ marginTop: "16px", textAlign: "center" }}>
                  {/* Center-align Leaderboard Button */}
                  <Button variant="contained" color="primary">
                    Leaderboard
                  </Button>
                </div>
              </div>
            </div>
          </>
        );
      case 2: // coin
        return <p>Coin Page</p>;
      case 3: // account
        return (
          <Button variant="outlined" className="w-full" onClick={shareUrl} style={{ width: '75%' }}>
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
      <div
        style={{
          position: 'absolute', // Overlap the image
          bottom: 50, // Position at the bottom
          left: 0, // Start from the left
          right: 0, // Span the entire width
          padding: '8px',
          textAlign: 'center',
          color: 'white', // Adjust text color for better visibility
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          transition: 'opacity 0.2s ease-in-out', // Smooth opacity change on hover
          opacity: isHovered ? 1 : 0.7, // Adjust opacity for hover effect
        }}
      >
        
        <p>{description}</p> {/* Description inside the description container */}
      </div>
      <div style={{ padding: '8px', textAlign: 'center' }}>

        {label}  {/* Label outside conditional styles */} 
      </div> 
      </div>
  );
};