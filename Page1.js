import {  Box,  } from '@mui/material'
import React, { useState }  from 'react'
import p1 from './Card'
import p2 from './Card2'
import p3 from './Card3'


function Page1() {
    const Pages =[p1,p2,p3]
    const [currentPage, setCurrentPage]=useState(0);
    const Livepage= Pages[currentPage]
  //   const recordsPerPage= 2;
  //   const lastIndex = currentPage * recordsPerPage; /* 1*2=2  , 2*2=4 , 3*2=6 */
  //   const firstIndex = lastIndex - recordsPerPage;  /* 2-2=0 , 4-2=2, 6-2=4 */
  //   const records = Pages.slice(firstIndex,lastIndex);  /* (0,2),(2,4),(4,6) */
  //   const npage = Math.ceil(Pages.length / recordsPerPage)  /* 5/2 =2.5 =>3 */

  // const handleChange = (event, value) => {
  //   setCurrentPage(value)
  // }


  const handleChange= (index)=>{
    setCurrentPage(index)
  }

  return (
    <Box >
      <Box sx={{gap:2}}>
      {/* {records.map((images,index)=>(
        <Card>
          <CardMedia
          component='img'
          key={index}
          image={images}></CardMedia>
        </Card>
      ))} */}
<Livepage/>
{/* <Pagination sx={{display:'flex',justifyContent:'center'}} count={Pages.length}
        page={currentPage}
        onChange={handleChange} color='primary'></Pagination> */}
    </Box>

    <Box sx={{display:'flex',justifyContent:'center',gap:1}}>
      {Pages.map((_,index)=>(
        <Box
        
        key={index}
        onClick={()=>handleChange(index)}

        sx={{
          
        width:12,
        height:12,
        borderRadius:'50%',
        bgcolor:currentPage === index? 'black': 'gray',
        cursor:'pointer',
        textAlign:'center'

        }}/>

      
      ))}

    </Box>
    
    
    </Box>
  )
}

export default Page1;