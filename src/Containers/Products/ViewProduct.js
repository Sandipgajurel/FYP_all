import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Table } from 'react-bootstrap';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditProduct from './editProduct';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { TextField, Button } from '@material-ui/core';
import Cardimage from '../Card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductView = () => {
  const [products, setProducts] = useState([]);
  toast.configure();

  const getproduct = () => {
    axios
      .get('http://localhost:3001/getproduct')

      .then(response => {
        console.log(response)
        setProducts(response.data)

      })
      .catch(err => {
        console.log(err)
      })

  }


  useEffect(() => {
    getproduct();
  }, [])



  const id = products.map(datas => (datas.productId))
  const deleteProduct = () => {
    axios
      .delete(
        'http://localhost:3001/deleteproduct/' + id)
      .then((res) => {
        if (res.status === 200) {
          toast("product successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => toast("Something went wrong"));
  };
  return (
    <Container fluid>
      <Row>
        <div>
          <div className="card-header" style={{ textAlign: 'center', backgroundColor: "#b2bbbf" }}>
            <h3 className="card-title text-dark" >View Products</h3>
          </div>
          {/* <li >name:{result.products.name}</li>
      <li >description:{result.products.description}</li>
 */}
          <table className="table table-sm table-dark">
            <thead className='thead-dark'>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Type</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(data => (
                  <tr>
                    {/* <td key={data.productId} >{data.productId}</td> */}
                    <td key={data.productId} >{data.productId}</td>
                    <td key={data.name} >{data.name}</td>
                    <td key={data.description}>{data.description}</td>
                    <td key={data.price}>{data.price}</td>
                    <td key={data.type}>{data.type}</td>
                    <td key={data.image}>{data.image}</td>
                    <td>
                      <Link to={`/editProduct/${data.productId}`}>
                        <button type="button" title="Edit"
                          className="btn btn-icon btn-sm" style={{ color: "white" }}><i className="fa fa-edit"></i></button>
                      </Link>

                      <button type="button" title="Delete" data-type="confirm"
                        onClick={() => { deleteProduct() }}
                        style={{ color: "white" }} className="btn btn-icon btn-sm js-sweetalert" ><i><DeleteTwoToneIcon /></i></button>
                    </td>
                  </tr>

                )
                )
              }
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  )
}
export default ProductView;
