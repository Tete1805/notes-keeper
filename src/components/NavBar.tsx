import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './NavBar.styles';

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="menu"
            className={classes.menuButton}
            color="inherit"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button href="/" color="inherit">
              Notes keeper
            </Button>
          </Typography>
          <Button href="/signin" color="inherit">
            Sign In
          </Button>
          <Button href="/signup" color="inherit">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
