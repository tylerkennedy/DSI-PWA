import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';


const useStyles = makeStyles((theme) => ({
  logoLink: {
    margin: '12px 0px',
    height: 48,
	},
  logo: {
		width: 48,
    height: 48,
    borderRadius: 8,
	},
}))

const Nav = () => {
	const classes = useStyles()


	return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent' sx={{ boxShadow: 3 }}>
        <Toolbar className={classes.toolbar}>
          <Link className={classes.logoLink} href="/" >
            <img className={classes.logo} src='/static/img/favicon.png' sx={{ boxShadow: 3 }}></img>
          </Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
	)
}

export default Nav;
