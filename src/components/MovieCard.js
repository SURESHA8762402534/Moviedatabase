import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import { FavoriteBorder,  Favorite} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { Favoriteaction } from '../action';
import { useDispatch } from 'react-redux';

const MovieCard = (props) => {
  let [isFavourite, setFavourite] = useState(true)

  const dispatch = useDispatch()

  const toggleFavourite = (data)=>{
    isFavourite = !isFavourite
    setFavourite(isFavourite)
    dispatch(Favoriteaction(data))
  }
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 600 }}>
      <IconButton aria-label="delete" size="large" onClick={() => toggleFavourite(props)}>
        {isFavourite ? <FavoriteBorder /> : <Favorite />}
      </IconButton>
      <CardActionArea>
        <Link to={`/detail/${props.data?.imdbID}`}>
          <CardMedia
            component="img"
            height="350"
            image={props.data?.Poster}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {props.data?.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.data?.Year}
            </Typography>
            <Chip label={props.data?.Type} variant="outlined" />
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;