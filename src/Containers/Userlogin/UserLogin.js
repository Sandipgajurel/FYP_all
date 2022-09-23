// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router'
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import { Grid, TextField, Button, Input } from '@material-ui/core';
// import AppFoHomepage from '../Products/AppFoHomepage';
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export default function UserLogin({ }) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [user, setUser] = useState()
  
//   toast.configure()

//   const navigate = useNavigate();
//   const routetosignuop = () => {
//     let path = `/signup`;
//     navigate(path);
//   }
  
//   useEffect(() => {
//     const loggedInUser = localStorage.getItem('user-info');
//     if (loggedInUser) {
//       const foundUser = JSON.parse(loggedInUser)
//       setUser(foundUser);
//     }
//     // navigate('/userlogin')
//   }, [])

//   async function login(req, res, next) {
//     let item = { email, password }
//     //console.log(item)

//     let result = await fetch('http://localhost:3001/login', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify(item)
//     })
 
//     // .then((res) => {
//     //   if (res.status === 200) {
//     //     toast("login sucess");
//     //     navigate('/Dashboard')
//     //     //window.location.reload();
//     //   } else Promise.reject();
//     // })
//     // .catch((err) => toast("Something went wrong"));

//     result = await result.json();
//     //toast(res);
//     setUser(JSON.stringify(result.token))
//     localStorage.setItem("user", JSON.stringify(result.token))
//     localStorage.setItem("email", JSON.stringify(result.email))
  
//     // if (res.status === 200){
//     //   return toast('login sucess');
//     // } else {
//     // toast('something went wrong');
//     //   }


// }
//   if (user) {
//     return (  toast('login sucess'), 
//     <AppFoHomepage />
//     ) 
//   } 
//   // else{
//   //   toast('Invalid Credentials')
//   // }
//   return (
//     <div >
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm" style={{ paddingTop: "30px" }} >
//         <Typography component="div" style={{ backgroundColor: '#d7d9db', height: '90vh' }} >

//           <form type="submit" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }} >

//             <div className="form-inner">
//               <h2 style={{ textAlign: "center" }}>User Login</h2>< br />


//               <div className="form-control" style={{ backgroundColor: '#d7d9db' }}>
//                 <label htmlFor="email">Email</label><br />
//                 <Input onChange={(e) => setEmail(e.target.value)} variant="outlined" type="text" required />

//               </div>
//               <br />
//               <div className="form-control" style={{ backgroundColor: '#d7d9db' }}>
//                 <label htmlFor="Password">Password</label><br />
//                 <Input onChange={(e) => setPassword(e.target.value)} variant="outlined" type="password" required />

//               </div>
//               <br />
//               <Button onClick={login} variant="outlined" color="primary"  >
//                 login
//               </Button>
//             </div>
//           </form>
//           <br />
//           <br />
//           <h3 style={{ float: "right", marginRight: "10px" }}>Don't have account? <Button color='primary' onClick={routetosignuop} variant='outlined' >Sign up</Button></h3>

//         </Typography>
//       </Container>
//     </React.Fragment>
//     </div>
//   )
// }

//modified

import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button, Input } from '@material-ui/core';
import AppFoHomepage from '../Products/AppFoHomepage';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UserLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState()
  
  toast.configure()

  const navigate = useNavigate();
  const routetosignuop = () => {
    let path = `/signup`;
    navigate(path);
  }
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user-info');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser);
    }
  }, [])

  async function login( event, req, res, next) {
    event.preventDefault();
    let item = { email, password }
    let result = await fetch('http://localhost:3001/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    })
 
    //set token and user email in local storage
    result = await result.json();
    setUser(JSON.stringify(result.token))
    localStorage.setItem("user", JSON.stringify(result.token))
    localStorage.setItem("email", JSON.stringify(result.email))

    //show message from backend about incorrect email/password
    toast(result.message);

}
  return (
    <div >
      {user ? <AppFoHomepage /> :
    <React.Fragment>
       {/* {toast("please fill the value properly")} */}
      <CssBaseline />
      <Container maxWidth="sm" style={{ paddingTop: "30px" }} >
        <Typography component="div" style={{ backgroundColor: '#d7d9db', height: '90vh' }} >

          <form  onSubmit={login} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }} >

            <div className="form-inner">
              <h2 style={{ textAlign: "center" }}>User Login</h2>< br />


              <div className="form-control" style={{ backgroundColor: '#d7d9db' }}>
                <label htmlFor="email">Email</label><br />
                <Input onChange={(e) => setEmail(e.target.value)} variant="outlined" type="text" required />

              </div>
              <br />
              <div className="form-control" style={{ backgroundColor: '#d7d9db' }}>
                <label htmlFor="Password">Password</label><br />
                <Input onChange={(e) => setPassword(e.target.value)} variant="outlined" type="password" required />

              </div>
              <br />
              <Button variant="outlined" type="submit" color="primary"  >
                login
              </Button>
            </div>
          </form>
          <br />
          <br />
          <h3 style={{ float: "right", marginRight: "10px" }}>Don't have account? <Button color='primary' onClick={routetosignuop} variant='outlined' >Sign up</Button></h3>

        </Typography>
      </Container>
    </React.Fragment>
    }   
     </div>
  )
}
