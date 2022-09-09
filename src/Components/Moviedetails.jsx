import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import Updatemovie from "./Updatemovie";


const Moviedetails = () => {

    let {id} =useParams();
    
    let [update , setUpdate] = useState(false);

    let history = useHistory();

    let { data : movie , pending, error}= useFetch(`http://localhost:5000/moviesList/${id}`);

    let handleDelete = (id)=>{
            fetch(`http://localhost:5000/moviesList/${id}`, {method: "DELETE"})
           
            .then(()=>{history.push("/")})
    }
    return ( 

        <div>
              {error && <h1>{error}</h1>}

            {pending && <div className="loader"></div>}

  
          { !update && movie &&
          <div>
                    <img src={movie.poster} ></img>
                              <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" 
                              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <h1>{movie.moviename}</h1>
             <h1>{movie.hero} </h1>
             <h1> {movie.heroine}</h1>
              <h1>{movie.director}</h1>
              <h1>{movie.genre}</h1>
              <h1>{movie.producer}</h1>
              <h1>{movie.cinematography}</h1>
              <h1>{movie.musicby}</h1>
              <h1>{movie.releasedate}</h1>
              <h1>{movie.budget}</h1>
              <h1>{movie.ratings}</h1>
              <button onClick={()=>{handleDelete(movie.id)}}>DELETE</button>
              <button onClick={()=> {setUpdate(true);}}>UPDATE</button>

            </div>}

                 {update && <Updatemovie previousMovie={movie}/>}
            
            
        </div>
     );
}
 
export default Moviedetails;