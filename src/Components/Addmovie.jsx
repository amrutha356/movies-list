import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const Addmovie = () => 
{
    const[moviename,setMoviename]=useState("");
    const[hero,setHero] = useState("");
    const[heroine,setHeroine]= useState("");
    const[director,setDirector]= useState("");
    const[producer,setProducer]= useState("");
    const[cinematography,setCinematography]= useState("");
    const[musicby,setMusicby]= useState("");
    const[storyline,setStoryline]= useState("");
    const[language,setLanguage]= useState("");
    const[genre,setGenre]= useState("");
    const[budget,setBudget]= useState(""); 
    const[ratings,setRatings]= useState("");
    const[releasedate,setReleasedate]= useState("");
    const[poster,setPoster]= useState("");
    const[trailer,setTrailer]= useState("");
     let {data : movies} = useFetch("http://localhost:5000/moviesList");

   let history = useHistory();

    let handleSubmit = (e)=> {

        e.preventDefault();

        let movie={ moviename,hero,heroine,director,producer,cinematography,musicby,storyline,language,genre,budget,ratings,releasedate,poster,trailer};

        var duplicate= movies.some((m)=>{return m.moviename === moviename});

        if(duplicate===false)
        {
            fetch("http://localhost:5000/moviesList", 
                   {method: "POST", 
                    headers: {"Content-Type": "application/json"}, 
                    body: JSON.stringify(movie)})

             .then(()=>{history.push("/")})
        }
        else{
            alert(" Movie already existing, please enter add new movie ");
        }
    }

    return ( 

        <div className="add-movie">
            <h1>Add movies</h1>
            
            <form  onSubmit={handleSubmit}>
                <div>
            <lable>Movie Name:</lable><input type="text"  value={moviename} onChange={(e)=>{setMoviename(e.target.value);}}/>
    
            <lable>Hero:</lable><input type="text" value={hero} onChange={(e)=>{setHero(e.target.value);}}/>

            <lable>Heroine:</lable><input type="text"  value={heroine} onChange={(e)=>{setHeroine(e.target.value);}}/>
            
            <lable>Director:</lable><input type="text" value={director} onChange={(e)=>{setDirector(e.target.value);}}/>

            <lable>Producer:</lable><input type="text" value={producer} onChange={(e)=>{setProducer(e.target.value);}}/>

            <lable>Cinematography:</lable><input type="text" value={cinematography} onChange={(e)=>{setCinematography(e.target.value);}}/>

            <lable>Musicby:</lable><input type="text"  value={musicby} onChange={(e)=>{setMusicby(e.target.value);}}/>

            <lable>Storyline:</lable><input type="text"  value={storyline} onChange={(e)=>{setStoryline(e.target.value);}}/>

            <lable>Language:</lable><input type="text" value={language} onChange={(e)=>{setLanguage(e.target.value);}}/>

            <lable>Genre:</lable><input type="text"  value={genre} onChange={(e)=>{setGenre(e.target.value);}}/>

            <lable>Budget:</lable><input type="text"  value={budget} onChange={(e)=>{setBudget(e.target.value);}}/>

            <lable>Releasedate:</lable><input type="text"  value={releasedate} onChange={(e)=>{setReleasedate(e.target.value);}}/>

            <lable>Ratings:</lable><input type="text"  value={ratings} onChange={(e)=>{setRatings(e.target.value);}}/>

            <lable>Poster:</lable><input type="text"  value={poster} onChange={(e)=>{setPoster(e.target.value);}}/>

            <lable>trailer:</lable><input type="text"  value={trailer} onChange={(e)=>{setTrailer(e.target.value);}}/>
            </div>
            
             <input type="Submit"  value="Add movie"/>
             </form>
        </div>
     );
    
}

 
export default Addmovie;