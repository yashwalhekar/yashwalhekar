import React from 'react' 
import { Box , Card ,CardContent , Typography , CardActions , Button ,CardMedia } from '@mui/material' 
 
const CardsMui = () => { 
  return ( 
    <Box width="300px" mt={5} marginLeft={70}> 
        <Card> 
        <CardMedia component="img" height="140" image="https://appsierra-site.s3.ap-south-1.amazonaws.com/1_FD_Ne_KI_Ue_Unf0_Xdq_Hmi7nsw_909d51fc48.png" alt='unspash image' />   
        <CardContent> 
                <Typography gutterBottom variant='h3' component="div" textAlign="left">MUI</Typography> 
                <Typography gutterBottom variant='body2' color="text.secondary" component="div" textAlign="left">Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.</Typography> 
            </CardContent> 
            <CardActions> 
                <Button size='medium' variant='outlined'>Learn More</Button> 
                <Button size='medium' variant='contained'>Share</Button> 
            </CardActions> 
        </Card> 
       
    </Box> 
  ) 
} 
 
export default CardsMui