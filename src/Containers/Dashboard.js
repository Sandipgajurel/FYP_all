import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cardimage from "./Card";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import dbimg from '../img/9.jpg';
import Header from "./Nav";
import BackToTopButton from "./ScrollTop";

function Dashboard() {
  const [count, setCount] = useState("");
  const [products, setProducts] = useState("");
  const [user, setUser] = useState("");
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/ProductAdd`;
    navigate(path);
  };
  const logout = () => {
    //window.location.reload(true)
    navigate(`/`);
  };

  const getorder = (req, res, next) => {
    axios
      .get("http://localhost:3001/getorder")
      .then((response) => {
        setCount(response.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getproduct = () => {
    axios
      .get("http://localhost:3001/getproduct")

      .then((response) => {
        setProducts(response.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getuser = () => {
    axios
      .get("http://localhost:3001/getusers")

      .then((response) => {
        setUser(response.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getorder();
    getproduct();
    getuser();
  }, []);

  return (
    <div>
      <div style={{ position: "fixed", width: "100%", zIndex: "1000" }}>
       <Header />
      </div>

      <div style={{ display: "flex", flexDirection: "row"}}>
        <div
          className="col-md-10"
          style={{
            paddingTop:'100px',
            width: "100%",
            paddingBottom: "100px",
            background: `rgb(0,0,80)`,
            background: `linear-gradient(90deg, rgba(0,0,80,1) 0%, rgba(50,32,32,1) 100%)`,
          }}
        >
          <div>
          {/* <img src={dbimg} alt="*" style={{ width: '100%', height: 'auto' }} /> */}
          <h1 style={{ fontStyle: "italic", color: "white" }}>
            ADMIN DASHBOARD
          </h1>
          </div>
      
          <div style={{ display: "flex",marginBottom: "80px",
                  marginTop: "40px",
          flexWrap:'wrap', 
          flexDirection: "row" ,justifyContent:'center'}}>
            <div>
              <Card
                className="shadow-md m2 p3 rounded"
                style={{
                  marginBottom: "40px",
                  marginTop: "15px",
                  marginLeft: "70px",
                  minWidth: "300px",
                  background: `rgb(97,97,107)`,
                  background: `linear-gradient(90deg, rgba(97,97,107,1) 0%, rgba(87,87,96,1) 100%)`,
                }}
              >
                <CardActionArea style={{ alignItems: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <h1
                      // style={{
                      //   fontWeight: "bold",
                      //   backgroundColor: "white",
                      //   fontStyle: "italic",
                      //   color: "black",
                      //   paddingTop: "10px",
                      //   paddingBottom: "10px",
                      // }}

                      style={{
          backgroundImage: `linear-gradient(to right, #200122 0%, #6f0000  51%, #200122  100%)`,
          margin: `10px`,
          padding:` 15px 45px`,
          textAlign: 'center',
          textTransform: 'uppercase',
          transition: '0.5s',
          backgroundSize: '200% auto',
          color: 'white',            
          boxShadow: '0 0 5px #eee',
          borderRadius: '10px',
          display: 'block',
          backgroundPosition: "right center",
          textDecoration: 'none'
                      }}
                    >
                      {count}
                    </h1>
                    <h2 style={{ fontStyle: "italic", color: "whitesmoke" }}>
                      Total Orders
                    </h2>
                  </div>
                </CardActionArea>
              </Card>
            </div>
         

            <div>
              <Card
                className="shadow-md m2 p3 rounded"
                style={{
                  marginBottom: "40px",
                  marginTop: "15px",
                  marginLeft: "70px",
                  minWidth: "300px",
                  background: `rgb(97,97,107)`,
                  background: `linear-gradient(90deg, rgba(97,97,107,1) 0%, rgba(87,87,96,1) 100%)`,
                }}
              >
                <CardActionArea style={{ alignItems: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <h1
                      style={{
                      
          backgroundImage: `linear-gradient(to right, #200122 0%, #6f0000  51%, #200122  100%)`,
          margin: `10px`,
          padding:` 15px 45px`,
          textAlign: 'center',
          textTransform: 'uppercase',
          transition: '0.5s',
          backgroundSize: '200% auto',
          color: 'white',            
          boxShadow: '0 0 5px #eee',
          borderRadius: '10px',
          display: 'block',
          backgroundPosition: "right center",
          textDecoration: 'none'
                      }}
                    >
                      {products}
                    </h1>
                    <h2 style={{ fontStyle: "italic", color: "whitesmoke" }}>
                      Total Products
                    </h2>
                  </div>
                </CardActionArea>
              </Card>
            </div>

            <div>
              <Card
                className="shadow-md m2 p3 rounded"
                style={{
                  marginBottom: "40px",
                  marginTop: "15px",
                  marginLeft: "70px",
                  minWidth: "300px",
                  background: `rgb(97,97,107)`,
                  background: `linear-gradient(90deg, rgba(97,97,107,1) 0%, rgba(87,87,96,1) 100%)`,
                }}
              >
                <CardActionArea style={{ alignItems: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <h1
                      style={{
                        
          backgroundImage: `linear-gradient(to right, #200122 0%, #6f0000  51%, #200122  100%)`,
          margin: `10px`,
          padding:` 15px 45px`,
          textAlign: 'center',
          textTransform: 'uppercase',
          transition: '0.5s',
          backgroundSize: '200% auto',
          color: 'white',            
          boxShadow: '0 0 5px #eee',
          borderRadius: '10px',
          display: 'block',
          backgroundPosition: "right center",
          textDecoration: 'none'
                      }}
                    >
                      {user}
                    </h1>
                    <h2 style={{ fontStyle: "italic", color: "whitesmoke" }}>
                      Total Users
                    </h2>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </div>
          <Cardimage />
        </div>
      </div>
<BackToTopButton />
      {/* <button type="button" class="btn btn-primary" onClick={routeChange}>Add products</button> */}
      <div style={{ position: "static", bottom: "0", width: "100%", justifyContent:'center' }}>
        <Footer />
      </div>
    </div>
  );
}
export default Dashboard;
