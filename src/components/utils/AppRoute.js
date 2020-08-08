import React, { Component } from 'react';
import {
     Route,
     Redirect
} from "react-router-dom";
import AppLayout from '../layouts/AppLayout';
import AuthService from '../../services/AuthService';

const AppRoute = ({ component: Component, layout: Layout, protectedRoute = true, ...rest }) => {
    const authService = AuthService.getInstance();
    return <Route
        {...rest}
        render={props => (
            (protectedRoute === false || (protectedRoute && authService.isAuthenticated())) ? (
                Layout ?
                    <Layout> <Component {...props} /> </Layout>
                :   <AppLayout> <Component {...props} /> </AppLayout>)
            :  <Redirect to='/login' />
        )} >
    </Route>
}

export default AppRoute;