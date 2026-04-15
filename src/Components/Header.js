import React, { useRef, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Avatar, InputAdornment, List, ListItem, ListItemButton, Drawer, ListItemText, ListItemIcon, Menu, MenuItem, Box, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.jpg'
import { FavoriteBorder } from '@mui/icons-material';

function Header() {

  const [anchorEl, setAnchorEl] = useState(null)
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeMenu, setActiveMenu] = React.useState(null);
  const sectionRef = useRef(null)

const theme = useTheme()
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

const handleOpen = (event, menuName) => {
  setAnchorEl(event.currentTarget);
  setActiveMenu(menuName);
};

const handleClose = () => {
  setAnchorEl(null);
  setActiveMenu(null);
};

  const toggleDrawer = (state) => {
    setOpenDrawer(state);
  };

const menuPosition = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  transformOrigin: { vertical: 'top', horizontal: 'center' },
};

  return (
    <div>
      <AppBar sx={{bgcolor:'#000',}}>
        <Toolbar>

          {/* Logo */}
          <Box sx={{display:'flex', textAlign:'center',gap:1.5, cursor:'pointer'}}>
           
           <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
          onClick={()=>toggleDrawer(true)}
           src={Logo}
           alt="Logo"
           style={{ height: 50,width:60 }}
      />
      <Typography sx={{flexGrow: 1,textAlign: 'center', fontFamily: 'monotype corsiva', fontSize:{xs:'26px',sm:'30px'},fontWeight:'bold',}}>
              <span style={{color:'blue'}}>Buy</span><span style={{color: 'orange'}}>zaar</span>
            </Typography>
      </Box>


          </Box>
      {/* <LocalShipping sx={{ fontSize: '40px', color: 'skyblue' }} /> */}


          {/* Drawer */}
          <Drawer open={openDrawer} onClose={()=>toggleDrawer(false)} >
            <List sx={{width:200,height:'800px',bgcolor:'#000'}}>
              <ListItem disablePadding onClick={()=> toggleDrawer(false)} sx={{color:'white', '&:hover':{bgcolor:'#eeeeee4e'}}}>
                <ListItemButton>
                  <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZnF8ElwCzCgHGTNVnaElToLnw3zE4AgEVQ&s' sx={{mr:2}}></Avatar>
                  <ListItemText primary='Account'></ListItemText>
                </ListItemButton>

              </ListItem >
              <ListItem disablePadding onClick={()=> toggleDrawer(false)} sx={{color:'white','&:hover':{bgcolor:'#eeeeee4e'}}}>
                <ListItemButton >
                  <ListItemIcon><AccountCircleIcon sx={{color:'blue'}}/></ListItemIcon>
                  <ListItemText primary='My Profile'></ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding >
                <ListItemButton component={RouterLink} to = '/Login' sx={{textDecoration:'none',color:'white','&:hover':{bgcolor:'#eeeeee4e'}}}>
                  <ListItemIcon ><ShoppingBagIcon sx={{color:'orange'}} /></ListItemIcon>
                  <ListItemText primary='My Orders'></ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding onClick={()=>toggleDrawer(false)} sx={{color:'white','&:hover':{bgcolor:'#eeeeee4e'}}}>
                <ListItemButton>
                  <ListItemIcon><ShoppingCartIcon sx={{color:'yellow'}}/></ListItemIcon>
                  <ListItemText primary='Cart'></ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding onClick={()=> toggleDrawer(false)} sx={{color:'white','&:hover':{bgcolor:'#eeeeee4e'}}}>
                <ListItemButton>
                  <ListItemIcon><SettingsIcon sx={{color:'white'}}/></ListItemIcon>
                  <ListItemText primary='Settings'></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>

  
         <Typography sx={{flexGrow: 1,textAlign: 'center', fontFamily: 'monotype corsiva', fontSize:{xs:'26px',sm:'30px'},fontWeight:'bold',}}>
              <span style={{color:'blue'}}>Buy</span><span style={{color: 'orange'}}>zaar</span>
            </Typography>

          {/* Search Bar */}
          <TextField
            size='small'
            placeholder='Search Products..'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon sx={{color:'#888',}} />
                </InputAdornment>
              )
            }}
             sx={{
    width:isMobile?'100%': 400,
    mt: isMobile ? 1 : 0,
    ml: isMobile ? 0 : 2,
    flexGrow: isMobile ? 1 : 0,

    /* Input box */
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white",   
      borderRadius: "25px",       
      paddingLeft: 1,

      "& fieldset": {
        border: "none",          
      },

    },

    /* Text color */
    "& .MuiInputBase-input": {
      color: "#000",
      fontFamily:'monotype corsiva',
      fontWeight:'bold',
    },

    /* Placeholder */
    "& .MuiInputBase-input::placeholder": {
      color: "#888",
      opacity: 1,
    },
  }}
          />

          {/* Nav Buttons */}
          {!isMobile && (
            <Box sx={{display:'flex', textAlign:'center',gap:2,ml:'auto'}}>
            <Button color='inherit' sx={{ml:1, fontSize: '20px',fontWeight:'bold',p:2,'&:hover':{color:'orange',bgcolor:'#eeeeee2c'} }} component={Link}
  to="/Home" >HOME</Button>

      <Button color='inherit' 
      onClick={() => window.scrollTo({
      behavior: 'smooth',
      top:"0px"
     
    })
  } sx={{ ml: 4, fontSize: '20px',fontWeight:'bold',p:2,
  '&:hover':{color:'#ef690aee',bgcolor:'#eeeeee2c'}  }}>Categories</Button>
         
          <Button color='inherit' sx={{ fontSize: '20px',fontWeight:'bold',p:2,'&:hover':{color:'#ef690aee',bgcolor:'#eeeeee2c'} }} component={Link} to='/Login'>LOGIN</Button>
          <Avatar sx={{bgcolor:'orange',mt:1.5}}>AJ</Avatar>
            </Box>
          )}

        </Toolbar >
      </AppBar>

    <Box ref={sectionRef} sx={{mt:'75px', justifyContent:'center',height:55, display:'flex', gap:2,
    }}>
        
    <Button
   variant="outlined"
  sx={{
    borderRadius: '6px',
    textTransform: 'none',
    borderColor: '#d0d0d0',
    height: 45,
    width: 120,
    p: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  }}
  onMouseEnter={(e) => handleOpen(e, 'shirts')}
