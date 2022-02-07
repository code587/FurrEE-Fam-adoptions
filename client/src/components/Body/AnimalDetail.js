import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AnimalDetail(props) {
  return (
      
    <div className="text-center" >
      
    <img
      alt= "dog"
      className="img-fluid"
      src={props.image}
      style={{ margin: '0 auto' }}
    />
    
  </div>
  );
}

export default AnimalDetail;




