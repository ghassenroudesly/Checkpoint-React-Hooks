import React ,{ useState } from 'react';

import { useParams } from "react-router-dom";
import {MoviesData} from "../MoviesData/MoviesData";
 


 


function MovieDetail  () {
    // eslint-disable-next-line
    const [MoviesDataa, setMovies] = useState(MoviesData);
  
    var {moviesId} = useParams();;
    console.log(moviesId)
    moviesId=moviesId-0;
    console.log(moviesId.moviesId,MoviesData[0].id,MoviesData)
    let movie = MoviesDataa.find(movie => movie.id === moviesId);
    console.log(MoviesDataa,movie)
    
    return (
        <div className="descdiv">
            
            <p><strong>{movie.title}</strong></p>
            <iframe title="trailer" className="paradisc" width="530" height="315" src={movie.video} ></iframe>


        </div>
    )
}


export default MovieDetail
