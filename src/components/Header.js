import React from 'react'
import MovieIcon from '../assets/movie-icon.jpg'
import {useState} from 'react'
import { StateContext } from '../context/context'
import { useContext } from 'react'
import { Outlet, Link } from "react-router-dom";

// https://api.themoviedb.org/3/movie/popular?api_key=65e29e8aa6a3692c9854d8792c302987
function Header() {
    const [searchValue, setSearchValue] = useState('')
    const [searchGenre,setSearchGenre] = useState('')
    const [state,dispatch] = useContext(StateContext)
    const genresList = [
        { id: 0, name: "All Genres" },
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" }
        ];
    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=65e29e8aa6a3692c9854d8792c302987&query=${searchValue}`)
        .then(response => response.json())
        .then(data => { dispatch({type:"SET_MOVIES",payload:data.results})})
    }
    function fetchGenre(movieId){
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=65e29e8aa6a3692c9854d8792c302987&with_genres=${movieId}`)
       .then(response => response.json())  
       .then(data => {console.log(data); dispatch({type:"SET_MOVIES",payload:data.results})}) 
    }
  return (
    <header>
        <Link to="/">
        <img src={MovieIcon} alt="Movie Icon"></img>
        </Link>
        <select onChange={(e)=>{
            const index = genresList.findIndex((item)=>{
                return item.name === e.target.value
            })
            let movieId = genresList[index].id
            console.log(movieId)
            fetchGenre(movieId)
        }}>
            {genresList.map((genre)=>{
                return(<option key={genre.id} >{genre.name}</option>)
            })}
        </select>
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" onChange={(e)=>{
                setSearchValue(e.target.value)
            }}></input>
            <button type="submit">Search</button>
        </form>
    </header>
  )
}

export default Header