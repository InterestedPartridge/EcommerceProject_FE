
export default function NavbarHome(){
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light background-radial-gradient p-3" >
   <a class="navbar-brand text-light tx" href="/">E-COMMERCE</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavDropdown">
     <ul class="navbar-nav ms-auto justify-content-center">
     <li class="nav-item active">
         <a class="nav-link nvl text-light" href="/">Home</a>
       </li>
       <li class="nav-item active">
         <a class="nav-link nvl text-light" href="/registeration">Registeration</a>
       </li>
       <li class="nav-item">
         <a class="nav-link nvl text-light" href="/login">Login</a>
       </li>
       <li class="nav-item">
         <a class="nav-link nvl text-light" href="/">Contact</a>
       </li>
      
       <li class="nav-item">
         <a class="nav-link nvl text-light" href="/about">About</a>
       </li>
      
     </ul>
   </div>
 </nav>
 </div>
    )
}