import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";


const Updatemovie = ({previousMovie}) => {


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
    let {id} = useParams();
     let history =useHistory();
    let handleSubmit =(e)=>{
         e.preventDefault();
         let movie = {moviename,hero,heroine,director,producer,cinematography,musicby,storyline,language,genre,budget,ratings,releasedate,poster,trailer};

         fetch(`http://localhost:5000/moviesList/${previousMovie.id}`,
         {method: "PUT",
        headers: {"Accept": "application/json",
                    "Content-Type":"application/json"},
                body: JSON.stringify(movie)})

       .then(()=>{history.push("/")});
    }


    return (
        <div className="add-movie">
            <hr />
        <h1>Update Movie </h1>
            <hr />
            <form onSubmit={handleSubmit}>
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
                    <input type="submit" value="Update Movie" />
            </form>
        </div>
    );
}
export default Updatemovie;