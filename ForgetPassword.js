
import { Box, TextField } from '@mui/material';
import React from 'react'

function ForgetPassword() {
  return (
    <Box
    sx={{width:'100%',
      Height:'100vh',
      display:'flex',
      justifyContent:'center',

    }}>
      <Box sx={{
        width:350,
        position:'absolute',
        flexDirection:'column',

      }}>
        <TextField></TextField>

      </Box>

    </Box>
  )
}

export default ForgetPassword;



// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
//   Button,
//   Box,
//   Typography
// } from "@mui/material";

// function Cart() {
//   const { state } = useLocation();   // <-- receiving data
//   const [quantity, setQuantity] = useState(1);

//   if (!state) {
//     return <Typography>No item in cart</Typography>;
//   }

//   const price = state.price;
//   const total = price * quantity;

//   const handleIncrease = () => {
//     setQuantity(q => q + 1);
//   };

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity(q => q - 1);
//     }
//   };

//   return (
//     <Table>
//       <TableBody>
//         <TableRow>
//           {/* Product Name */}
//           <TableCell>{state.title}</TableCell>

//           {/* Quantity Controls */}
//           <TableCell align="center">
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1,
//                 justifyContent: "center",
//                 borderRadius: 1,
//                 p: 1
//               }}
//             >
//               <Button
//                 onClick={handleDecrease}
//                 sx={{ bgcolor: "#eeee", fontSize: "20px", fontWeight: "bold" }}
//               >
//                 -
//               </Button>

//               <Typography sx={{ p: 2 }}>{quantity}</Typography>

//               <Button
//                 onClick={handleIncrease}
//                 sx={{ bgcolor: "#eeee", fontSize: "20px", fontWeight: "bold" }}
//               >
//                 +
//               </Button>
//             </Box>
//           </TableCell>

//           {/* Price */}
//           <TableCell>${price}</TableCell>

//           {/* Total */}
//           <TableCell>${total}</TableCell>
//         </TableRow>
//       </TableBody>
//     </Table>
//   );
// }

// export default Cart;