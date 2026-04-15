import React, { useState,} from 'react'
import { Box,Button,Table,TableBody,TableCell,TableHead,TableRow,Typography, } from '@mui/material';


function Cart({selectedItem}) {

  // const [cartItems, setCartItems] = useState([]);

  // // Load cart items from localStorage when page loads
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   // Ensure each item has a quantity
  //   const itemsWithQuantity = items.map(item => ({ ...item, quantity: item.quantity || 1 }));
  //   setCartItems(itemsWithQuantity);
  // }, []);

  // const handleIncrease = (index) => {
  //   const newCart = [...cartItems];
  //   newCart[index].quantity += 1;
  //   setCartItems(newCart);
  //   localStorage.setItem('cartItems', JSON.stringify(newCart));
  // };

  // const handleDecrease = (index) => {
  //   const newCart = [...cartItems];
  //   if (newCart[index].quantity > 1) {
  //     newCart[index].quantity -= 1;
  //     setCartItems(newCart);
  //     localStorage.setItem('cartItems', JSON.stringify(newCart));
  //   }
  // };

  const [quantity, setQuantity] = useState(1);

  const price = Number(1000);
  const total = price * quantity;

 const handleIncrease = ()=>{
    setQuantity(quantity + 1);
  }

  const handleDecrease = () =>{
    if (quantity > 1){
      setQuantity(quantity - 1);
  }}



  return (
   <Box
   sx={{
    width:'100%',
    height:'100vh',

   }}>
    <Typography variant='h4' sx={{fontWeight:'bold', color:'green'}}>Shopping Cart</Typography>
       
    <Table container sx={{width:'1000px',borber:'2px'}}>
        <TableHead >
           <TableRow>
            <TableCell>Product Details</TableCell>
            <TableCell align='center'sx={{mr:65}}>Quantity</TableCell>
            <TableCell >Price</TableCell>
            <TableCell>Total</TableCell>
           </TableRow>
           </TableHead>

           <TableBody>
    
                <TableCell> {selectedItem ? selectedItem.title : 'No Data'}</TableCell>
                <TableCell align='center'>
                <Box  sx={{ display: "flex", alignItems: "center", gap:1,justifyContent:'center',borderRadius:1,p:1, }}>
                  <Button onClick={()=> handleDecrease} sx={{bgcolor:'#eeee',fontSize:'20px',fontWeight:'bold',}}>-</Button>
                  <Typography sx={{p:2}}>{quantity}</Typography>
                  <Button onClick={()=>handleIncrease} sx={{bgcolor:'#eeee',fontSize:'20px',fontWeight:'bold'}} >+</Button>
                </Box>
                </TableCell>
                <TableCell>₹{price}</TableCell>
                <TableCell>₹{total}</TableCell>
             
           </TableBody>
         
    </Table>
   </Box>
  )
}

export default Cart;