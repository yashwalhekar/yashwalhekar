import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    IconButton,   
    Stack, 
    Button, 
    Typography,    
    useMediaQuery,
    Menu,
    MenuItem,
} from "@mui/material"; 
import DvrIcon from '@mui/icons-material/Dvr';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function MyAppBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="secondary"> 
      <Toolbar> 
        <IconButton size="large" edge="start" color="inherit" aria-label="logo"> 
          <DvrIcon />   
        </IconButton> 
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}> 
          Coditude 
        </Typography> 

        {isSmallScreen ? (
          <>
            <IconButton 
              size="large" 
              edge="end" 
              color="inherit" 
              aria-label="menu" 
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>Log in</MenuItem>
              <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
              <MenuItem onClick={handleMenuClose}>Policy</MenuItem>
            </Menu>
          </>
        ) : (
          <Stack direction="row" spacing={2}> 
            <Button color="inherit">Home</Button> 
            <Button color="inherit">Log in</Button> 
            <Button color="inherit">About Us</Button> 
            <Button color="inherit">Policy</Button> 
          </Stack>
        )}
      </Toolbar> 
    </AppBar> 
  );
}

export default MyAppBar;
