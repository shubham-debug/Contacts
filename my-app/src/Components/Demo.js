import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, Grid, Typography} from "@material-ui/core";
import { useState } from 'react';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from '../Firebase';

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


const validationSchema = yup.object({
    fname: yup
      .string('Enter your First Name')
      .required('First Name is required'),
    lname: yup
    .string('Enter your Last Name')
    .required('Last Name is required'),
    org: yup
      .string('Enter your Organisation')
      .required('Organisation is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    ph: yup
      .string('Enter your password')
      .min(10, 'Phone number should be of minimum 10 characters length')
      .max(10, 'Phone number should be of maximum 10 characters length')
      .required('Phone is required'),
  });


export default function Form() {

  const history = useHistory();

  const dispatch = useDispatch();

    // subscribing
    const contacts = useSelector(state => state.contacts);

    //action
    const handleSave = (contact) => {

        try{
          setDoc(doc(db,"Contancts",contact.ph),{
            fname : contact.fname,
            lname : contact.lname,
            org : contact.org,
            mail : contact.mail,
            ph : contact.ph,
          });
        }
        catch(e){
          console.log(e);
        }

        dispatch({
            type : 'Add',
            newContact : contact,
        });
    }

   const classes = useStyles();

    const formik = useFormik({
        initialValues: {
        fname : '',
        lname : '',
        org : '',
        email: '',
        ph: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const newContact = {
                fname : values.fname,
                lname : values.lname,
                org : values.org,
                mail : values.email,
                ph : values.ph,
                id : values.ph
            }
            handleSave(newContact);
            history.push('/view');
        },
    });


  return (
    <Container className = {classes.centr}> 
      <Typography variant = "h5">
          CREATE CONTACT
      </Typography>
      <form className={classes.root} noValidate autoComplete="off" onSubmit = {formik.handleSubmit}>
        <TextField
          id="Outlined-basic" label="First Name" name="fname"
          value={formik.values.fname}
          onChange={formik.handleChange}
          error={formik.touched.fname && Boolean(formik.errors.fname)}
          helperText={formik.touched.fname && formik.errors.fname}  
          /> 
        <br />
        <TextField 
          id="Outlined-basic" label="Last Name" name="lname"
          value={formik.values.lname}
          onChange={formik.handleChange}
          error={formik.touched.lname && Boolean(formik.errors.lname)}
          helperText={formik.touched.lname && formik.errors.lname} 
          /> 
        <br />
        <TextField 
          id="Outlined-basic" label="Organisation" name="org"
          value={formik.values.org}
          onChange={formik.handleChange}
          error={formik.touched.org && Boolean(formik.errors.org)}
          helperText={formik.touched.org && formik.errors.org} 
          /> 
        <br />
        <TextField
          id="Outlined-basic" label="Email" name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email} 
          /> 
        <br />
        <TextField 
          id="Outlined-basic" label="Phone" name="ph"
          value={formik.values.ph}
          onChange={formik.handleChange}
          error={formik.touched.ph && Boolean(formik.errors.ph)}
          helperText={formik.touched.ph && formik.errors.ph} 
          /> 
        <br />
       
       <Button type = "submit" style={{backgroundColor: '#0000FF', color: '#FFFFFF'}} >Save</Button>
      </form>
    </Container>
  );
}

