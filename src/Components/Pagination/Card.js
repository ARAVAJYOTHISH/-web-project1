import React from 'react'
import { Box, Button, Typography, CardMedia, CardContent, CardActions,Card,Rating } from "@mui/material";
import CurrencyRupee from'@mui/icons-material/CurrencyRupee';



function ProductCard() {

   
  return (
    
    
     <Box sx={{mt:10,color:'#0a521eee',}}>
        <Typography variant='h4'sx={{ml:2}}>Shopping Styles</Typography>
     <Box sx={{
      width:'100%', 
      mt:1,
      display:'flex',
      backgroundSize:'contain',
      gap:4,
      flexWrap:'wrap',
      bgcolor:'#eeee',
      p:3,

      }}>
               {/*Card1 */}
               <Card  sx={{height:'81vh' ,ml:1}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61GtS6IrR7L._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{fontWeight:'bold',opacity:'0.8'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1499</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 40%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.5</Typography>
                    <Rating defaultValue={4.5} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

               {/*Card2 */}
              <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/51yn92oL9fL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5' sx={{fontWeight:'bold',opacity:'0.8'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         999
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             2999</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 75%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>3.5</Typography>
                    <Rating defaultValue={3.5} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>
               
               {/*Card3 */}
               <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/81I4F9xgijL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{fontWeight:'bold',opacity:'0.8'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         499
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             999</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 50%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.0</Typography>
                    <Rating defaultValue={4.0} ></Rating>
                </CardActions>
                
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

               {/*Card4 */}
               <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61Ll6MbqDML._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         999
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1499</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 25%</Typography>
                         </Typography>
                </CardContent>
                 <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.5</Typography>
                    <Rating defaultValue={4.5} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

               
                 {/*Card5 */}
                <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61AsTpnqgjL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                     <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             999</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 20%</Typography>
                         </Typography>
                </CardContent>
                 <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>5.0</Typography>
                    <Rating defaultValue={5.0} ></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card6 */}

               <Card  sx={{height:'81vh',ml:1}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61xXImTCydL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1799</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 60%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>3.0</Typography>
                    <Rating defaultValue={3.0} ></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card7 */}
                
                <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61t3t-xruVL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1599</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 50%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.2</Typography>
                    <Rating defaultValue={4.2} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card8 */}

               <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/71kE75JMKjL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                     <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1499</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 40%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.0</Typography>
                    <Rating defaultValue={4.0} ></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card9 */}

               <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/51BY8aczgWL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1099</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 35%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.1</Typography>
                    <Rating defaultValue={4.1} precision={0.5}></Rating>
                </CardActions>
                
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card10 */}

                <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/514LkDBfLhL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         399
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             999</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 60%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>3.5</Typography>
                    <Rating defaultValue={3.5} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card11 */}

                <Card  sx={{height:'81vh',ml:1}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61rDp+s9DkL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual pants designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1499</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 40%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.0</Typography>
                    <Rating defaultValue={4.0} ></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card12 */}

                <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/71EqqfXr8jL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual pants designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         599
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1499</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 65%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.2</Typography>
                    <Rating defaultValue={4.2} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card13 */}

                <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61u5oAftaeL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual pants designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         499
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1499</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 85%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.5</Typography>
                    <Rating defaultValue={4.5} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card14 */}


                <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/615xtmWrSCL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1499</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 40%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.0</Typography>
                    <Rating defaultValue={4.0} ></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card15 */}
                <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61dFcpPdJkL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual pants designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         899
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1499</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 30%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.5</Typography>
                    <Rating defaultValue={4.5} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

               {/*Card16 */}
                <Card  sx={{height:'81vh',ml:1}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/611BvxR3U6L._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             999</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 20%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.3</Typography>
                    <Rating defaultValue={4.3} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                 {/*Card17 */}
                <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61j9jJhrStL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual pants designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         999
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             2999</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 70%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.4</Typography>
                    <Rating defaultValue={4.4} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                 {/*Card18 */}
                <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61e-IDzoZoL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual shirt designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1999</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 80%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.5</Typography>
                    <Rating defaultValue={4.5} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card19 */}

                <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/61Q+oTHo0EL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual pants designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         799
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             1499</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 40%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.1</Typography>
                    <Rating defaultValue={4.1} precision={0.5}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

                {/*Card20 */}

               <Card  sx={{height:'81vh'}}>
                 <CardMedia
                sx={{width:'255px', height:'360px'}}
                image='https://m.media-amazon.com/images/I/815gdBdQIOL._AC_UL480_FMwebp_QL65_.jpg'>

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'sx={{opacity:'0.8', fontWeight:'bold'}}>GRECIILOOKS</Typography>
                    <Typography variant='body1'sx={{mb:1}}>Stylish casual pants designed <br/> for everyday comfort..</Typography>
                    <Typography sx={{fontWeight:'bold',display:'flex',alignItems:'center'}}>
                        <CurrencyRupee sx={{ fontSize:'20px'}}/>
                         1999
                         <Typography  sx={{ml:1,fontWeight:'bold',alignItems:'center',display:'flex',opacity:'0.6',textDecoration:'line-through'}}>
                             <CurrencyRupee sx={{ fontSize:'20px',opacity:'0.6'}}/>
                             3999</Typography>
                             <Typography sx={{ml:1,fontWeight:'bold',color:'green',}}>
                                Offer 50%</Typography>
                         </Typography>
                </CardContent>
                <CardActions >
                    <Typography sx={{fontWeight:'bold',ml:1}}>4.8</Typography>
                    <Rating defaultValue={4.8} precision={0.2}></Rating>
                </CardActions>
                <CardActions>
                    <Button sx={{width:'200px',bgcolor:'orange','&:hover':{bgcolor:'#ffeb3b',color:'white'},mt:'1',ml:2}}>Add to Cart</Button>
                </CardActions>
               </Card>

               
        </Box>

    </Box>
  )
}

export default ProductCard;