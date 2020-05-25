import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <div className="regform">
        <div className="left"></div>
        <div className="formcard card">
          <div className=""></div>
          <form className="form">
            <div align="center"><img src="../user.jpg" className="img-circle" height="156" width="156"></img></div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <input type="password" className="form-control"/>
            </div>
            <div className="checkbox">
              <label><input type="checkbox" />Remember Me</label>
            </div>
            <div className="textalign">
              <button type="button" className="btn btn-primary btnwidth"><b>Login</b></button>
            </div>
            <div className="marginTop">
              <div className="textalign">
                Don't have an account? 
                 <Link
                    className=""
                    to={{
                      pathname: `/signup`
                    }}
                  >
                    <b>Sign Up</b>
                </Link>
              </div>
              <div className="textalign">
              <Link
                  className=""
                  to={{
                    pathname: `/forgetpassword`
                  }}
                >
                  <b>Forgot your password?</b>
              </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="right"></div>
        </div>
    );
  }
}

export default Login;
