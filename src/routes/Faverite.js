import React from 'react'
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Favoritelist from './Favoritelist'

const Faverite = () => {
  const favourite_list = useSelector(state => state.moviedetailes);

  
  return (
    <>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl:6 }}>
      {Object.keys(favourite_list).map((single_key, idx) => {
        const single_favourite_song = favourite_list[single_key];
        return (
          <Grid item key={single_key} index={idx}>
          <Favoritelist data = {single_favourite_song}/>
        </Grid>
        )
        
       
      })}
      </Grid>

    </>
  )
}

export default Faverite