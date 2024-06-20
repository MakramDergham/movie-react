import React, { useContext } from 'react'
import Card from "../components/Card"
import { useEffect , useState } from 'react';
import { StateContext } from '../context/context';

function MoviesGrid() {
   const [state] = useContext(StateContext)
  return (
    <div id="movies_container">
        {state.movies ? state.movies.map((movie)=> (<Card movie={movie} key={movie.id}/>)):""}
    </div>
  )
}

export default MoviesGrid