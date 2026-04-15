import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
// import {  Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
// import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';



import Banner1 from '../Assets/banner4.jpg';
import Banner2 from '../Assets/banner5.jpg';
import Banner3 from '../Assets/banner6.jpg';

const banners=[
  {id:1,image:Banner1,title: "Welcome to Your Shopping Haven", subtitle: "Discover Deals • Explore Trends • Shop Top Brands"},
  {id:2,image:Banner2 ,title:'Your Style Starts Here' , subtitle:'Hot Deals • New Collections • Trusted Quality'},
  {id:3,image:Banner3 ,title:'Find It. Love It. Buy It.' , subtitle:'Daily Deals • Trend Alerts • Brand Favorites'},
]

const Banner=()=>{
  const [Current,setCurrent] = useState(0);

useEffect(()=>{
  const timer = setInterval(()=>{
    setCurrent((prev)=>(prev+1)% banners.length);
  } ,4000);
  return ()=> clearInterval(timer);
},[]);



// const handlePrevious =() =>{
//   setCurrent((prev)=>(prev === 0 ? banners.length-1:prev-1));
// }


// const handleNext=()=>{
//   setCurrent((prev)=>(prev+1) % banners.length);
// }

// const theme =useTheme()
// const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


return(
  <Box 
  sx={{
    height:'400px',
    width:'100%',
    position:'relative',
    overflow:'hidden',
    
  }}>
    {banners.map((banner,index)=>(
      <Box
      key={banner.id}
      sx={{
        height:'400px',
        width:'100%',
        position:"absolute",
        top:0,
        left: `${(index - Current) * 100}%`,
        backgroundImage:`url(${banner.image})`,
        backgroundSize:'cover',
        backgroundPosition: "center",
        justifyContent: "flex-start", 
        alignItems: "center",
        display:'flex',
        borderRadius:'8px',
        
        
      }}>
         <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "center", sm: "flex-start" },
                      px:{xs:'2',sm:'5'},
                      color: "#cf670cff",
                      maxWidth: "600px",
                      textAlign: { xs: "center", sm: "left" },
                      objectFit:'cover',
                    }}
                  >
                    {/* <Typography   variant={isMobile ? "h5" : "h3"} sx={{ fontWeight: "bold", mb: 2 }}>
                      {banner.title}
                    </Typography>
                    <Typography  variant={isMobile ? "body1" : "h6"} sx={{ mb: 4 }}>
                      {banner.subtitle}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
        
                        fontSize: "1rem",
                        borderRadius: 3,
                        backgroundColor: "#9d7769ff",
                        "&:hover": { backgroundColor: "#5d4037" },
                      }}
                    >
                      Shop Now
                    </Button> */}
                  </Box>
        


        
      </Box>
    ))}

    {/* <IconButton onClick={handlePrevious}
    
    sx={{
      display:'absolute',
      top:'50%',
      left:'13px',
      '&:hover':{backgroundColor:"#cac3c3ff"},

      
    }}>
      <ArrowBackIos sx={{color:'#eeee'}} />
    </IconButton>

    <IconButton onClick={handleNext}
    sx={{
      display:'absolute',
       top:'50%',
      left:'1400px',
      "&:hover":{backgroundColor:'white'},


      
    }}>
      <ArrowForwardIos sx={{color:'#eeee'}}/>
    </IconButton> */}

  </Box>
);
};
export default Banner;
