
import React from "react"
import { useState } from "react"
import { useEffect, startTransition } from 'react';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import {  ToastContainer,toast } from 'react-toastify';
import { Button, Modal } from 'react-bootstrap';
import { addProd,listProd,getProdById,getProdByName,updateProdById,updateProdByName,deleteProd,listCategory,getCategoryById,getCategoryByName,updateCategoryById,updatecategoryByName,deleteCategory } from "./SERVICES";
import Navbar from "./Navbar";
import NavbarUser from "./NavUsr";
import ProductFunc from "./ProdFunc";

export default function PRODUCT(props){
  
  const [prod,setprod] = useState([]);
  useEffect(() => {
    startTransition(() => {
        fetchData();
    });
  }, []);

  const fetchData = ()=>{
    listProd()
    .then(response =>{
      console.log(response);
      setprod(response.data);
    })
    .catch(error => {
      console.log(error);
  });
  }

 
  var url,imageUrl;


    return (
      <div>
 {props.role==='ROLE_ADMIN'?<Navbar />:null}

    
      
        <div className="">

      {props.role==='ROLE_ADMIN'?<ProductFunc />:null}
         
        <div className="justify-content-center row mt-2 ">
            <h3 className="text-center text-white p-3 ">Available Products</h3>
      
    {prod.map((p)=>(
       url = `https://source.unsplash.com/featured/?${encodeURIComponent(p.prodName)}` ,

      
       <div class="card cd">
      <div class="card-body">
      <img class="card-img-top" src={url} alt="Card image cap" width="250px" height="250px"/>
      <h5 class="card-title mt-2">ProdId: {p.prodId}</h5>

       <h5 class="card-title">ProdName: {p.prodName}</h5>
       <h6 class="card-subtitle mb-2 text-muted">Price: &#8377;{p.price}</h6>
       <p class="card-text">Category: {p.categoryName}</p>
       <p class="card-text">Description: {p.description}</p>
        
       
      </div>
       
</div>
       
    ))}
   


</div>
        </div>
        </div>
    )
}

//Add Product
export function AddProd(){
const [category,setcategory] = useState([]);


useEffect(() => {
  startTransition(() => {
      fetchData();
  });
}, []);

const fetchData = ()=>{
  listCategory()
  .then(response =>{
    console.log(response);
    setcategory(response.data);
  })
  .catch(error => {
    console.log(error);
});
}
  
const [formdata,setFormData] = useState({});
const [catname,setcatname] = useState({});
const handlesubmit = async (e) => {
    e.preventDefault();

    const cname = e.target[3].value;

    try{
      const response = await getCategoryByName(cname);
      console.log(response);
      console.log("aman")
      console.log(response.data)
      setcatname(response.data);
      
    }catch(error){
      console.log("error in fetching category: "+error);
    }
    let data = {
      prodName:e.target[0].value,
      price:e.target[1].value,
      description:e.target[2].value,
      category: {
        categoryId:catname.categoryId,
        categoryName:catname.categoryName,
        description:catname.description,
      },

    }
    console.log(data)

    try{
      const res = await addProd(data);
      console.log(res);
      setFormData(res.data);
      setTimeout(() => {
        
        window.location.replace('/products');
      }, 3000);
      
      toast("product added successfully...")
      // const navigate = useNavigate();
      // navigate("/products");
    }catch(error){
      console.log("error in adding product: "+error);
    }
}


  return (
    <div>
    <Navbar />
    <div className="container  p-3">
               <div className="row  justify-content-center">
                <h2 className="card text-center p-3">Add Product here.. </h2>
                <div className="col-md-6"> 
            <form  onSubmit={handlesubmit} className="">
                
                <span className=" text-light">ProdName:</span>  <input type="text" className="form-control" /> <br></br>
                
                <span className=" text-light">Price:</span> <input type="text" className="form-control "/> <br></br>
                <span className=" text-light">Description: </span>  <input type="text" className="form-control "/> <br></br>

                 <span className=" text-light"> CategoryName: </span>
                 <select className="form-control">
                  {category.map((cat)=>(
                    
              <option key={cat.categoryId} value={cat.categoryName}>
              {cat.categoryName}
            </option>
                  ))}
                 
                 </select>
                 <br></br>
                <button className="btn btn-light"
            type="submit"
         >
            Add Product
          </button>
          <ToastContainer />
            </form>
            </div>
            </div>
        </div>
        </div>
  )
}


