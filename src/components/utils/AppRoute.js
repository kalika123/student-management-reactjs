import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";
import AppLayout from '../layouts/AppLayout';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return <Route
        {...rest}
        render={props => (
            Layout ?
                <Layout> <Component {...props} /> </Layout>
            :   <AppLayout> <Component {...props} /> </AppLayout>
        )} >
    </Route>
}

export default AppRoute;