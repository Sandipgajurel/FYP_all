import React, { useState } from "react";
import LoginForm from "./Login";

function LoginApp  () {
const adminUser = {
  email:"admin@admin.com",
  password:"sandip123"
}

const [user, setUser] = useState({email: ""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);

  if (details.email == adminUser.email && details.password == adminUser.password)
{console.log("logged in");
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
    <h2>Welcome, <span>{user.email}</span></h2>
    <button onClick ={Logout}>Logout</button>
    </div>
) :(<LoginForm Login={Login} error={error}/>)
}
</div>  
   )
  
} 
export default LoginApp
