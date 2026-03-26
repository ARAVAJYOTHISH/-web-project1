import React, { useState } from 'react'
import { TextField,Box,Paper, InputAdornment,Typography, IconButton, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visilibity from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

function SignUp() {
    const[email, setEmail] =useState('')
    const[password, setPassword] = useState('')
    const[cpassword, setcPassword] = useState('')
    const [showPassword,setShowPassword]=useState(false);


    const handleSignUp =()=>{
        if(!email || !password || !cpassword){
            alert("Fill the Details");
            return;
        }
        if (password !== cpassword){
            alert("Password Mismatch");
            return;
        }
        localStorage.setItem('useremail',email)
        localStorage.setItem('userpassword',password)
        alert('successfully signup done')
    }
  return (
    <Box sx={{
        width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        bgcolor:'#f5f5f5',
    }}>
        <Paper elevation = {4}
        sx={{
            display:'flex',
            position:'absolute',
            textAlign:'center',
            p:4,
            gap:4,
            flexDirection:'column',
            width:350,
            mt:'140px'
            
            }}>

                <Typography variant='h4' sx={{fontWeight:'bold',opacity:'0.8'}}>SignUp</Typography>

                <TextField
                placeholder='Enter your Name'
                label='User Name'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position='start'>
                        <AccountCircleIcon/>
                        </InputAdornment>
                    )
                }}></TextField>

                <TextField
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter your Email'
                label='Email'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position='start'>
                        <EmailIcon/>
                        </InputAdornment>
                    ),
                }}>

                </TextField>

                <TextField
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Enter password'
                label='Password'
                type={showPassword ? 'text ':'password'}>
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position='end'>
                            <IconButton onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOff/>:<Visilibity/>}
                            </IconButton>
                            </InputAdornment>
                        )
                    }}
                </TextField>

                
                
                <TextField
                onChange={(e)=>setcPassword(e.target.value)}
                placeholder='Enter Confirmpassword'
                label='Password'
                type={showPassword ? 'text ':'password'}>
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position='end'>
                            <IconButton onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOff/>:<Visilibity/>}
                            </IconButton>
                            </InputAdornment>
                        )
                    }}
                </TextField>

                <Button
                onClick={handleSignUp}
                sx={{
                    p:1,
                    backgroundColor:'#64b5f6',
                    color:'black',
                    '&:hover':{backgroundColor:'#2196f3',color:'white'},
                    tansition:'2s ease',
                    fontWeight:'bold',
                }} >Sign In</Button>

                <Typography sx={{float:'end'}}><Link to ="/Login">Back</Link></Typography>


        </Paper>
    </Box>
  )
}

export default SignUp;