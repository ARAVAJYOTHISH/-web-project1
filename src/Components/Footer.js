import React from 'react';
import {Box,Button,FormHelperText,Grid,List,ListItem,ListItemText,Typography, ToggleButton,ToggleButtonGroup} from '@mui/material';
import {Facebook, Instagram,  LinkedIn, Twitter, YouTube} from '@mui/icons-material';

const hoverItem = {
  cursor: 'pointer',
  p:0,
  '&:hover': {
    color: '#0a6f08ff',
    textDecoration: 'underline'
  }
};

function Footer() {
  return (
    <Box sx={{ bgcolor: '#120f0fee', color: 'white', p: 4 }}>
      <Grid container spacing={15}>

        {/* SHOP */}
        <Grid item xs={12} sm={6} md={3}>
          <Box >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffeb0fff','&:hover': { color: '#f90404ff',fontSize:'22px' }}}>
            SHOP
          </Typography>
          </Box>
          <List>
            <ListItem sx={hoverItem}>
              <ListItemText primary="By Category" />
            </ListItem>
            <ListItem sx={hoverItem}>
              <ListItemText primary="Shop Home" />
            </ListItem>
            <ListItem sx={hoverItem}>
              <ListItemText primary="Mens" />
            </ListItem>
            <ListItem sx={hoverItem}>
              <ListItemText primary="Classics" />
            </ListItem>
          </List>
        </Grid>

        {/* SUPPORT */}
        <Grid item xs={12} sm={6} md={3}>
          <Box >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffeb0fff','&:hover': { color: '#f90404ff' ,fontSize:'22px'} }}>
            SUPPORT
          </Typography>
          </Box>
          <List >
            <ListItem sx={hoverItem}>
              <ListItemText primary="Customer Care" />
            </ListItem>
            <ListItem sx={hoverItem}>
              <ListItemText primary="Order Status" />
            </ListItem>
          </List>
        </Grid>

        {/* CONTACT */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#ffeb0fff','&:hover': { color: '#f90404ff',fontSize:'22px' }}}>
            CONTACT
          </Typography>

          <Typography sx={{ fontWeight: 'bold','&:hover':{color:'green'} }}>Email</Typography>
          <Typography sx={{ mb: 1, color: '#3884baff' }}>shop@gmail.com</Typography>

          <Typography sx={{ fontWeight: 'bold','&:hover':{color:'green'} }}>Telephone</Typography>
          <Typography sx={{ mb: 1, color: '#3884baff' }}>+91 0996786787</Typography>

          <Typography sx={{ fontWeight: 'bold','&:hover':{color:'green'} }} >Address</Typography>
          <Typography sx={{opacity:'0.6'}}>
            Sunrise Apartments first <br />
            Main Road, southcoast,<br />
            Bengaluru - 560066 India.
          </Typography>
        </Grid>

        {/* STORE LOCATOR */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#ffeb0fff','&:hover': { color: '#f90404ff',fontSize:'22px' } }}>
            STORE LOCATOR
          </Typography>

          <FormHelperText sx={{ color:'#eeeeee72', mb: 1 }}>
            Find a store near you
          </FormHelperText>

          <Button
            sx={{
              width: '180px',
              bgcolor: '#eeeeee8d',
              color:'black',
              fontFamily:'cursive',
              '&:hover': {
                bgcolor: '#3a84ceee',
                color: 'white'
              }
            }}
          >
            FIND A STORE
          </Button>
        </Grid>

        {/* FOLLOW US */}
        <Grid item xs={12} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#ffeb0fff','&:hover': { color: '#f90404ff',fontSize:'22px' } }}>

            FOLLOW US
          </Typography>

          <ToggleButtonGroup exclusive>
            <ToggleButton sx={{ color: '#eeee' }}>
              <LinkedIn sx={{ '&:hover': { color: 'blue' } }} />
            </ToggleButton>
            <ToggleButton sx={{ color: '#eeee' }}>
              <Instagram sx={{ '&:hover': { color: '#f40267ee' } }} />
            </ToggleButton>
            <ToggleButton sx={{ color: '#eeee' }}>
              <Twitter sx={{ '&:hover': { color: '#7ddaffff' } }} />
            </ToggleButton>
            <ToggleButton sx={{ color: '#eeee' }}>
              <Facebook sx={{ '&:hover': { color: 'blue' } }} />
            </ToggleButton>
            <ToggleButton sx={{ color: '#eeee' }}>
              <YouTube sx={{ '&:hover': { color: '#f90404ff' } }} />
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Footer;












// import React from 'react'
// import { Box, Button, FormHelperText, List, ListItem, ListItemText, Typography ,ToggleButtonGroup,ToggleButton} from '@mui/material'
// import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

// function Footer() {
//   return (
//     <Box >


//         <List sx={{display:'flex',
//             flexDirection:'column',
//             width:'100%',
//             height:'350px',
//             bgcolor:'#120f0fee',
//             color:'white',
//             p:2}}>


//             <ListItemText sx={{display:'flex',flexDirection:'column',position:'absolute',left:'80px'}}>
//             <Typography variant='h6' sx={{fontWeight:'bold',mb:1, color:'#ffeb0fff'}}>SHOP</Typography>
//             <Typography sx={{cursor:'pointer', '&:hover':{color:'green',textDecoration:'underline'}}}>By Category</Typography>
//             <Typography sx={{cursor:'pointer', '&:hover':{color:'green',textDecoration:'underline'}}}>Shop Home</Typography>
//             <Typography sx={{cursor:'pointer', '&:hover':{color:'green',textDecoration:'underline'}}}>Mens</Typography>
//             <Typography sx={{cursor:'pointer', '&:hover':{color:'green',textDecoration:'underline'}}}>Classics</Typography>
//             </ListItemText>

       
//             <ListItemText sx={{display:'flex',flexDirection:'column',position:'absolute',right:'950px'}}>
//             <Typography variant='h6' sx={{fontWeight:'bold',mb:1,color:'#ffeb0fff'}}>SUPPORT</Typography>
//             <Typography sx={{cursor:'pointer', '&:hover':{color:'green',textDecoration:'underline'}}}>Customer care</Typography>
//             <Typography sx={{cursor:'pointer', '&:hover':{color:'green',textDecoration:'underline'}}}>Order Status</Typography>
//             </ListItemText>
       
          
//             <ListItem sx={{display:'flex',flexDirection:'column',position:'absolute',left:'150px'}}>
//             <Typography variant='h6' sx={{fontWeight:'bold',mb:1,color:'#ffeb0fff'}}>CONTACT</Typography>
//             <Typography sx={{fontWeight:'bold'}}>Email</Typography>
//             <Typography sx={{mb:1,color:'#3884baff'}}>shop@gamil.com</Typography>
//             <Typography sx={{fontWeight:'bold'}} >Telephone</Typography>
//             <Typography sx={{mb:1,color:'#3884baff'}}>+91 0996786787</Typography>
//             <Typography sx={{fontWeight:'bold'}}>Address</Typography>
//             <Typography> Sunrise Apartments first <br/> Main Road, southcoast,<br/> Bengaluru - 560066 India.</Typography>
//             </ListItem>

        
//         <ListItemText sx={{position:'absolute',left:'1200px'}}>
//         <Typography variant='h6' sx={{fontWeight:'bold',mb:1,color:'#ffeb0fff'}}>STORE LOCATOR</Typography>
//         <FormHelperText sx={{color:'white'}}>Find a store near you</FormHelperText>
//         <Button sx={{width:'180px',bgcolor:'#eeee','&:hover':{bgcolor:'#3a84ceee',color:'white'}}}>FIND A STORE</Button>

//         </ListItemText>
        
        
        

//         <ListItem sx={{position:'absolute',top:'160px',left:'530px',flexDirection:'column'}}>
//             <Typography variant='h6' sx={{fontWeight:'bold',mb:1,color:'#ffeb0fff'}}>FOLLOW US</Typography>
//             <ToggleButtonGroup exclusive>
//                 <ToggleButton sx={{color:'#eeee'}}><LinkedIn sx={{'&:hover':{color:'blue'}}}/></ToggleButton>
//                 <ToggleButton sx={{color:'#eeee'}}><Instagram sx={{'&:hover':{color:'#f40267ee'}}}/></ToggleButton>
//                 <ToggleButton sx={{color:'#eeee'}}><Twitter sx={{'&:hover':{color:'#7ddaffff'}}}/></ToggleButton>
//                 <ToggleButton sx={{color:'#eeee'}}><Facebook sx={{'&:hover':{color:'blue'}}}/></ToggleButton>
//                 <ToggleButton sx={{color:'#eeee'}}><YouTube sx={{'&:hover':{color:'#f90404ff'}}}/></ToggleButton>
//             </ToggleButtonGroup>
//             </ListItem>

//             </List>
        
//        {/* <Box>
//             <Typography>CONTACT US</Typography>
//         </Box>*/}

//     </Box>

    
//   )
// }

// export default Footer;