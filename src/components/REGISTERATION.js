// import { useContext } from "react";
// import { ToastContainer, toast } from "react-toastify";

// import axios from "axios";


// export default function REGISTERATION(){


  
// const handleSubmit=async (e)=>{
//     e.preventDefault();

//     let jsonObj = {
//         username: e.target[0].value,
//     password: e.target[5].value,
//     email: e.target[1].value,
//     mobile:e.target[2].value,
//     address:e.target[3].value,
//     gender:e.target[4].value,
//     }

//     try{
//         const response = await axios.post("http://localhost:8060/api/auth/signup",jsonObj)
//        console.log(response.data);
//        localStorage.clear()
//         setTimeout(() => {
        
//             window.location.replace('/login');
//           }, 3000);
          
//           toast("User registered successfully...")
//     }catch{
//         toast("User already exist.")
//     }


// }

// const ss = {
//     marginTop: '-150px',
//     background:' hsla(0, 0%, 100%, 0.8)',
//     backdropFilter: 'blur(30px)',
// }
// const s ={
    
//     backgroundImage: 'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
//     height: '300px',
// }
//     return (

//         // <div onSubmit={handleSubmit} className="container">
//         //        <div className="row  justify-content-center">
//         //         <h2 className="card text-center p-3">Sign Up Form ! </h2>
//         //         <div className="col-md-6"> 
//         //     <form  className="">
//         //         <span className="text-light"> UserName: </span>
//         //         <input type="text" className="form-control " /> <br></br>
//         //         <span className="text-light">  Email: </span>   <input type="email" className="form-control "/> <br></br>
                 
//         //         <span className="text-light">  Mobile: </span>  <input type="text" className="form-control " /> <br></br>
//         //         <span className="text-light"> Address: </span>   <input type="text" className="form-control " /> <br></br>
//         //         <span className="text-light"> Gender    : </span>   <select className="form-control ">
//         //             <option value="Male">Male</option>
//         //             <option value="Female">Female</option>
//         //             <option value="Others">Others</option>
//         //          </select><br></br>
//         //          <span className="text-light"> UserName: </span>  Password: <input type="password" className="form-control "/> <br></br>
//         //         <button className="btn btn-light mt-1 mb-1"
//         //     type="submit"
//         //  >
//         //     Register
//         //   </button>
        
//         //   <ToastContainer />
//         //     </form> 

//         //     <h6 className="mb-5 text-light"> Already a customer <a href="/login"> Login Here</a></h6> <br></br>
//         //     </div>
//         //     </div>
//         // </div>


// <section class="text-center">
//   <div class="p-5 bg-image" style={s}></div>

//   <div class="card mx-4 mx-md-5 shadow-5-strong" style={ss}>
//     <div class="card-body py-5 px-md-5">

//       <div class="row d-flex justify-content-center">
//         <div class="col-lg-8">
//           <h2 class="fw-bold mb-5">Sign up now</h2>
//           <form onSubmit={handleSubmit}>
//             <div class="row">
//               <div class="col-md-6 mb-4">
//                 <div class="form-outline">
//                   <input type="text" id="form3Example1" class="form-control" />
//                   <label class="form-label" for="form3Example1">Username</label>
//                 </div>
//               </div>
//               <div class="col-md-6 mb-4">
//                 <div class="form-outline">
//                   <input type="email" id="form3Example2" class="form-control" />
//                   <label class="form-label" for="form3Example2">Email</label>
//                 </div>
//               </div>
//             </div>
//             <div class="row">
//               <div class="col-md-6 mb-4">
//                 <div class="form-outline">
//                   <input type="text" id="form3Example1" class="form-control" />
               
//                   <label class="form-label" for="form3Example1">Mobile</label>
//                 </div>
//               </div>
//               <div class="col-md-6 mb-4">
//                 <div class="form-outline">
//                   <input type="text" id="form3Example2" class="form-control" />
//                   <label class="form-label" for="form3Example2">Address</label>
//                 </div>
//               </div>
//             </div>
//             <div class="row">
//               <div class="col-md-6 mb-4">
//                 <div class="form-outline">
//                   {/* <input type="text" id="form3Example1" class="form-control" /> */}
//                   <select className="form-control ">
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                    <option value="Others">Others</option>
//                 </select>
//                   <label class="form-label" for="form3Example1">Gender</label>
//                 </div>
//               </div>
//               <div class="col-md-6 mb-4">
//                 <div class="form-outline">
//                   <input type="password" id="form3Example2" class="form-control" />
//                   <label class="form-label" for="form3Example2">Password</label>
//                 </div>
//               </div>
//             </div>

           

          

//             <button type="submit" class="btn btn-primary btn-block mb-4">
//               Sign up
//             </button>
//             <ToastContainer />

//             <div class="text-center">
//               <p>Already have a account: </p>
//               <a href="/login">Login here</a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//     )
// }

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import React from 'react';

export default function REGISTERATION() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    let jsonObj = {
      username: e.target[0].value,
      password: e.target[5].value,
      email: e.target[1].value,
      mobile: e.target[2].value,
      address: e.target[3].value,
      gender: e.target[4].value,
    };

    try {
      const response = await axios.post("http://localhost:8060/api/auth/signup", jsonObj);
      console.log(response.data);
      localStorage.clear();
      setTimeout(() => {
        window.location.replace('/login');
      }, 3000);
      toast("User registered successfully...");
    } catch {
      toast("User already exists.");
    }
  };

  return (
    <section className="registeration-section">
      <ToastContainer />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <h2 className="card-title text-center mb-4">Sign up</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Username" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Mobile" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Address" required />
                  </div>
                  <div className="mb-3">
                    <select className="form-control" required>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                </form>
                <div className="text-center mt-4">
                  <p>Already have an account? <a href="/login">Login here</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
