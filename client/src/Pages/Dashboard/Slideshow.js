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

export default function Slide2() {
  const classes = useStyles();

  return (
  <div class="move-left">
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="Primary" gutterBottom>
        Available Rentals 
        </Typography>
        <Typography className={classes.image1} >
        </Typography>
        <Typography className={classes.text1} >
        </Typography>

        <Typography className={classes.spacing} >
        
        </Typography>

        <Typography className={classes.image2}>
        </Typography>
        <Typography className={classes.text2} >
        </Typography>
        <Typography variant="body2" component="p">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View More</Button>
      </CardActions>
    </Card>
  </div> 
  );
}