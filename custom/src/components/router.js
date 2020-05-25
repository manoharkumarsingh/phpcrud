import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./Registration/signup";
import Login from "./Login/login";
import Forgetpassword from "./Forget-password/forget-password";

import App from "../App";
const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgetpassword" component={Forgetpassword} />
        {/* <Route path="*" exact={true} component={notFound} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);
export default Router;