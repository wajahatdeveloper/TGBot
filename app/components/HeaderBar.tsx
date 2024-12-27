import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface HeaderBarProps {
  userId: string;
  coins: number;
  onAvatarClick: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ userId, coins, onAvatarClick }) => {
  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ top: 0, zIndex: 1000 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left side: Title */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Challenges & Achievements
        </Typography>

        {/* Right side: Coins, Avatar, and Notifications */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
            {coins}
          </Typography>
          <Avatar
            alt="User Avatar"
            src={`/user-avatars/${userId}.jpg`}
            onClick={onAvatarClick}
            sx={{ cursor: 'pointer' }}
          />
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;