// import { useContext } from "react"
// import axios from "axios";
// import { ToastContainer,toast } from "react-toastify";
// import { Auth_checking } from "../App";



// export default function LOGIN(){

    
   

//     const handler = (e) =>{
//         e.preventDefault();
//         let json = {
//             username:e.target[0].value,
//             password:e.target[1].value,
//         }

//         const fetchData = async() =>{
//             try{
//                 const res = await axios.post("http://localhost:8060/api/auth/signin",json)
//                 console.log(res.data);
//                 localStorage.setItem('token',res.data.accessToken);
//                 localStorage.setItem('role',res.data.roles);
//                 localStorage.setItem('name',res.data.username);
//                 setTimeout(() => {
        
//                     window.location.replace('/products');
//                   }, 2000);
//                 toast("successfully logged in")

//             }catch(error){
//                 toast("error in login..");
//                 console.log("error fetching data: "+error);
//             }
//         }
//         fetchData();
//     };


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




// <section class="text-center">
  
//   <div class="p-5 bg-image" style={s}></div>
 
//   <div class="card mx-4 mx-md-5 shadow-5-strong" style={ss}>
//     <div class="card-body py-5 px-md-5">

//       <div class="row d-flex justify-content-center">
//         <div class="col-lg-8">
//           <h2 class="fw-bold mb-5">LogIn now</h2>
//           <form onSubmit={handler} >
            
         

            
//             <div class="form-outline mb-4">
//               <input type="text" id="form3Example3" class="form-control" />
//               <label class="form-label" for="form3Example3">Username</label>
//             </div>

           
//             <div class="form-outline mb-4">
//               <input type="password" id="form3Example4" class="form-control" />
//               <label class="form-label" for="form3Example4">Password</label>
//             </div>

           
           

           
//             <button type="submit" class="btn btn-primary btn-block mb-4">
//              LogIn
//             </button>
//         <ToastContainer />
            
//             <div class="text-center">
//               <p>Don't have account:</p>
//              <a href="/registeration">Register Here</a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>



//     )
// }


import { useContext } from "react"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth_checking } from "../App";

export default function LOGIN() {
  const handler = (e) => {
    e.preventDefault();
    let json = {
      username: e.target[0].value,
      password: e.target[1].value,
    }

    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:8060/api/auth/signin", json)
        console.log(res.data);
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('role', res.data.roles);
        localStorage.setItem('name', res.data.username);
        setTimeout(() => {
          window.location.replace('/products');
        }, 2000);
        toast("Successfully logged in");
      } catch (error) {
        toast("Error in login.");
        console.log("Error fetching data: " + error);
      }
    }
    fetchData();
  };

  return (
    <section className="login-section">
      <ToastContainer />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <h2 className="card-title text-center mb-4">Log in</h2>
                <form onSubmit={handler}>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Username" />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mb-4">Log in</button>
                  <ToastContainer />
                  <div className="text-center">
                    <p>Don't have an account?</p>
                    <a href="/registeration">Register Here</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