//List All Product
export function ListAllProd(props){
  
  
  useEffect(() => {
    startTransition(() => {
        fetchData();
    });
  }, []);

  const [prods,setprods] = useState([]);
  
  const fetchData = ()=>{
    listProd()
    .then(response =>{
      console.log(response);
      console.log("allprod")
      setprods(response.data);
      
      
    })
     .catch(error => {
      console.log(error);
  });
  }

  return (
    <div>
     {props.role==='ROLE_ADMIN'?<Navbar />:<NavbarUser username={props.username}/>}
    
    <div className="container  p-3">
      
      <h2 className="card text-center p-3">List Of products </h2>
      <table className="table table-striped table-hover table-sm border border-dark mt-5 ">
    <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Price</th>
      <th>Description</th>
      <th>Category</th>
    </tr>
    </thead>
    <tbody>
    {prods.map((item) => (
                        <tr key={item.prodId}>
                            <td>{item.prodId}</td>
                            <td>{item.prodName}</td>
                            <td>{ item.price} </td>
                            <td>{item.description}</td>
                            <td>{item.categoryName}</td>
                            
                        </tr>
                    ))}
    </tbody>
      </table>
    </div>
    </div>
  )
}


//GetById
export function GetProdById(props){


  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [st,setst] = useState({})
  const getprodonsubmit=async (e)=>{
      e.preventDefault();
      let data={
          id:e.target[0].value
      }
  setFormData(data);
 try{
  const response =await getProdById(e.target[0].value,data);
console.log(response);

console.log(response.data);
setData(response.data);
setst(response.data.category)
console.log("pp");
console.log(response.data.category);

 }catch (error) {
  console.error('Error fetching data:', error.message);
  alert("id not exist")
}
  


  }

  return (
    <div>
  {props.role==='ROLE_ADMIN'?<Navbar />:<NavbarUser username={props.username}/>}
      
   
    <div className="container  p-3">
      <div className="row justify-content-center">

      <div className="col-md-6">
    <form onSubmit={getprodonsubmit}>
        <span className="text-light"> Enter id:</span>
        <input type="text" className="form-control "/>
        <button className="btn btn-light mt-2"
    type="submit"
 >
   GetProduct
  </button>
    </form>
    </div>
    </div>
    { data &&
      <div className="card mt-3">
      <p className="card-header">Product Name: {data.prodName}</p>
     <p className="card-header">  Product Price:  {data.price}</p>
     <p className="card-header"> Description:  {data.description}</p>
     <p className="card-header"> Category:  {st.categoryName}</p>
     </div>
    }
   
    
</div>
</div>
  )
}

//GetByName

export function GetProdByName(props){


  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);

  const getprodonsubmit=async (e)=>{
      e.preventDefault();
      let data={
          id:e.target[0].value
      }
  setFormData(data);
 try{
  const response =await getProdByName(e.target[0].value,data);
console.log(response);

setData(response.data);


 }catch (error) {
  console.error('Error fetching data:', error.message);
  alert("product with this name not exist")
}
  


  }

  return (
    <div>
        {props.role==='ROLE_ADMIN'?<Navbar />:<NavbarUser username={props.username}/>}

    
    <div className="container  p-3">
      <div className="row justify-content-center">

      <div className="col-md-6">
    <form onSubmit={getprodonsubmit}>
    <span className="text-light"> Enter Name:</span>
        <input type="text" className="form-control "/>
        <button className="btn btn-light mt-2"
    type="submit"
 >
   GetProduct
  </button>
    </form>
    </div>
    </div>
    { data &&
      <div className="card mt-3">
       <p className="card-header">Product Id: {data.prodId}</p>

       <p className="card-header">Product Name: {data.prodName}</p>
     <p className="card-header">  Product Price:  {data.price}</p>
     <p className="card-header"> Description:  {data.description}</p>
     </div>
    }
   
    
</div>
</div>
  )
}


