import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MoviesGrid from './pages/MoviesGrid';
import { StateContext } from './context/context';
import { useContext, useEffect } from 'react';
import { BrowserRouter,Routes, Route, } from 'react-router-dom';
import Movie from './pages/Movie';

function App() {
  const [state,dispatch] = useContext(StateContext)
  function fetchMovies(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=65e29e8aa6a3692c9854d8792c302987`)
       .then(response=>response.json())
       .then(data=> { dispatch({type:"SET_MOVIES",payload:data.results});})
  }
  useEffect(()=>{
    fetchMovies()
  },[])
  return(
  <>
  <BrowserRouter>
  <Header />
    <Routes>
      <Route exact path="/" element={<MoviesGrid />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  </BrowserRouter>
  {/* <Header />
  <MoviesGrid /> */}
  </>
  )
}

export default App;
