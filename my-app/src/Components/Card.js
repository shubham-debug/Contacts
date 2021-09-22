import React from "react";
import { Card, IconButton, Typography } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons"

export default function ContactCard({contact,handleDelete}){

    //todo this functionality
    const deleteContact = () =>{
        handleDelete(contact.id);
    }

    return (
        <div>
            <Card>
                <CardHeader 
                 action = {
                     <IconButton onClick={deleteContact}>
                         <DeleteOutlined id={contact.id}/>
                    </IconButton>
                 }
                 title = {contact.fname +" "+ contact.lname}
                 subheader = {contact.mail +", "+ contact.org}
                />
                <CardContent>
                    <Typography variant="h6" color="textPrimary">
                        Phone : {contact.ph}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}