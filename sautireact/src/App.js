import React from 'react';
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { FormControl } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  '& > *': {
    margin: theme.spacing(1),
    width: 200,
  },
}));


function Login() {
  const classes = useStyles();

  return (
    <div className="container">
      <Grid
        container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{background: "white", color: "black", width: "25%", margin: "15% auto"}} className={classes.paper}>
            <FormControl>
              <InputLabel htmlFor="username">UserName</InputLabel>
              <Input id="userName" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">Example</FormHelperText>
            </FormControl>
            <br />
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="Password" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">Example</FormHelperText>
            </FormControl>
            <br />
            <Button style={{background: "linear-gradient(to bottom, #1e130c, #9a8478)"}} type="submit" variant="contained" color="secondary">Login</Button>
            </Paper>
        </Grid>

      </Grid>


    </div>
  );
}

export default Login;
