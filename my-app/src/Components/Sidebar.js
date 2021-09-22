import React from "react";
import {makeStyles} from '@material-ui/core';
import { Drawer } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import List from '@material-ui/core/List';
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ContactsIcon from '@material-ui/icons/Contacts';
import {useHistory} from 'react-router-dom';
//import Form from "./Form";

const drawerWidth = 240;

const useStyles = makeStyles({
    page : {
        background : '#f9f9f9',
        widht : '100%'
    },
    drawer:{
        width : drawerWidth,
        paddingTop : "13px",
        paddingLeft : "5px",
    },
    drawerPaper:{
        width : drawerWidth,
    },
    root : {
        display : 'flex',
       
    }
})


export default function Sidebar(){
    const classes = useStyles();
    const history = useHistory();

    const menuItem = [
        {
            text : 'Create Contact',
            icon : <AddIcon color = "secondary"/>,
            path : '/'
        },
        {
            text : 'View Contact',
            icon : <ContactsIcon color = "secondary"/>,
            path : '/view'
        }



    ];

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant = "permanent"
                anchor = "left"
                classes = {{paper : classes.drawerPaper}}    
            >
                <div>
                    <Typography variant = 'h4'>CONTACT</Typography>
                </div>
                {/* list / links*/}
                <List>
                    {
                        menuItem.map(item => (      
                            <ListItem
                                button
                                key = {item.text}
                                onClick = {() => history.push(item.path)}

                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary = {item.text} />
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
            
        </div>
    );
}