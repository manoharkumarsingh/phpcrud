import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Registration extends Component {
  render() {
    return (
      <div className="regform">
        <div className="left"></div>
        <div className="formcard card">
          <div className=""></div>
          <form class="form">
            <div align="center">
              <img src="../user.jpg" className="img-circle" height="156" width="156"></img>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="pwd">New password</label>
              <input type="password" className="form-control"/>
            </div>

            <div className="form-group">
              <label htmlFor="pwd">Confirm Password</label>
              <input type="password" className="form-control"/>
            </div>

            <div class="textalign">
              <button type="button" className="btn btn-primary btnwidth "><b>Sign Up</b></button>
            </div>
            <p className="textalign notAccount">Have an account? <Link to={{
              pathname: `/login`
              }}><b>Log In</b></Link>
            </p>  
          </form>
        </div>
        <div className="right"></div>
        </div>
    );
  }
}

export default Registration;
