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
  }
  
});

export default function Slide() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="Primary" gutterBottom>
       Currently Rented Out
        </Typography>
        <Typography className={classes.image3} >
        </Typography>
        <Typography className={classes.text3} >
        </Typography>

        <Typography className={classes.spacing2} >
        </Typography>

        <Typography className={classes.image4} >
        </Typography>
        <Typography className={classes.text4} >
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">View More</Button>
      </CardActions>
    </Card>
  );
}