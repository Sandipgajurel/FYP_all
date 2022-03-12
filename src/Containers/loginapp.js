import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./Login";
import { useNavigate } from 'react-router-dom';

function LoginApp  () {
const adminUser = {
  email:"admin@admin.com",
  password:"sandip123"
}
let navigate = useNavigate(); 
const routeChange = () =>{ 
  let path = `/ProductAdd`; 
  navigate(path);
}

const [user, setUser] = useState({email: ""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);

  if (details.email == adminUser.email && details.password == adminUser.password)
  
{console.log("logged in");
routeChange();
setUser({
  email: details.email
});
}else {
//console.log("details doesnot match!")
setError("details doesnot match!")
}
}

const Logout = details =>{
  setUser({ email: ""});
}
   return(
    <div className ="App">
{(user.email !="")?(
  <div className="Welcome">
     
    
    <button onClick ={Logout}>Logout</button>
    </div>
) :(<LoginForm Login={Login} error={error}/>)
}
</div>  
   )
  
} 
export default LoginApp
