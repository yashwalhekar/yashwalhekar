import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CreateIcon from '@mui/icons-material/Create';

const CardMui = () => {
  return (
    <Paper variant="outlined"square={false} sx={{p:4}}>
      <Grid item xs={8} sm={6} md={4} lg={3} xl={2}>
        <Box
          justifyContent="center"
          sx={{ 
            p: 2, 
            borderBottom: "2px solid transparent", 
            borderColor: "rgba(0, 0, 0, 0.1)" // Semi-transparent border color
          }}
         
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography
              variant="h6"
              color="red"
              sx={{ fontWeight: "bold" }}
            >
              Personal Information
            </Typography>
            <CreateIcon/>
          </Stack>
        </Box>
      </Grid>
      <Grid container p={2}>
        <Grid item xs={4} sm={6} md={4} lg={3} xl={2}>
          <Box>
            <Typography
              variant="inherit"
              color="black"
              sx={{ fontWeight: "bold" }}
            >
              First Name
            </Typography>
            <Typography
              variant="inherit"
              color="text.secondary"
            >
              Sachin
            </Typography>

            <Typography
              variant="inherit"
              color="black"
              sx={{ fontWeight: "bold" }}
              mt={2}
            >
             Mobile Number
            </Typography>
            <Typography
              variant="inherit"
              color="text.secondary"
            >
              +91-8698828048
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sm={6} md={4} lg={3} xl={2}>
          <Box>
            <Typography
              variant="inherit"
              color="black"
              sx={{ fontWeight: "bold" }}
            >
              Last Name
            </Typography>
            <Typography
              variant="inherit"
              color="text.secondary"
            >
              Tendulkar
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={4} sm={6} md={4} lg={3} xl={2}>
          <Box>
            <Typography
              variant="inherit"
              color="black"
              sx={{ fontWeight: "bold" }}
            >
              Email
            </Typography>
            <Typography
              variant="inherit"
              color="text.secondary"
            >
              tendulkar@example.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardMui;
