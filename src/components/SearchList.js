import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux';

const SearchList = () => {

  const [movies, setMovies] = useState([]);
  const appState = useSelector((state) => state)

  const fn = async (app) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${app}&apikey=f2f04547`);
    const data = await response.json();
    setMovies(data.Search);

  };

  useEffect(() => { fn(appState.Search_key); }, [ appState.Search_key]);


  return (
    <>
    {(movies !== undefined)? <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl:6 }}>
          {movies.map((singleMovie, idx) => {
            return(
              <Grid item key={idx}>
                <MovieCard data={singleMovie} />
              </Grid>
            );
          })}
        </Grid> : null}
     
    </>
  )
}

export default SearchList