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
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24, 
  },
  pos: {
    marginBottom: 12,
  },
  image3: {
    height: "200px",
    width: "200px",
    background: "red",
    // background-image: url("paper.gif");
    display: 'inline-block',
  },
  image4: {
    height: "200px",
    width: "200px",
    background: "red",
    display: 'inline-block',
  },
  text3:{
    float: "right",
    height: "200px",
    width: "450px",
    background: "green",
    margin: "0px",
    display: 'inline-block',
  },
  text4:{
    float: "right",
    height: "200px",
    width: "450px",
    background: "green",
    margin: "0px",
    display: 'inline-block',
  },
  spacing2:{
    width: "725px",
    height: "50px",
  },

  spacing3:{
    width: "100px",
    height: "650px", 
  },

});

export default function Slide(props) {
  let render
  try {
    render = 
    props.personalRents.length>0 ? 
    <div>
      <div>
        Location: 766 Brandenburg Blvd, Waterloo, ON, Canada
      </div>
      <div>
        The Pass Code for the Place will be: passcode123 from July 8 2020 To July 30 2020.
      </div>
      <div>
        You paid: $660 in total, or $30 per day
      </div>
      <div>
        5 Guests
      </div>
      </div>
      : <div>You currently have nothing rented out</div>
  } catch {
    render = <div>Loading...</div>
  }

  const classes = useStyles();
  console.log(props.personalRents)
  return (
    
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="Primary" gutterBottom>
        Current Rents
        </Typography>
        {
          render
      }
      </CardContent>
    </Card>
  );
}