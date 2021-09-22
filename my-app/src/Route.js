import React from "react";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import View from "./Components/Contacts";
import Formm from "./Components/Demo";
import Form from "./Components/Form";
import Layout from "./Components/Layout";

export default function Router(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component = {Formm} />
                    <Route path='/view' component = {View} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}