>
  
    <Box
      component="img"
      src="https://m.media-amazon.com/images/I/816ezH-3KwL._AC_UY1100_.jpg"
      sx={{
        maxWidth:'35%',
        maxHeight: '100%',
        objectFit: 'contain',
        borderRadius: '6px 0 0 6px',
        m:0
      }}
    />
 

  <Box
    sx={{
      width: '50%',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 500,
    }}
  >
    Shirts
  </Box>
</Button>

<Menu
          {...menuPosition}
          anchorEl={anchorEl}
          open={activeMenu === 'shirts'}
          onClose={handleClose}
          MenuListProps={{
           
      onMouseLeave: handleClose,
          }}>
            <MenuItem onClick={handleClose}>Plane Shirts</MenuItem>
            <MenuItem onClick={handleClose}>Printed Shirts</MenuItem>
            <MenuItem onClick={handleClose}>Branded Shirts</MenuItem>
            <MenuItem onClick={handleClose}>Stylish Shirts</MenuItem>
          </Menu>


          <Button
   variant="outlined"
  sx={{
    borderRadius: '6px',
    textTransform: 'none',
    borderColor: '#d0d0d0',
    height: 45,
    width: 120,
    p: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  }}
  onMouseEnter={(e) => handleOpen(e, 'T-shirts')}
>
  
    <Box
      component="img"
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZwxJhD6vgak2gkw5WcT4_KGMZJQL14WR1g&s'
      sx={{
        maxWidth:'35%',
        maxHeight: '100%',
        objectFit: 'contain',
        borderRadius: '6px 0 0 6px',
        m:0
      }}
    />
 

  <Box
    sx={{
      width: '50%',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 500,
    }}
  >
    T- Shirts
  </Box>