//update by id
export function UpdateProdById(){

  const [category,setcategory] = useState([]);
  
//fetching all category for dropdown
  useEffect(() => {
    startTransition(() => {
        fetchData();
    });
  }, []);
  
  const fetchData = ()=>{
    listCategory()
    .then(response =>{
      console.log(response);
      setcategory(response.data);
    })
    .catch(error => {
      console.log(error);
  });
  }



  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [catname,setcatname] = useState({});
const submithandle = async (e)=>{
  e.preventDefault();

  const cname = e.target[4].value;

  try{
    const response = await getCategoryByName(cname);
    console.log(response);
    console.log("enter")
    setcatname(response.data);
    
  }catch(error){
    console.log("error in fetching category: "+error);
  }
  console.log("category")

  let data = {
    prodId:e.target[0].value,
    prodName:e.target[1].value,
    price:e.target[2].value,
    description:e.target[3].value,
    category: {
      categoryId:catname.categoryId,
      categoryName:catname.categoryName,
      description:catname.description,
    },
  }

  setFormData(data);

  try{
    const res = await updateProdById(data);
    console.log(res);
    setFormData(res.data);
    setTimeout(() => {
        
      window.location.replace('/products');
    }, 3000);
    toast("product updated successfully!")
    
    // const navigate = useNavigate();
    // navigate('/products')
  }catch(error){
    console.log("error in adding product: "+error);
  }
 
}


  const handlesubmit =async (e)=>{
      e.preventDefault();
      let data={
          id:e.target[0].value
      }
  setFormData(data);
 try{
  const response =await getProdById(e.target[0].value,data);
console.log(response);

setData(response.data);


 }catch (error) {
  console.error('Error fetching data:', error.message);
  alert("id not exist");
}


  
  }
  return (
    <div>
      <Navbar />
    
      <div className="container  p-3">
          <h3 className="text-center text-light"> enter product id which you want to update...</h3>
          <div className="row  justify-content-center">
              <div className="col-md-6"> 
          <form onSubmit={handlesubmit}>
           <span className="text-light">Enter id:</span>
          <input type="text" className="form-control "/>
          <div className="text-center">
          <button className="btn btn-light mt-2 text-center"
      type="submit">
     Update
    </button>
    </div>
      </form>
      <div>
      <form onSubmit={submithandle} className="">
     <span className="text-light">ProdId:</span>  <input type="text" className="form-control " value={data.prodId} /> <br></br>

     <span className="text-light">ProdName:</span>  <input type="text" className="form-control " /> <br></br>
                
     <span className="text-light">Price:</span>   <input type="text" className="form-control "/> <br></br>
     <span className="text-light">Description:</span>   <input type="text" className="form-control "/> <br></br>

     <span className="text-light">CategoryName:</span> 
                <select className="form-control">
                 {category && category.map((cat)=>(
                   
             <option key={cat.categoryId} value={cat.categoryName}>
             {cat.categoryName}
           </option>
                 ))}
                
                </select>
                <br></br>
               <button className="btn btn-light"
           type="submit"
           
        >
           Update Product
         </button>
         <ToastContainer />
          </form>
      </div>
      </div>
          </div>
        

      
          </div>
      </div>
  )
}




