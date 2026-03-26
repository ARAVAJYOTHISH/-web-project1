import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography, } from '@mui/material';
import React from 'react'

import Image1 from '../../Assets/image21.jpg';
import Image2 from '../../Assets/image12.jpg';
import Image3 from '../../Assets/image23.jpg';
import Image4 from '../../Assets/image24.jpg';
import Image5 from '../../Assets/image15.jpg';
import Image6 from '../../Assets/image26.jpg';
import Image7 from '../../Assets/image27.jpg';
import Image8 from '../../Assets/image18.jpg';
import Image9 from '../../Assets/image29.jpg';
import Image10 from '../../Assets/image30.jpg';
import Image11 from '../../Assets/image11.jpg';
import Image12 from '../../Assets/image22.jpg';
import Image13 from '../../Assets/image3.jpg';
import Image14 from '../../Assets/image14.jpg';
import Image15 from '../../Assets/image25.jpg';
import Image16 from '../../Assets/image13.jpg';
import Image17 from '../../Assets/image1.jpg';
import Image18 from '../../Assets/image28.jpg';
import Image19 from '../../Assets/image19.jpg';
import Image20 from '../../Assets/image7.jpg';

import { CurrencyRupee,  } from '@mui/icons-material';

const Imgs = [
  {image:Image1, 
    title:'Stylish casual shirt designed',
    continue:'for everyday comfort..',
    rate:'599',
    actualprice:'999',
    offer:'40%',
  defaultrating:4.4,
  precision:0.25
   },

  {image:Image2,
    title:'Stylish casual pant designed',
    continue:' for everyday comfort..',
    rate:'899',
    actualprice:'999',
    offer:'10%',
    defaultrating:4.5,
   precision:0.5},

  {image:Image3,
    title:'Stylish casual shirt designed',
     continue:' for everyday comfort..',
     rate:'999',
     actualprice:'1999',
     offer:'50%',
     defaultrating:4.1,
     precision:0.25
   },

  {image:Image4,
    title:'Stylish casual shirt designed',
    continue:' for everyday comfort..',
    rate:'1799',
    actualprice:'2999',
    offer:'30%',
  defaultrating:4.7,
  precision:0.5},

  {image:Image5,
    title:'Stylish casual pant designed',
    continue:' for everyday comfort..',
    rate:'599',
    actualprice:'999',
    offer:'30%',
  defaultrating:4.8,
  precision:0.5
 },

  {image:Image6,
    title:'Stylish casual shirt designed',
    continue:' for everyday comfort..',
    rate:'2499',
    actualprice:'2999',
    offer:'25%',
  defaultrating:4.3,
  precision:0.25},

  {image:Image7,
    title:'Stylish casual shirt designed',
    continue:' for everyday comfort..',
    rate:'1599',
    actualprice:'1999',
    offer:'20%',
  defaultrating:4.6,
  precision:0.5},

  {image:Image8,
    title:'Stylish casual pant designed',
    continue:' for everyday comfort..',
    rate:'1999',
    actualprice:'2999',
    offer:'30%',
  defaultrating:4.5,
  precision:0.5},

  {image:Image9,
    title:'Stylish casual shirt designed',
    continue:' for everyday comfort..',
    rate:'1599',
    actualprice:'1999',
    offer:'15%',
  defaultrating:4.1,
  precision:0.25},

  {image:Image10,
     title:'Stylish casual shirt designed',
      continue:' for everyday comfort..',
      rate:'699',
      actualprice:'999',
      offer:'20%',
    defaultrating:4.4,
  precision:0.5},

  {image:Image11, 
    title:'Stylish casual pant designed',
     continue:' for everyday comfort..',
     rate:'1999',
     actualprice:'4999',
     offer:'50%',
    defaultrating:4.5,
  precision:0.5},

  {image:Image12,
     title:'Stylish casual shirt designed',
      continue:' for everyday comfort..',
      rate:'1499',
      actualprice:'4999',
      offer:'80%',
    defaultrating:4.8,
  precision:0.5},

  {image:Image13,
     title:'Stylish casual pant designed',
      continue:' for everyday comfort..',
      rate:'999',
      actualprice:'1499',
      offer:'35%',
    defaultrating:4.7,
  precision:0.5},

  {image:Image14,
     title:'Stylish casual pant designed',
      continue:' for everyday comfort..',
      rate:'1499',
      actualprice:'2999',
      offer:'50%',
    defaultrating:4.9,
    precision:0.5
 },

  {image:Image15, 
    title:'Stylish casual shirt designed', 
    continue:' for everyday comfort..',
    rate:'2999',
    actualprice:'4999',
    offer:'25%',
  defaultrating:4.6,
  precision:0.5},

  {image:Image16, 
    title:'Stylish casual pant designed', 
    continue:' for everyday comfort..',
    rate:'1999',
    actualprice:'4999',
    offer:'50%',
  defaultrating:4.8,
  precision:0.5},

  {image:Image17, 
    title:'Stylish casual pant designed', 
    continue:' for everyday comfort..',
    rate:'1999',
    actualprice:'5999',
    offer:'60%',
  defaultrating:4.5,
  precision:0.5},

  {image:Image18, 
    title:'Stylish casual shirt designed', 
    continue:' for everyday comfort..',
    rate:'1199',
    actualprice:'1999',
    offer:'40%',
  defaultrating:4.2,
  precision:0.25},

  {image:Image19, 
    title:'Stylish casual pant designed', 
    continue:' for everyday comfort..',
    rate:'799',
    actualprice:'999',
    offer:'10%',
  defaultrating:4.4,
  precision:0.5},

  {image:Image20, 
    title:'Stylish casual shirt designed', 
    continue:' for everyday comfort..',
    rate:'899',
    actualprice:'1999',
    offer:'60%',
  defaultrating:4.7,
  precision:0.25},
  

]



