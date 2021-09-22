import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, Grid, Typography} from "@material-ui/core";
import { useState } from 'react';
import Sidebar from './Sidebar';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// add validation, states, and many more thing
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  centr : {
      //paddingLeft : "170px",
      paddingTop : "10px",
  }

}));

export default function Form() {

  const history = useHistory();

  const dispatch = useDispatch();

    // subscribing
    const contacts = useSelector(state => state.contacts);

    //action
    const handleSave = (contact) => {
        dispatch({
            type : 'Add',
            newContact : contact,
        });
    }

  const classes = useStyles();
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [org,setOrg] = useState('');
  const [mail,setMail] = useState('');
  const [ph,setPh] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      // if(fname && lname){
      //     console.log(fname, lname);
      // }
      const newContact = {
        fname : fname,
        lname : lname,
        org : org,
        mail : mail,
        ph : ph,
        id : ph,
      }
      handleSave(newContact);
      history.push('/view')
  }

  return (
    <Container className = {classes.centr}> 
      <Typography variant = "h5">
          CREATE CONTACT
      </Typography>
      <form className={classes.root} noValidate autoComplete="off" onSubmit = {handleSubmit}>
        <TextField  onChange={(e) => setFname(e.target.value)}
          id="Outlined-basic" label="First Name" /> 
        <br />
        <TextField onChange={(e) => setLname(e.target.value)}
          id="Outlined-basic" label="Last Name" /> 
        <br />
        <TextField onChange={(e) => setOrg(e.target.value)}
          id="Outlined-basic" label="Organisation" /> 
        <br />
        <TextField onChange={(e) => setMail(e.target.value)}
          id="Outlined-basic" label="Email" /> 
        <br />
        <TextField onChange={(e) => setPh(e.target.value)}
          id="Outlined-basic" label="Phone" /> 
        <br />
       
       <Button type = "submit" style={{backgroundColor: '#0000FF', color: '#FFFFFF'}} >Save</Button>
      </form>
    </Container>
  );
}
