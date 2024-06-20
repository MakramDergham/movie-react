import React from "react";
 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import { useContext, useEffect, useState } from 'react';

function Movie() {
  let {id} = useParams();
  const [movie, setMovie] = useState({})
  function fetchMovie(){
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=65e29e8aa6a3692c9854d8792c302987`)
    .then(response => response.json())
    .then(data => {console.log(data); setMovie(data);});
  }
  useEffect(()=>{
    fetchMovie()
  },[])
  return (
    <div className="movie-container">
      <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
      <div>
        <h1>{movie.original_title}</h1>
        <h2>"{movie.tagline}"</h2>
        <p><h3>Overview:</h3> {movie.overview}</p>
        {movie.genres && movie.genres.length > 0 && (
          <div>
            <h3>Genres:</h3>
              {movie.genres.map(genre => (
                <span>{genre.name} </span>
              ))}
          </div>
        )}
        <p><h3>Release Date: </h3>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default Movie