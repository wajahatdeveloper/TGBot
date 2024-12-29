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
          borderRadius: '8px', // Rounded corners (Telegram style)
          textTransform: 'none',
          padding: '6px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333', // Darker cards
          borderRadius: '8px',
          boxShadow: 'none',
          padding: '12px',
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
  },
});

export default telegramUITheme;
