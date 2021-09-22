import { makeStyles } from "@material-ui/core";
//import { mergeClasses } from "@material-ui/styles";
import React from "react";
import Sidebar from "./Sidebar";

const useStyles = makeStyles({
    page : {
        background : '#f9f9f9',
        width: '100%',
        height: '100%',
    },
    root : {
        display : 'flex',
    }
})

export default function Layout({ children }){
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Sidebar />
            <div className={classes.page}>
                {children}
            </div>
            
        </div>
    );
}