// const Imgs=[Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12,Image13,Image14,Image15,Image16,Image17,Image18,Image19,Image20]
function Card3() {
  return (
    <Box sx={{width:'100%',bgcolor:'#eeee'}} >
      <Grid container spacing={4} p={3} ml={1}>
         {Imgs.map((img,index)=>(
        <Grid item xs={12} sm={6} md={4} key={index}>
         
            <Card sx={{height:'81vh'}}>
                <CardMedia
              sx={{width:'255px', height:'360px'}}
              image={img.image}
              component='img'
              
              >

              </CardMedia>
              {/* <IconButton sx={{position:'relative',bottom:355,left:105,bgcolor:'#f5f5f5', color:'#e3dedeee'}}><Favorite/></IconButton> */}
              <CardContent>
                <Typography variant='h5'sx={{fontWeight:'bold',opacity:'0.8'}}>LUVI'S</Typography>
                <Typography variant='body1'>{img.title}</Typography>
                <Typography variant='body1'>{img.continue}</Typography>

                <Typography sx={{display:'flex',fontWeight:'bold',mt:1}}><CurrencyRupee sx={{fontSize:'20px'}}/>
                {img.rate}
                <Typography sx={{display:'flex',justifyContent:'center',opacity:'0.6',textDecoration:'line-through',pl:1,fontWeight:'bold'}}><CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/> {img.actualprice}</Typography>
                <Typography sx={{color:'green',display:'flex',justifyContent:'center',pl:1,fontWeight:'bold'}}>Offer {img.offer}</Typography></Typography>
              </CardContent>
              <CardActions>
                <Typography sx={{display:'flex',justifyContent:'center',fontWeight:'bold',ml:2}}>{img.defaultrating}</Typography>
                <Rating value={img.defaultrating} precision={img.precision || 0.5}readOnly></Rating>
                
              </CardActions>
              <CardActions>
                <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
              </CardActions>
            </Card>
        </Grid>
      ))}

      </Grid>
    </Box>
  )
}



export default Card3;