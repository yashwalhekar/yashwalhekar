import React from 'react' 
import { 
    AppBar, 
    Toolbar, 
    IconButton,   
    Stack, 
    Button, 
    Typography,    
} from "@mui/material"; 

import DvrIcon from '@mui/icons-material/Dvr';
 
const MyAppbarMui = () => { 
    return ( 
        <AppBar position="static" color="secondary"> 
            <Toolbar> 
                <IconButton size="large" edge="start" color="inherit" aria-label="logo"> 
                 <DvrIcon/>   
                </IconButton> 
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}> 
                    Coditude 
                </Typography> 
                <Stack direction="row" spacing={2}> 
                    <Button color="inherit">Home</Button> 
                    <Button color="inherit">Log in</Button> 
                    <Button color="inherit">About Us</Button> 
                    <Button color="inherit">Policy</Button> 
                </Stack> 
            </Toolbar> 
            {/* this component add padding to left and right side to the navbar */} 
        </AppBar> 
    ) 
} 
 
export default MyAppbarMui