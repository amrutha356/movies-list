
import { Link } from "react-router-dom";

const Movieslist = ({movies, title}) => {
                    
    return ( 
        <div >
            <h1 id="t1">{title}</h1>
             {
                   movies.map((movie)=>{
                  
                    return(  
                        <Link to={`/moviedetails${movie.id}`}>
                        <div key={movie.id} className="movie">
                      
                              <h1>Movie Name: {movie.moviename}</h1>
                              <h2>Hero: {movie.hero}</h2>  
                              <h2>Genre:{movie.genre}</h2>
                              <h2>Language:{movie.language}</h2>
                              <h2>Ratings:{movie.ratings}</h2>
                              <h2>Release Date:{movie.releasedate}</h2>
                              <h2>Budget: {movie.budget}</h2>
                             
                        </div>       
                        </Link>  
                    )
                })
              }
                

        </div>
     );
}
 
export default Movieslist;