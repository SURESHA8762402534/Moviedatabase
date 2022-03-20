import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFavoriteaction } from '../action';

const Favoritelist = (props) => {
    let [isFavourite, setFavourite] = useState(true)

  const dispatch = useDispatch()

  const toggleFavourite = ()=>{
    isFavourite = !isFavourite
    setFavourite(isFavourite)
    dispatch(removeFavoriteaction(props.data.imdbID))
  }

    const single_favourite_song = props.data;

  return (
    <>
    <Card  sx={{ ml: 5, maxWidth: 345, maxHeight: 600 }}>
          <IconButton aria-label="delete" size="large" onClick={()=> toggleFavourite()}>
            {isFavourite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <CardActionArea>
            <Link to={`/detail/${single_favourite_song?.imdbID}`}>
              <CardMedia
                component="img"
                height="350"
                image={single_favourite_song?.Poster}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {single_favourite_song?.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {single_favourite_song?.Year}
                </Typography>
                <Chip label={single_favourite_song?.Type} variant="outlined" />
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
    </>
  )
}

export default Favoritelist