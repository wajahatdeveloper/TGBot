import { createTheme, ThemeOptions } from '@mui/material/styles';

const telegramUITheme = createTheme({
  palette: {
    mode: 'dark', // Dark mode
    background: {
      default: '#1e1e1e', // Main background color
      paper: '#2a2a2a',   // Paper/card background color
    },
    primary: {
      main: '#0088cc', // Telegram blue
    },
    secondary: {
      main: '#4caf50', // Telegram green for accents
    },
    text: {
      primary: '#ffffff', // White text for primary text
      secondary: '#b0b0b0', // Muted text
    },
    divider: '#333333', // Divider color
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Default font family
    h1: {
      fontSize: '2rem',
      color: '#ffffff',
    },
    h2: {
      fontSize: '1.75rem',
      color: '#ffffff',
    },
    
    body1: {
      fontSize: '1rem',
      color: '#ffffff',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#b0b0b0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for all buttons
          textTransform: 'none', // Remove uppercase transformation
          padding: '12px 16px', // Standard padding for buttons
          fontSize: '0.9rem', // Adjusted font size
          boxShadow: 'none', // Remove default shadow
          position: 'relative', // Required for pseudo-element
          overflow: 'hidden', // Prevent visual overflow
          color: '#ffffff',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add hover shadow
          },
          '&:active': {
            textShadow: '0 0 10px #5e5cfd, 0 0 20px #5e5cfd, 0 0 30px #5e5cfd', // Neon text glow
            animation: 'textGlow 2s ease-out', // Glow animation
          },
        },
        contained: {
          backgroundColor: '#5e5cfd', // Default background for contained buttons
          color: '#ffffff', // White text
          '&:hover': {
            backgroundColor: '#0077b3', // Slightly darker blue on hover
          },
        },
        outlined: {
          borderColor: '#4caf50', // Green border for outlined buttons
          color: '#4caf50', // Green text
          '&:hover': {
            borderColor: '#43a047', // Darker green border on hover
            backgroundColor: 'rgba(76, 175, 80, 0.1)', // Light green background on hover
          },
        },
        text: {
          color: '#b0b0b0', // Default text button color
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light hover background
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#272a2f', // Darker cards
          borderRadius: '8px',
          boxShadow: 'none',
          padding: '12px',
          boarder:'8px solid #2f3442'
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#202020', // Dark app bar color
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#2a2a2a', // Darker drawer background
          color: '#ffffff',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Default white text for all typography
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #333333', // Divider at the bottom of Tabs

        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#4c504f', // Default color for icon and text
          '&.Mui-selected': {
            color: '#fdffff', // Color when selected
            backgroundColor: '#1b1e23', // Active tab background color
            // border:'1px solid white',
            marginRight:'2px'
          },
          '& .MuiTab-icon': {
            color: '#4c504f', // Default icon color
            margin:'2px 0',

          },
          '&.Mui-selected .MuiTab-icon': {
            color: '#fdffff', // Selected icon color
          },
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          color: '#fff', // Ripple color for tabs
          animationDuration: '1000ms',
        },
      },
    },
  },
});

export default telegramUITheme;
