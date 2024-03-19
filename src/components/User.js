import { useState,useEffect } from "react"
import NavbarUser from "./NavUsr"
import PRODUCT from "./PRODUCT"
import { listProd } from "./SERVICES";
import { startTransition } from "react";
export default function User(props){

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
      const [searchQuery, setSearchQuery] = useState('');
      const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
      };

      const filterProducts = () => {
        return prods.filter(product =>
          product.prodName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      };
   
    

    
    return(
       
        <div>
            <NavbarUser username={props.username}/>
        <div className="mt-3 container">
        
            {/* <form onSubmit={searchsubmit}> */}
                <input type="text" className="form-control" placeholder="search any product here"  value={searchQuery}
        onChange={handleSearchChange}></input>
                {/* <div className="text-center">
                <button className="btn btn-warning mt-3">
                    Search
                </button>
                </div> */}
               
            {/* </form> */}
            <ul>
        {filterProducts().map(product => (
          <li key={product.prodId}>{product.prodName}</li>
        ))}
      </ul>
        </div>
        <PRODUCT role={props.role}/>
 
 </div>
    )
}