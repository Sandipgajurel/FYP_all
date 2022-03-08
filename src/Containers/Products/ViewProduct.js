import React from 'react';
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap';

export default function ProductView() {
 
const [products, setProducts] = useState([])



// const apiURL = "http://localhost:3001/getproduct";

// const fetchData = async () =>{
//   const response = await axios.get(apiURL)
//   setProducts(response.data)
//   console.log(response);

useEffect(() =>{
  axios
  .get('http://localhost:3001/getproduct')
  // .then(response => {
  //   return response.json()
  // })
  .then(response =>{
    console.log(response)
    setProducts(response.data)
  })
  .catch(err =>{
    console.log(err)
  })
}, [])
// }
//   return (
//     <div>
//       {/* <div>
//  <button className="fetch-button" onClick={fetchData}>
//             Fetch Data
//           </button>
//           </div> */}
// <div className='products'>
// {/* <ul>
//    <div className='product'>
//      <Table>
//        <thead>
//       <tr>
        
//         <th>Product Name</th>
//         <th>Description</th>
//         <th>Type</th>
//         <th>price</th>
//         <th>Image</th>
//       </tr>
//       </thead> */}
//     <ul>
//       {productget.map(product =>(
//         <>
//         <li key={product.productId}>{product.name}</li>
//         <li key={product.productId}>{product.description}</li>
//         <li key={product.productId}>{product.price}</li>
//        <li key={product.productId}> {product.type}</li>
//         <li key={product.productId}>{product.image}</li>
//         </>
//         ))}
//         </ul>
//      {/* </Table>
//      </div>


//      </ul> */}
// </div>
//     </div>
//   );

return(
  <div>
      { products.map(product => (
      
          
      <li key={product.products.productId}>{product.products.name}</li>
      
      ))}
  
  </div>
)
}