</Button>

          <Menu
          {...menuPosition}
          anchorEl={anchorEl}
          open={activeMenu === 'T-shirts'}
          onClose={handleClose}
          MenuListProps={{
           
      onMouseLeave: handleClose,
          }}>
            <MenuItem onClick={handleClose}>Plane T-Shirts</MenuItem>
            <MenuItem onClick={handleClose}>Printed T-Shirts</MenuItem>
            <MenuItem onClick={handleClose}>Branded T-Shirts</MenuItem>
            <MenuItem onClick={handleClose}>Sports T-Shirts</MenuItem>
          </Menu>

          <Button
   variant="outlined"
  sx={{
    borderRadius: '6px',
    textTransform: 'none',
    borderColor: '#d0d0d0',
    height: 45,
    width: 120,
    p: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  }}
  onMouseEnter={(e) => handleOpen(e, 'pants')}
>
  
    <Box
      component="img"
      src='https://cdn.media.amplience.net/s/hottopic/20662629_hi?$productMainDesktop$&fmt=auto'
      sx={{
        maxWidth:'35%',
        maxHeight: '100%',
        objectFit: 'contain',
        borderRadius: '6px 0 0 6px',
        m:0
      }}
    />
 

  <Box
    sx={{
      width: '50%',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 500,
    }}
  >
    Pants
  </Box>
</Button>
            
          <Menu
          {...menuPosition}
          anchorEl={anchorEl}
          open={activeMenu === 'pants'}
          onClose={handleClose}
          MenuListProps={{
           
      onMouseLeave: handleClose,
          }}>
            <MenuItem onClick={handleClose}>Plane Pants</MenuItem>
            <MenuItem onClick={handleClose}>Stylish Pants</MenuItem>
            <MenuItem onClick={handleClose}>Baggy Pants</MenuItem>
            <MenuItem onClick={handleClose}>Jeans pants</MenuItem>
            <MenuItem onClick={handleClose}>Cotton Pants</MenuItem>
          </Menu>


          <Button
   variant="outlined"
  sx={{
    borderRadius: '6px',
    textTransform: 'none',
    borderColor: '#d0d0d0',
    height: 45,
    width: 120,
    p: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  }}
  onMouseEnter={(e) => handleOpen(e, 'brands')}
>
  
    <Box
      component="img"
      src='https://i.pinimg.com/564x/77/af/7b/77af7b475e48b49b71d8e629847f4275.jpg'
      sx={{
        maxWidth:'35%',
        maxHeight: '100%',
        objectFit: 'contain',
        borderRadius: '6px 0 0 6px',
        m:0
      }}
    />
 

  <Box
    sx={{
      width: '50%',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 500,
    }}
  >
    Brands
  </Box>
</Button>

          <Menu
          {...menuPosition}
          anchorEl={anchorEl}
          open={activeMenu === 'brands'}
          onClose={handleClose}
          MenuListProps={{
           
      onMouseLeave: handleClose,
          }}
         >  <Box sx={{display:"flex",px:"4"}}>
            <Box sx={{display:"flex",flexDirection:"column"}}>
            <MenuItem sx={{fontWeight:'bold',color:'green'}} onClick={handleClose}>T-Shirts</MenuItem>
            <MenuItem onClick={handleClose}>Nike</MenuItem>
            <MenuItem onClick={handleClose}>Puma</MenuItem>
            <MenuItem onClick={handleClose}>Addidas</MenuItem>
            </Box>
             <Box sx={{display:"flex",flexDirection:"column"}}>
            <MenuItem sx={{fontWeight:'bold',color:'green'}} onClick={handleClose}>Shirts</MenuItem>
            <MenuItem onClick={handleClose}>Levi's</MenuItem>
            <MenuItem onClick={handleClose}>Puma</MenuItem>
            <MenuItem onClick={handleClose}>GRECIILOOKS</MenuItem>
            </Box>
             <Box sx={{display:"flex",flexDirection:"column"}}>
            <MenuItem sx={{fontWeight:'bold',color:'green'}} onClick={handleClose}>Pants</MenuItem>
            <MenuItem onClick={handleClose}>Levi's</MenuItem>
            <MenuItem onClick={handleClose}>Puma</MenuItem>
            <MenuItem onClick={handleClose}>GRECIILOOKS</MenuItem>
            </Box>
            </Box>
          </Menu>
        
        <Tooltip title='Yours Favorites' placement='top'>
          <FavoriteBorder sx={{ color:'black',display:'flex',pt:1.5}}/>
        </Tooltip>

      </Box>

    </div>
    
  )
}

export default Header;
