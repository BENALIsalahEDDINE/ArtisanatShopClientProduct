import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isLoginLivreur } from "../utils/isLogin";

const PrivateRoutePublic = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isLoginLivreur() ? <Redirect to="/login" /> : <Component {...props} />
    }
  />
);

export default PrivateRoutePublic;
