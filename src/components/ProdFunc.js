// import React from 'react';
import { DeleteProd } from "./PRODUCT";

// export default function ProductFunc() {
//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-5">Product Management</h2>
//       <div className="button-container d-flex justify-content-between flex-wrap">
//         <a href="/addproduct" className="btn btn-primary btn-lg mb-3">Add Product</a>
//         <a href="/listallproduct" className="btn btn-secondary btn-lg mb-3">List All Products</a>
//         <a href="/getprodbyid" className="btn btn-info btn-lg mb-3">Get By ID</a>
//         <a href="/getprodbyname" className="btn btn-success btn-lg mb-3">Get By Name</a>
//         <a href="/updatebyid" className="btn btn-warning btn-lg mb-3">Update By ID</a>
//         <a href="/updatebyname" className="btn btn-danger btn-lg mb-3">Update By Name</a>
//       </div>
//       <div className="mt-4 d-flex justify-content-center">
//         <DeleteProd />
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function ProductFunc() {
  return (
    <div>
    <div className="container py-5">
      <h2 className="text-center mb-5">Product Management</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card h-100 bg-primary text-white text-center">
            <div className="card-body">
              <h5 className="card-title">Add Product</h5>
              <p className="card-text">Add a new product to the inventory.</p>
              <a href="/addproduct" className="btn btn-outline-light">Add Product</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-secondary text-white text-center">
            <div className="card-body">
              <h5 className="card-title">List All Products</h5>
              <p className="card-text">View all products in the inventory.</p>
              <a href="/listallproduct" className="btn btn-outline-light">List Products</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-info text-white text-center">
            <div className="card-body">
              <h5 className="card-title">Get By ID</h5>
              <p className="card-text">Find a product by its unique ID.</p>
              <a href="/getprodbyid" className="btn btn-outline-light">Get By ID</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-success text-white text-center">
            <div className="card-body">
              <h5 className="card-title">Get By Name</h5>
              <p className="card-text">Search for a product by its name.</p>
              <a href="/getprodbyname" className="btn btn-outline-light">Get By Name</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-warning text-dark text-center">
            <div className="card-body">
              <h5 className="card-title">Update By ID</h5>
              <p className="card-text">Update a product's information by ID.</p>
              <a href="/updatebyid" className="btn btn-outline-dark">Update By ID</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-danger text-white text-center">
            <div className="card-body">
              <h5 className="card-title">Update By Name</h5>
              <p className="card-text">Update a product's information by name.</p>
              <a href="/updatebyname" className="btn btn-outline-light">Update By Name</a>
            </div>
          </div>
        </div>
      </div>
      <DeleteProd />
    </div>
    
    </div>
  );
}