//update by name
export function UpdateProdByName(){

  const [category,setcategory] = useState([]);
  
//fetching all category for dropdown
  useEffect(() => {
    startTransition(() => {
        fetchData();
    });
  }, []);
  
  const fetchData = ()=>{
    listCategory()
    .then(response =>{
      console.log(response);
      setcategory(response.data);
    })
    .catch(error => {
      console.log(error);
  });
  }



  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [catname,setcatname] = useState({});
const submithandle = async (e)=>{
  e.preventDefault();

  const cname = e.target[4].value;

  try{
    const response = await getCategoryByName(cname);
    console.log(response);
    console.log("enter")
    setcatname(response.data);
    
  }catch(error){
    console.log("error in fetching category: "+error);
  }
  console.log("category")

  let data = {
    prodId:e.target[0].value,
    prodName:e.target[1].value,
    price:e.target[2].value,
    description:e.target[3].value,
    category: {
      categoryId:catname.categoryId,
      categoryName:catname.categoryName,
      description:catname.description,
    },
  }

  setFormData(data);

  try{
    const res = await updateProdByName(data);
    console.log(res);
    setFormData(res.data);
    setTimeout(() => {
        
      window.location.replace('/products');
    }, 3000);
    toast("product updated successfully!")
    
    // const navigate = useNavigate();
    // navigate('/products')
  }catch(error){
    console.log("error in adding product: "+error);
  }
 
}


  const handlesubmit =async (e)=>{
      e.preventDefault();
      let data={
          id:e.target[0].value
      }
  setFormData(data);
 try{
  const response =await getProdByName(e.target[0].value,data);
console.log(response);

setData(response.data);


 }catch (error) {
  console.error('Error fetching data:', error.message);
  alert("id not exist");
}


  
  }
  return (
    <div>
      <Navbar />
      <div className="container  p-3">
          <h3 className="text-center text-light"> enter product name which you want to update...</h3>
          <div className="row  justify-content-center">
              <div className="col-md-6"> 
          <form onSubmit={handlesubmit}>
            <span className="text-light"> Enter ProductName:</span>
         
          <input type="text" className="form-control "/>
          <div className="text-center">
          <button className="btn btn-light mt-2 text-center"
      type="submit">
     Update
    </button>
    </div>
      </form>
      <div>
      <form onSubmit={submithandle} className="">
      <span className="text-light">  ProdId:</span> <input type="text" className="form-control " value={data.prodId}   /> <br></br>

      <span className="text-light"> ProdName:</span> <input type="text" className="form-control "  value={data.prodName} contentEditable /> <br></br>
                
      <span className="text-light">  Price:</span>    <input type="text" className="form-control "/> <br></br>
      <span className="text-light">  Description: </span>     <input type="text" className="form-control "/> <br></br>

      <span className="text-light"> CategoryName:</span>  
                <select className="form-control">
                 {category && category.map((cat)=>(
                   
             <option key={cat.categoryId} value={cat.categoryName}>
             {cat.categoryName}
           </option>
                 ))}
                
                </select>
                <br></br>
               <button className="btn btn-light"
           type="submit"
           
        >
           Update Product
         </button>
         <ToastContainer />
          </form>
      </div>
      </div>
          </div>
          </div>
        

      

      </div>
  )
}


//delete product
export function DeleteProd(){
 
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
const [formdata,setFormData] = useState({})
  const deleteCategory=async (e)=>{
    e.preventDefault();
    let data={
        id:e.target[0].value
    }
setFormData(data);
try {
  const response = await deleteProd(e.target[0].value,data);
  console.log(response)
  // if(response.status==200){
  //   alert("successfully Registered ....!")
  // }
  
  setInterval(()=>{
    window.location.reload();
  },2000)
 
  toast("Product deleted successfully");


  //setResponseData(response.data);// storing but never used : no use of stroing since its post  
} catch (error) {
  console.error('Error fetching data:', error.message);
}
  }


  return (
    <>
      <Button variant="danger" className="m-3" onClick={handleShow}>
        Delete Product
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Id:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={deleteCategory}>
          <input type="text"  className="form-control"></input>
          <Button variant="primary" type="submit" onClick={handleClose} className="mt-2">
            Delete
          </Button>
          </form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );

  
}