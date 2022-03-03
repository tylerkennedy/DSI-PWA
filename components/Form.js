import React, { useState } from 'react'
import { makeStyles, styled } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));



const useStyles = makeStyles((theme) => ({

}))

const Form = () => {
	const classes = useStyles()


	return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, py: 3 }} maxWidth={400} margin={'auto'}>
      <Box component="form" noValidate autoComplete="off" sx={{py: 2}}>
         <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{py: 1}} />
         <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{py: 1}} />
       </Box>
       <Button variant="contained">Submit</Button>
  </Box>

	)
}

export default Form;
