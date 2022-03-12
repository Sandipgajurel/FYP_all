import * as  React from 'react';
import { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TextField, Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function SignUpForm() {

 const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

async function signup(){
  let item ={name,email,password}
  console.log(item)

let result = await fetch("http://localhost:3001/register",{
  method:"POST",
  body:JSON.stringify(item),
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
  }
})
result = await result.json()
// alert("User has been added sucessfully");
}
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
        <Typography component="div" style={{ backgroundColor: '#d7d9db', height: '95vh' }} >

        <form type="submit"  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}} >
     
     <div className ="form-inner">
       <h2 style={{paddingTop:"40px"}} > Signup</h2>< br/>
       
       <div className ="form-group">
         <label htmlFor="name">Name</label> < br />
         <TextField  variant="outlined" type="text" value={name} onChange={(e)=>setName(e.target.value)} required  />
         
          
</div>
<br />
<div className ="form-group" style={{paddingBottom:"10px"}} >
         <label htmlFor="email">Email</label><br />
         <TextField    variant="outlined" type="email"   value={email} onChange={(e)=>setEmail(e.target.value)} required />
         
</div> 
<div className ="form-group" style={{paddingBottom:"10px"}}>
         <label htmlFor="Password">Password</label><br />
         <TextField variant="outlined"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  required />
</div>
<div >
  
<FormControlLabel
          //value="end"
          control={<Checkbox color="primary" />}
          label="I aggree to term of service and policy"
          labelPlacement="end"
        />
</div>
<Button type='submit' variant="outlined" color="primary" style={{float:"left"}} onClick={signup}>
  Sign Up
</Button>
     </div>
   </form >
   </Typography>
      </Container>
    </React.Fragment>
  );
}
