import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, Container, Typography} from "@material-ui/core";
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import ContactCard from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { collection, getDocs , deleteDoc , doc } from "firebase/firestore"; 
import { db } from '../Firebase';
import { async } from '@firebase/util';



async function datum(){
    const querySnapshot = await getDocs(collection(db,"Contancts"));

    const contacts = [];

    querySnapshot.forEach(element => {
        //console.log(element.data());
        contacts.push(element.data);
    });

    const handleDelete = (id) => {
        // console.log(id);
        // console.log(typeof(id));
    }
    return contacts;
}


// add validation, states, and many more thing

export default function View() {

    //const dispatch = useDispatch();

    // subscribing
    //const contacts = useSelector(state => state.contacts);

    const [contacts,setContacts] = useState([]);
    const fetchContacts = async () => {
        const querySnapshot = await getDocs(collection(db,"Contancts"));
        const Elements = [];
        querySnapshot.forEach(element => {
            const contact = element.data();
            contact.id = element.id;
            Elements.push(contact);
        });
        setContacts(Elements);
    }
    useEffect(() => {
        fetchContacts();
      },[]);
    

    //action
    const handleDelete = async (id) => {
        console.log(id);
        // console.log(typeof(id));
        // dispatch({
        //     type : 'delete',
        //     id : {id}
        // });
        await deleteDoc(doc(db, "Contancts", id));
        fetchContacts();
    }


    return (
        <Container>
            <Grid container spacing={3}>
                {contacts.map(contact => (
                  <Grid item key={contact.id} xs={12}  sm={6} md={3} lg={4}>  
                    <Paper>
                        <ContactCard contact={contact} handleDelete={handleDelete} />
                    </Paper>
                  </Grid>
                ))}
            </Grid>
        </Container>
    );
}
