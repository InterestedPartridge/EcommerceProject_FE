
// export default function Navbar(){
//     return (
//         <div>
//         <nav class="navbar navbar-expand-lg navbar-light prodbtn p-3">
//    <a class="navbar-brand text-light tx" href="/products">E-COMMERCE</a>
//    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//      <span class="navbar-toggler-icon"></span>
//    </button>
//    <div class="collapse navbar-collapse" id="navbarNavDropdown">
//      <ul class="navbar-nav ms-auto justify-content-center">
//      <li class="nav-item active">
//          <a class="nav-link nvl " href="/products">Home</a>
//        </li>
     
//        <li class="nav-item">
//          <a class="nav-link nvl" href="/products">Products</a>
//        </li>
//        <li class="nav-item">
//          <a class="nav-link nvl" href="/categories">Categories</a>
//        </li>
//        <li class="nav-item">
//          <a class="nav-link nvl" href="/about">About</a>
//        </li>
//        <li class="nav-item">
//        <a class="nav-link nvl" href="/logout">Logout</a>
//        </li>
      
//      </ul>
//    </div>
//  </nav>
//  </div>
//     )
// }


import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light prodbtn p-3">
      <a className="navbar-brand text-light tx" href="/products">E-COMMERCE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto justify-content-center">
          <li className="nav-item">
            <a className="nav-link nvl" href="/products">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nvl" href="/products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nvl" href="/categories">Categories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nvl" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nvl" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
