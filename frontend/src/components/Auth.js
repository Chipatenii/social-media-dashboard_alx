import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authService from '../services/authService';

const Auth = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authService.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default Auth;
