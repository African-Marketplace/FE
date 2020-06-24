import React from "react";
import { Route, Redirect } from "react-router-dom";
import CatRender from '../CatRender'

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  // const { name, age } = { name: "bk", age: 51 };

  return (
    <Route
      {...routeProps}
      render={props => {
        // check to see if we think we have a good token
        if (localStorage.getItem("token")) {
          return <CatRender {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
