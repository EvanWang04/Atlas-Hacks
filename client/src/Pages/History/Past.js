import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chart from "./Linechart"

const useStyles = makeStyles({
  root: {
    minWidth: "275px",
    width: "1450px",
    height: "650px",
    display: 'inline-block',
  },
  title: {
    fontSize: 20, 
    fontFamily: "Times",
    textShadow: "3px",
  },
  text4:{
    float: "left",
    height: "100px",
    width: "500px",
    background: "#d4d1f0",
    margin: "0px",
    borderRadius: "10px",

  },
  text5:{
    float: "left",
    height: "100px",
    width: "500px",
    background: "#d4d1f0",
    margin: "0px",
    borderRadius: "10px",

  },
  text6:{
    float: "left",
    height: "100px",
    width: "500px",
    background: "#d4d1f0",
    margin: "0px",
    borderRadius: "10px",

  },
  text7:{
    float: "left",
    height: "100px",
    width: "500px",
    background: "#d4d1f0",
    margin: "0px",
    borderRadius: "10px",
  },
  spacing2:{
    width: "500px",
    height: "150px",
  },
  Avatar:{
    display: 'flex',
    paddingLeft: "25px",
    paddingTop: "15px",
  },
  Name:{
    alignItems: "left",
    fontsize: "24px",
    paddingLeft: "22.5px",
    fontFamily: "Georgia",
    paddingTop: "0px",
    float: "left",

  },
  Description:{
    fontSize: "14px",
    color: "grey",
    paddingLeft: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },

});

export default function Past() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="Primary" gutterBottom>
       Places You've Rented From
        </Typography>
        <Chart />
        <br />
        <Typography className={classes.text4} >
            <div className={classes.Avatar}>           
                <div className={classes.Description}>
                  Location: 3961  Willow Greene Drive
                  <br />
                  Cost: $350
                  <br />
                  Rented: January 5th 2020 - 2020 February 5th
                </div>
            </div>
        </Typography>
        <Typography className={classes.spacing2} >
        </Typography>
        <Typography className={classes.text5} >
            <div className={classes.Avatar}>
                <div className={classes.Description}>
                Location: 4157  Gorby Lane
                  <br />
                  Cost: $600
                  <br />
                  Rented: March 2nd 2020 - 2020 April 2nd
                </div>
            </div>
        </Typography>
        <Typography className={classes.spacing2} >
        </Typography>
        <Typography className={classes.text6} >
            <div className={classes.Avatar}>
                <div className={classes.Description}>
                Location: 2265  Luke Lane
                  <br />
                  Cost: $500
                  <br />
                  Rented: May 9th 2020 - 2020 May 29th
                </div>
            </div>
        </Typography>
        <Typography className={classes.spacing2} >
        </Typography>
        <Typography className={classes.text7} >
            <div className={classes.Avatar}>
                <div className={classes.Description}>
                Location: 2347  Middleville Road
                  <br />
                  Cost: $250
                  <br />
                  Rented: June 12th 2020 - June 22th 2020
                </div>
            </div>
        </Typography>
      </CardContent>
    </Card>
  );
}