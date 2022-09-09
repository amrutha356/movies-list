import { Link } from "react-router-dom";
import { useState } from "react";

   
const Navbar = () => {
    let [searchVal, setSearchval]=useState("");
    return ( 
        <nav>
            <h1> MOVIES</h1>
            <input type="search" value={searchVal} onChange={(e)=>{setSearchval(e.target.value);}}/>
            <Link to={`/searchpage${searchVal}`}>
                <button>Search</button> 
            </Link>

            <div>
           <Link to="/">Home</Link>
           <Link to="/add"> Add New Movie</Link>

           <span>{searchVal}</span>
            </div>
            
        </nav>
     );
}
 
export default Navbar;