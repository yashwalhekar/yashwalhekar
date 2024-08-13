

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";

import MyAppBar from "./components/Day7/MyAppBar"; // Updated import

const theme = createTheme({
  //ithe coustomize break points create kelet
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
//ithe cards sathi ek array ghetlay
const cards = [
  { title: "Card 1", image: "https://picsum.photos/200" },
  { title: "Card 2", image: "https://picsum.photos/202" },
  { title: "Card 3", image: "https://picsum.photos/203" },
  { title: "Card 4", image: "https://picsum.photos/204" },
  { title: "Card 5", image: "https://picsum.photos/205" },
  { title: "Card 6", image: "https://picsum.photos/206" },
];

function MediaQueryMui() {
  //ithe useMedia get query use kelay he ek reactHook ahe ani yamadhe theme.breakpoint hi ek query add kelia basically he query chya based vr css change krt page cha.
  //ani ithe breakpoints pn use kelet te break points usemediaquery madhe as a query pass kelet.

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); //ithe variables ghetlet means jr tuzya page chi width small asel tyasathi
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md")); //ha variable tuzya screen chi size small and medium chya mdhe asel tyasathi
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); //ani ha variable jeva screen chi size large asel

  //ya initial value ahe tuzya grid colomn chi means eka line mdhe kiti cards disle pahije tyasathi
  let gridColumns = 1; 

  //ani ha initial backgraound color ahe
  let backgroundColor = "#ffffff"; 

  if (isSmallScreen) {
    //ithe condition check keliaa suppose tuzya screen chi size small asel tr
    gridColumns = 1; //grid colomn chi value 1 asel
    backgroundColor = "#FFCDD2"; // ani background color ha asel
  } else if (isMediumScreen) {
    //ithe condition check keliaa suppose tuzya screen chi size medium asel tr
    gridColumns = 2; //grid colomn chi value 2 asel
    backgroundColor = "#BBDEFB"; // ani background color ha asel
  } else if (isLargeScreen) {
    //ani same ithe
    gridColumns = 4;
    backgroundColor = "#C8E6C9";
  } else {
    // else mdhe suppose tuzya screen chi size lg md sm sodun dusri konti asel tr
    gridColumns = 3; //grid column chi size 3 asel
    backgroundColor = "#FFF9C4"; //ani background color ha asel
  }
  //grid coloumn mhanje tuzya eka  row madhe horrizontally kiti cards display hotil
  return (
    <Stack sx={{py:4, backgroundColor }}>
      <Grid container spacing={4} sx={{p:4}}>
        {cards.map(
          (
            card,
            index // ithe cards cha array map kelayy
          ) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={12 / gridColumns}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 160 }}
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Stack>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* ithe app bar ha adhichach ghetlay */}
      <MyAppBar />
      <MediaQueryMui />
    </ThemeProvider>
  );
}

export default App;
