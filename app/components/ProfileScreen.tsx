import React from 'react';
import { Box, Typography, Avatar, LinearProgress, Button } from '@mui/material';

interface ProfileScreenProps {
  userId: string;
  dubaiProgress: number;
  sfProgress: number;
  badgesCount: number;
  coinsCount: number;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  userId,
  dubaiProgress,
  sfProgress,
  badgesCount,
  coinsCount,
}) => {
  return (
    <Box
    sx={{
      padding: "16px",
      paddingTop: "80px", // Prevent overlap with header
      overflowY: "scroll",
      maxHeight: "calc(100vh - 64px - 20px)", // Adjust for header height
      scrollbarWidth: "thin",
      WebkitOverflowScrolling: "touch",
    }}
      // sx={{
      //   padding: 2,
      //   overflowY: 'scroll',
      //   maxHeight: '100vh',
      //   scrollbarWidth: 'thin',
      //   WebkitOverflowScrolling: 'touch',
      // }}
    >
      {/* Profile Heading */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
        Profile
      </Typography>

      {/* Profile Overview */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Avatar
          alt="User Avatar"
          src={`/user-avatars/${userId}.jpg`}
          sx={{ width: 100, height: 100, margin: '0 auto' }}
        />
        <Typography variant="h6" sx={{ marginTop: 1 }}>
          Username
        </Typography>
        <Typography variant="body2">Customizable Header</Typography>
      </Box>

      {/* Milestone Tracker */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Milestone Tracker
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            Dubai: {Math.round(dubaiProgress * 100)}% Complete
          </Typography>
          <LinearProgress
            variant="determinate"
            value={dubaiProgress * 100}
            sx={{ height: 10, borderRadius: 4 }}
          />
        </Box>
        <Box>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            San Francisco: {Math.round(sfProgress * 100)}% Complete
          </Typography>
          <LinearProgress
            variant="determinate"
            value={sfProgress * 100}
            sx={{ height: 10, borderRadius: 4 }}
          />
        </Box>
      </Box>

      {/* Badges & Rewards */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Badges & Rewards
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: 2,
          }}
        >
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: 2,
              padding: 2,
              textAlign: 'center',
              backgroundColor: '#000',
              flex: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Badges
            </Typography>
            <Typography>{badgesCount}</Typography>
          </Box>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: 2,
              padding: 2,
              textAlign: 'center',
              backgroundColor: '#000',
              flex: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Coins
            </Typography>
            <Typography>{coinsCount}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Settings Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Settings & Preferences
        </Typography>
        <Typography>
          Manage notifications, wallet connections, and account preferences.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={() => console.log("Settings Button Clicked")}
        >
          Open Settings
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileScreen;
