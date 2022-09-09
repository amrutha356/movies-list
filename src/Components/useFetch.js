import { useEffect, useState } from "react";



const useFetch = (request) => {


    let[data, setData]= useState (null);
    let[pending, setPending]= useState(true);
    let[error, setError]= useState(null);
    useEffect( ()=> 
      {
           setTimeout(()=>
           {
             
          fetch(request)
          .then ((response)=>{
            
            if(response.ok=== false)
            {
              throw Error("Data is not found");
            }
            
            
            return (response.json());})
          .then ((data)=> {setData(data); setPending(false);})
          .catch((error)=>{setError(error.message); setPending(false);})
          // .catch((error)=>{setError("due to network issue"); setPending(false);})
           },3000)
            },  [])
           


    return {data, pending, error}
}
 
export default useFetch;