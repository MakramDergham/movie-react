import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Card({movie}) {
  return (
    <Link to={`/movie/${movie.id}`}>
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="poster"></img>
      <div className="movie_description">
        <h2>{movie.original_title}</h2>
        <p>Release Date: {movie.release_date}</p>
      </div>
    </div>
    </Link>
  )
}

export default Card