// import React from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        {/* <h2>{props.query}</h2> */}
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}







export default Cards;