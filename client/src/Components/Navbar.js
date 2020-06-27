import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
            <Fragment>
              <Button color="inherit" component={Link} to="/Dashboard">
                Dashboard
              </Button>
              <Button color="inherit" component={Link} to="/Rent">
                Rent
              </Button>
              <Button color="inherit" component={Link} to="/CreateRent">
                Create A Rent
              </Button>
              <Button color="inherit" component={Link} to="/History">
                  History
              </Button>
            </Fragment>
        </Toolbar>
      </AppBar>
    );
  }
}


export default (Navbar);