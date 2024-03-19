import React from "react"
import { useState } from "react"
import { useEffect, startTransition } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import {  ToastContainer,toast } from 'react-toastify';
import { Button, Modal } from 'react-bootstrap';
import NavbarUser from "./NavUsr";

import { addCategory,addProd,listProd,getProdById,getProdByName,updateProdById,updateProdByName,deleteProd,listCategory,getCategoryById,getCategoryByName,updateCategoryById,updatecategoryByName,deleteCategory } from "./SERVICES";
import Navbar from "./Navbar";

//delete category
export const DeleteCategory = () => {

  
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
const [formdata,setFormData] = useState({})
  const delCategory=async (e)=>{
    e.preventDefault();
    let data={
        id:e.target[0].value
    }
setFormData(data);

try {
  const response = await deleteCategory(e.target[0].value,data);
  console.log(response)
  // if(response.status==200){
  //   alert("successfully Registered ....!")
  // }
  
  setInterval(()=>{
    window.location.reload( );
  },2000)
 
  toast("Category deleted successfully");


  //setResponseData(response.data);// storing but never used : no use of stroing since its post  
} catch (error) {
  console.error('Error fetching data:', error.message);
}
  }


  return (
    <>
      <Button variant="danger" className="m-3" onClick={handleShow}>
        Delete Category
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Id:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={delCategory}>
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
};



export default function CATEGORIES({ toggleModal }){

  const [category,setcategory] = useState([]);


  useEffect(() => {
    startTransition(() => {
        fetchData();
    });
  }, []);
  
  var url;
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

    return (
      <div>
        <Navbar />
        <div className="prodbtn">

        <div className='text-center '>
    {/* <a href="/addcategory" className='btn btn-warning m-3'>Add Category</a> */}
   
    {/* <a href="/listallcategory" className='btn btn-dark  m-3'>List All Category</a> */}
    {/* <a href="/getbyid" className='btn btn-primary  m-3'>GetCatById</a> */}
    {/* <a href="/getbyname" className='btn btn-light  m-3'>GetCatByName</a> */}
    {/* <a href="/updatecatbyid" className='btn btn-warning  m-3'>UpdateCatById</a> */}
    {/* <a href="/updatecatbyname" className='btn btn-success  m-3'>UpdateCatByName</a> */}
      {/* <DeleteCategory /> */}


      <div className="container py-5">
      <h2 className="text-center mb-5">Category Management</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card h-100 bg-primary text-white text-center">
            <div className="card-body">
              <h5 className="card-title">Add Category</h5>
              <p className="card-text">Add a new category to the inventory.</p>
              <a href="/addcategory" className="btn btn-outline-light">Add Category</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-secondary text-white text-center">
            <div className="card-body">
              <h5 className="card-title">List All Categories</h5>
              <p className="card-text">View all categories in the inventory.</p>
              <a href="/listallcategory" className="btn btn-outline-light">List All Categories</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-info text-white text-center">
            <div className="card-body">
              <h5 className="card-title">Get Category By ID</h5>
              <p className="card-text">Find a Category by its unique ID.</p>
              <a href="/getbyid" className="btn btn-outline-light">Get Category By ID</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-success text-white text-center">
            <div className="card-body">
              <h5 className="card-title">Get Category By Name</h5>
              <p className="card-text">Search for a Category by its name.</p>
              <a href="/getbyname" className="btn btn-outline-light">Get Category By Name</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-warning text-dark text-center">
            <div className="card-body">
              <h5 className="card-title">Update Category By ID</h5>
              <p className="card-text">Update a Category's information by ID.</p>
              <a href="/updatecatbyid" className="btn btn-outline-dark">Update Category By ID</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 bg-danger text-white text-center">
            <div className="card-body">
              <h5 className="card-title">Update Category By Name</h5>
              <p className="card-text">Update a Category's information by name.</p>
              <a href="/updatecatbyname" className="btn btn-outline-light">Update Category By Name</a>
            </div>
          </div>
        </div>
      </div>
      <DeleteCategory />
    </div>
  



    
</div>



<div className="justify-content-center row ">
            <h3 className="text-center text-white p-3  ">Available Categories</h3>
      
  
    {category.map((p)=>(
       url = `https://source.unsplash.com/featured/?${encodeURIComponent(p.categoryName)}` ,

      
       <div class="card cd">
      <div class="card-body">
      <img class="card-img-top" src={url} alt="Card image cap" width="250px" height="250px"/>
      <h5 class="card-title mt-2">Id: {p.categoryId}</h5>

       <h5 class="card-title">Name: {p.categoryName}</h5>
       
       <p class="card-text">Description: {p.description}</p>
        
       
      </div>
        
</div>

       
    ))}
   


</div>
        
  </div>
  </div>
    )
}


//Add category
export function AddCategory(){
const [formdata,setFormData] = useState({})
const handlesubmit=async (e)=>{
  e.preventDefault();

  let data={
    categoryName:e.target[0].value,
    description:e.target[1].value,
  }

  try{
    const res = await addCategory(data);
    console.log(res);
    setFormData(res.data);
    setTimeout(() => {
        
      window.location.replace('/categories');
    }, 3000);
    
    toast("category added successfully...")
    // const navigate = useNavigate();
    // navigate("/products");
  }catch(error){
    console.log("error in adding product: "+error);
  }
}

return (
  <div>
        <Navbar />
  <div className="container">
  <div className="row  justify-content-center">
   <h2 className="card text-center p-3">Add Category here.. </h2>
   <div className="col-md-6"> 
<form  onSubmit={handlesubmit} className="">
<span className="text-light">CategoryName:</span>
     <input type="text" className="form-control " /> <br></br>
   
     <span className="text-light">  Description:</span>
  <input type="text" className="form-control "/> <br></br>

     
   
    
   
    <br></br>
   <button className="btn btn-light"
type="submit"
>
Add Category
</button>
<ToastContainer />
</form>
</div>
</div>
</div>
</div>
)
}

//List Category
export function ListAllCategory(props){
  const [category,setcategory] = useState([]);


  useEffect(() => {
    startTransition(() => {
        fetchData();
    });
  }, []);
  
  var url;
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
return(
<div>
{props.role==='ROLE_ADMIN'?<Navbar />:<NavbarUser username={props.username}/>}
  <div className="container">
  <h2 className="card text-center p-3">List Of Categories </h2>
  <table className="table table-striped table-hover table-sm border border-dark p-2 mt-5">
<thead>
<tr>
  <th>Id</th>
  <th>Name</th>
  
  <th>Description</th>
  
</tr>
</thead>
<tbody>
{category.map((item) => (
                    <tr key={item.prodId}>
                        <td>{item.categoryId}</td>
                        <td>{item.categoryName}</td>
                        
                        <td>{item.description}</td>
                        
                        
                    </tr>
                ))}
</tbody>
  </table>
</div>
</div>
)
}


//get by id
export function GetCategoryById(props){

  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [st,setst] = useState([])
  const getprodonsubmit=async (e)=>{
      e.preventDefault();
      let data={
          id:e.target[0].value
      }
  setFormData(data);

 try{
  const response =await getCategoryById(e.target[0].value);
console.log(response);

console.log(response.data);
setData(response.data);
setst(response.data.products)
console.log("pp");
console.log(response.data.products);

 }catch (error) {
  console.error('Error fetching data:', error.message);
  alert("id not exist")
}
 


  }

  var url;
  return (
    <div>
               {props.role==='ROLE_ADMIN'?<Navbar />:<NavbarUser username={props.username}/>}

    <div className="container">
    <div className="row justify-content-center">

    <div className="col-md-6">
  <form onSubmit={getprodonsubmit}>
     <span className="text-light"> Enter id:</span>
      <input type="text" className="form-control "/>
      <button className="btn btn-light mt-2"
  type="submit"
>
 GetCategory
</button>
  </form>
  </div>
  </div>
  { data &&
    <div className="card mt-3">
     <p className="card-header">Product Name: {data.categoryId}</p>
   <p className="card-header">  Product Price:  {data.categoryName}</p>
   <p className="card-header"> Description:  {data.description}</p>
  
   </div>
  }
 
  <div>
    <h3 className="text-center text-light mt-3">Product Under this Category..</h3>
    <div className="justify-content-center row ">
    {st.map((p)=>(
       url = `https://source.unsplash.com/featured/?${encodeURIComponent(p.prodName)}` ,

      
       <div class="card cd">
      <div class="card-body">
      <img class="card-img-top" src={url} alt="Card image cap" width="250px" height="250px"/>
      <h5 class="card-title mt-2">ProdId: {p.prodId}</h5>

       <h5 class="card-title">ProdName: {p.prodName}</h5>
       <h6 class="card-subtitle mb-2 text-muted">Price: &#8377;{p.price}</h6>
       
       <p class="card-text">Description: {p.description}</p>
        <a href="#" class="card-link">More Details</a>
       
      </div>
        
</div>
       
    ))}
    </div>
  </div>
</div>
</div>
  )
}

//get categories by name
export function GetCategoryByName(props){
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [st,setst] = useState([])
  const getprodonsubmit=async (e)=>{
      e.preventDefault();
      let data={
          id:e.target[0].value
      }
  setFormData(data);

 try{
  const response =await getCategoryByName(e.target[0].value);
console.log(response);

console.log(response.data);
setData(response.data);
setst(response.data.products)
console.log("pp");
console.log(response.data.products);

 }catch (error) {
  console.error('Error fetching data:', error.message);
  alert("id not exist")
}
 


  }

  var url;
  return (
    <div>
               {props.role==='ROLE_ADMIN'?<Navbar />:<NavbarUser username={props.username}/>}

   <div className="container">
     <div className="row justify-content-center">

<div className="col-md-6">
<form onSubmit={getprodonsubmit}>
  <span className="text-light"> Enter Name:</span>
  <input type="text" className="form-control "/>
  <button className="btn btn-light mt-2"
type="submit"
>
GetCategory
</button>
</form>
</div>
</div>

{ data &&
    <div className="card mt-3">
     <p className="card-header">Product Name: {data.categoryId}</p>
   <p className="card-header">  Product Price:  {data.categoryName}</p>
   <p className="card-header"> Description:  {data.description}</p>
  
   </div>
  }
 
  <div>
    <h3 className="text-center text-light mt-3">Product Under this Category..</h3>
    <div className="justify-content-center row ">
    {st.map((p)=>(
       url = `https://source.unsplash.com/featured/?${encodeURIComponent(p.prodName)}` ,

      
       <div class="card cd">
      <div class="card-body">
      <img class="card-img-top" src={url} alt="Card image cap" width="250px" height="250px"/>
      <h5 class="card-title mt-2">ProdId: {p.prodId}</h5>

       <h5 class="card-title">ProdName: {p.prodName}</h5>
       <h6 class="card-subtitle mb-2 text-muted">Price: &#8377;{p.price}</h6>
       
       <p class="card-text">Description: {p.description}</p>
        <a href="#" class="card-link">More Details</a>
       
      </div>
        
</div>
       
    ))}
    </div>
  </div>

   </div> 
   </div> 
  )
}

//update by id
export function UpdateCategoryById(){

const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
 
  const getprodonsubmit=async (e)=>{
      e.preventDefault();
      let data={
          id:e.target[0].value
      }
  

 try{
  const response =await getCategoryById(e.target[0].value);
console.log(response);

console.log(response.data);
setData(response.data);

console.log("pp");
console.log(response.data.products);

 }catch (error) {
  console.error('Error fetching data:', error.message);
  alert("id not exist")
}
 
  }


  
const handlesubmit=async (e)=>{
  e.preventDefault();

  let data={
    categoryId:e.target[0].value,
    categoryName:e.target[1].value,
    description:e.target[2].value,
  }

  try{
    const res = await updateCategoryById(data);
    console.log(res);
    setFormData(res.data);
    setTimeout(() => {
        
      window.location.replace('/categories');
    }, 3000);
    toast("category updated successfully...")
    // const navigate = useNavigate();
    // navigate("/products");
  }catch(error){
    console.log("error in adding product: "+error);
  }
}

  return(
    <div>
        <Navbar />
<div className="container">
    <div className="row justify-content-center">

    <div className="col-md-6">
  <form onSubmit={getprodonsubmit}>
     <span className="text-light"> Enter id:</span>
      <input type="text" className="form-control "/>
      <button className="btn btn-light mt-2"
  type="submit"
>
 UpdateCategory
</button>
  </form>
  </div>
  </div>
  <div className="row  justify-content-center mt-3">
   
   <div className="col-md-6"> 
<form  onSubmit={handlesubmit} className="">
<span className="text-light">CategoryId: </span> <input type="text" className="form-control "  value={data.categoryId}/> <br></br>

   
<span className="text-light"> CategoryName: </span>  <input type="text" className="form-control " /> <br></br>
   
   
<span className="text-light"> Description: </span>  <input type="text" className="form-control "/> <br></br>

     
   
    
   
    <br></br>
   <button className="btn btn-light"
type="submit"
>
Add Category
</button>
<ToastContainer />
</form>
</div>
</div>
  </div>
  </div> 

  )
}

//update by name
export function UpdateCategoryByName(){

  const [formData, setFormData] = useState({});
    const [data, setData] = useState([]);
   
    const getprodonsubmit=async (e)=>{
        e.preventDefault();
        let data={
            id:e.target[0].value
        }
    
  
   try{
    const response =await getCategoryByName(e.target[0].value);
  console.log(response);
  
  console.log(response.data);
  setData(response.data);
  
  console.log("pp");
  console.log(response.data.products);
  
   }catch (error) {
    console.error('Error fetching data:', error.message);
    alert("id not exist")
  }
   
    }
  
  
    
  const handlesubmit=async (e)=>{
    e.preventDefault();
  
    let data={
      categoryId:e.target[0].value,
      categoryName:e.target[1].value,
      description:e.target[2].value,
    }
  
    try{
      const res = await updatecategoryByName(data);
      console.log(res);
      setFormData(res.data);
      setTimeout(() => {
        
        window.location.replace('/categories');
      }, 3000);
      toast("category updated successfully...")
      // const navigate = useNavigate();
      // navigate("/products");
    }catch(error){
      console.log("error in adding product: "+error);
    }
  }
  
    return(
      <div>
        <Navbar />
  <div className="container">
      <div className="row justify-content-center">
  
      <div className="col-md-6">
    <form onSubmit={getprodonsubmit}>
       <span className="text-light">Enter Name:</span> 
        <input type="text" className="form-control "/>
        <button className="btn btn-light mt-2"
    type="submit"
  >
   GetCategory
  </button>
    </form>
    </div>
    </div>
    <div className="row  justify-content-center mt-3">
     
     <div className="col-md-6"> 
  <form  onSubmit={handlesubmit} className="">
   <span className="text-light">CategoryId:</span>  <input type="text" className="form-control "  value={data.categoryId}/> <br></br>
  
     
   <span className="text-light"> CategoryName: </span>  <input type="text" className="form-control " /> <br></br>
     
     
   <span className="text-light"> Description: </span>  <input type="text" className="form-control "/> <br></br>
  
       
     
      
     
      <br></br>
     <button className="btn btn-light"
  type="submit"
  >
  Update Category
  </button>
  <ToastContainer />
  </form>
  </div>
  </div>
    </div>
    </div>

    )
  }
  
  //delete category

