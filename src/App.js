import {
    BrowserRouter as Router,
    Route,
    Routes,
    Redirect
  } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css'
  import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from 'react';
import './style.css'
import REGISTERATION from './components/REGISTERATION';
import LOGIN from './components/LOGIN';
import Home from './components/HOME';
import PRODUCT, { AddProd, DeleteProd, GetProdById, GetProdByName, ListAllProd, UpdateProdById, UpdateProdByName } from './components/PRODUCT';
import About from './components/ABOUT';
import CATEGORIES, { AddCategory, DeleteCategory, GetCategoryById, GetCategoryByName, ListAllCategory, UpdateCategoryById, UpdateCategoryByName } from './components/CATEGORIES';
import { useState } from 'react';
import { isLoggedIn, getUserRole, getUserName } from './components/AuthService'
import User from './components/User';
import Navbar from './components/Navbar';


export default function App(){
  
   
    return (
    
      
        
     

     <div>

          <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registeration" element={<REGISTERATION />} />
            <Route path="/login" element={<LOGIN />} />
            <Route path="/about" element={<About />} />
            

           
            <Route path="/products" element={
              isLoggedIn()?(getUserRole()==='ROLE_ADMIN' ?<PRODUCT role={getUserRole()} />:<User username={getUserName()} role={getUserRole()} />):(<Home />)
            }/> 
            
           
           
           
            <Route path="/categories" element={isLoggedIn() ?<CATEGORIES />:<Home />} />
            <Route  path="/addproduct" element={isLoggedIn() && getUserRole()==='ROLE_ADMIN'? ( <AddProd /> ):<Home />} />
            <Route path="/listallproduct" element={isLoggedIn()?<ListAllProd role={getUserRole()} username={getUserName() }/>:<Home />} />
            <Route path="/getprodbyid" element={isLoggedIn()?<GetProdById role={getUserRole()} username={getUserName() }/>:<Home />} />
            <Route path="/getprodbyname" element={isLoggedIn()?<GetProdByName role={getUserRole()} username={getUserName() }/>:<Home />} />
            <Route path="/updatebyid" element={isLoggedIn() && getUserRole()==='ROLE_ADMIN'?<UpdateProdById />:<Home />} />
            <Route path="/updatebyname" element={isLoggedIn() && getUserRole()==='ROLE_ADMIN'?<UpdateProdByName />:<Home />} />
            <Route path="/deleteproduct" element={isLoggedIn() && getUserRole()==='ROLE_ADMIN'?<DeleteCategory />:<Home />} />
            <Route path="/addcategory" element={isLoggedIn() && getUserRole()==='ROLE_ADMIN'?<AddCategory />:<Home />} />
            <Route path="/listallcategory" element={isLoggedIn()?<ListAllCategory role={getUserRole()} username={getUserName() } />:<Home /> } />
            <Route path="/getbyid" element={isLoggedIn()?<GetCategoryById role={getUserRole()} username={getUserName() }/>:<Home />} />
            <Route path="/getbyname" element={isLoggedIn()?<GetCategoryByName role={getUserRole()} username={getUserName() }/>:<Home />} />
            <Route path="/updatecatbyid" element={isLoggedIn() && getUserRole()==='ROLE_ADMIN'?<UpdateCategoryById />:<Home />} />
            <Route path="/updatecatbyname" element={isLoggedIn() && getUserRole()==='ROLE_ADMIN'?<UpdateCategoryByName />:<Home />} />
          
            <Route path="/logout" element={<Home />} />
            

           

           
            

            </Routes>
        </Router>

        
        </div>

        
     

    );
  }