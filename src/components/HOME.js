// import NavbarHome from './NavbarHome'
// import ecom from './img/home.jpg'

// import React from 'react'
// export default function Home(){
// 	localStorage.clear();
//   const ss = {
//     marginTop: '100px',
//     background:' hsla(0, 0%, 100%, 0.8)',
//     backdropFilter: 'blur(30px)',
   
// }
//     return (
		
// // <div > 
// // <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
// // <NavbarHome />	
// // <div className="prodbtn" style={{height: "100vh"}}>



       
// // <div className='row justify-content-center '>
// //   <div className="col-md-4 offset-2" >
  
// //   </div>
      



		
	 


// // 	  <div className='text-center center '>
// // <a href='/registeration' className='btn btn-primary m-3'>SignUp</a>
// //         <a href='/login' className='btn btn-warning m-3 '>LogIn</a>
// // </div>
// // </div>
        
    

  

// //       </div>
// // 	  </div>




// <section class="background-radial-gradient overflow-hidden">
// <NavbarHome />	

//   <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-3">
//     <div class="row gx-lg-5 align-items-center mb-5">
//       <div class="col-lg-6 mb-5 mb-lg-0" style={{zIndex:'10'}}>
//         <h1 class="my-5 display-5 fw-bold ls-tight" style={{color: 'hsl(218, 81%, 95%)'}}>
//         Click, shop, smile <br />
//           <span style={{color: 'hsl(218, 81%, 75%)'}}> – it's that easy</span>
//         </h1>
//         <p class="mb-4 opacity-70" style={{color: 'hsl(218, 81%, 85%)'}}>
//         Don’t forget about those people who have spent their hard-earned money with you. They could be responsible for substantial online sales later down the line. Treat them like your family and take them with you on your journey.
//         </p>
//         <div>
//       <a href='/registeration' className='btn btn-primary m-3'>SignUp</a>
//            <a href='/login' className='btn btn-warning m-3 '>LogIn</a>
//    </div>
        
//       </div>

//       <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
//         <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
//         <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

//         <div class="card bg-glass background-radial-gradient  "   >
//           <div class=" card-body px-4 py-5 px-md-5 " >
//           <img className="border border-2" src={ecom} width="400vh" height="440vh" ></img>
//           </div>
         
//         </div>
       
//       </div>
//     </div>
//   </div>
// </section>
//     )
// }

import NavbarHome from './NavbarHome';
import ecom from './img/image.png';
import React from 'react';

export default function Home() {
  localStorage.clear();

  return (
    <section style={{ background: '#f4f4f4', minHeight: '100vh', padding: '50px 0' }}>
      <NavbarHome />
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 order-md-2">
            <img src={ecom} className="img-fluid rounded border border-2" alt="E-commerce" style={{ maxWidth: '100%' }} /> {/* Adjust the maxWidth property */}
          </div>
          <div className="col-md-6 order-md-1">
            <h1 className="display-4 fw-bold mb-4" style={{ color: '#333' }}>
              Welcome to our Online Store
            </h1>
            <p className="lead mb-4" style={{ color: '#555' }}>
              Discover the latest trends in fashion, electronics, home decor, and more. Shop with confidence and convenience.
            </p>
            <div className="mb-4">
              <a href="/registeration" className="btn btn-primary me-3">Sign Up</a>
              <a href="/login" className="btn btn-outline-secondary">Log In</a>
            </div>
            <p style={{ color: '#777' }}>
              Already a member? <a href="/login" style={{ color: '#007bff', textDecoration: 'underline' }}>Log in here</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

