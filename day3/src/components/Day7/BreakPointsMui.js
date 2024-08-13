import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // Extra small devices
      sm: 600,    // Small devices (like tablets)
      md: 960,    // Medium devices (like small laptops)
      lg: 1280,   // Large devices (like laptops)
      xl: 1920,   // Extra large devices (like desktops)
      xxl: 2560,  // Custom extra-extra large devices
    },
  },
});

const BreakPointsMui = ()=> {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div>
      {isSmallScreen && <p>This is a small screen</p>}
      {isLargeScreen && <p>This is a large screen</p>}
      {!isSmallScreen && !isLargeScreen && <p>This is a medium screen</p>}
    </div>
  );
}

export default BreakPointsMui
