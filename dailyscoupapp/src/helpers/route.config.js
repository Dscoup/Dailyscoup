import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LocalStorage } from '../helpers/index';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        LocalStorage.getLocOrSesData('ud')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)