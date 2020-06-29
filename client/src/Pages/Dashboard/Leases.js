import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Slideshow.css"

const useStyles = makeStyles({
  root: {
    minWidth: "275px",
    width: "725px",
    height: "650px",
    display: 'inline-block',
  },
  bullet: {
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24, 
  },

  image1: {
    height: "200px",
    width: "200px",
    background: "red",
    display: 'inline-block',
  },
  image2: {
    height: "200px",
    width: "200px",
    background: "red",
    display: 'inline-block',
  },
  text1:{
    float: "right",
    height: "200px",
    width: "450px",
    background: "green",
    margin: "0px",
    display: 'inline-block',
  },
  text2:{
    float: "right",
    height: "200px",
    width: "450px",
    background: "green",
    margin: "0px",
    display: 'inline-block',
  },
  spacing:{
    width: "725px",
    height: "50px",
  }
  
  
});

export default function Slide2(props) {
  console.log(props.personalRentables)
  const classes = useStyles();
  let render
  try {
    render = props.personalRentables.length > 3 ? 
    <div>
      <div>
        766 Brandenburg Blvd, Waterloo, Ontario, Canada
      </div>
      <div>
        Available for Rent from June 28 2020 To August 28 2020
      </div>
      <div>
        Price per day: $30
      </div>
      <div>
        Pass code for this duration: passcode123
      </div>



    </div>
    : <div>You have nothing Leased</div>
  } catch {
    render = <div>Loading..</div>
  }
  let render2
  try {
    render2 = props.personalRentables[3].Rents[0] ? 
    <div>
          <div>
          This place has 1 rent:
          </div>
          <div>
            From July 8 2020 To July 30 2020 for $660
          </div>
          </div>
        :
        null
  } catch{

  }

  return (
  <div class="move-left">
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="Primary" gutterBottom>
        Currently Leased Places
        </Typography>
        {render}
        {render2}
      </CardContent>
    </Card>
  </div> 
  );
}