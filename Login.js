import React, { useState } from 'react'
import{Box, Button, IconButton, InputAdornment, Paper, TextField, Typography, FormControlLabel,Checkbox} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';



function Login() {
    const[email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [showPassword, setShowPassword] =useState(false);


    const handleLogin = ()=>{
       const storeEmail= localStorage.getItem('useremail')
        const storePassword = localStorage.getItem('userpassword')

        if(email === storeEmail && password === storePassword){
            alert('Login Successfull')
        }
        else{
            alert('invalid Email or Password')
        }
    }
  return (
    <Box sx={{
        width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        bgcolor:'#eceff1',

    }}>
        <Paper elevation={4}
        sx={{
            display:'flex',
            position:'absolute',
            textAlign:'center',
            width:350,
            p:4,
            gap:4,
            mt:'155px',
            flexDirection:'column',
            '&:hover':{backgroundColor:'#fafafa'}}}>

                <Typography variant='h4'sx={{fontWeight:'bold',color:'gray',}}>Login</Typography>

            

                <TextField
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                label='Email'
                InputProps={{
                    startAdornment:(
                        <InputAdornment>
                        <EmailIcon sx={{mr:1}}/></InputAdornment>
                    )
                }}>

                </TextField>

                <TextField
                onChange={(e) => setPassword(e.target.value)}
                label='Password'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment:(
                        <InputAdornment position='end'>
                        <IconButton onClick={() => setShowPassword (!showPassword)}>
                        {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                        </IconButton>
                        </InputAdornment>
                    )
                }}>

                </TextField>

                <Typography sx={{textAlign:'right'}}><Link to='/' sx={{textDecoration:'none'}}>Forget Password</Link></Typography>

                <FormControlLabel control={<Checkbox defaultChecked ></Checkbox>} label='I agree to the terms and conditions.'></FormControlLabel>

                <Button
                onClick={handleLogin}
                 sx={{
                   backgroundColor:'#64b5f6',
                    color:'Black',
                    p:1,
                    fontWeight:'bold',
                    '&:hover':{backgroundColor:'#2196f3',color:'white'},
                    transition:'1s ease',
                    }}>
                    
                    LOGIN</Button>

                <Typography variant='body1'>Don't have an account? <Link to ="/SignUp">SignUp here</Link></Typography>

        </Paper>

    </Box>
  )
}

export default Login;