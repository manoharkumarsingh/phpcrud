import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { user } from "../../store/actions/user";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      email : "",
      mono : "",
      password : "",
      cpassword : ""
    }
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSignup(){
   this.props.userSignup(this.state);
   this.setState({
      name : "",
      email : "",
      mono : "",
      password : "",
      cpassword : ""
    })
  }
  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <div className="regform">
        <div className="left"></div>
        <div className="formcard card">
          <div className=""></div>
          <form className="form">
            <div align="center">
              <img src="../user.jpg" className="img-circle" height="156" width="156"></img>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="mono">Mobile No</label>
              <input type="text" className="form-control" name="mono" value={this.state.mono} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Confirm Password</label>
              <input type="password" className="form-control" name="cpassword" value={this.state.cpassword} onChange={this.handleChange}/>
            </div>
            <div className="checkbox">
              <label><input type="checkbox" />I agree all statements in Terms of Service</label>
            </div>
            <div className="textalign">
              <button type="button" className="btn btn-primary btnwidth " onClick={this.handleSignup}><b>Sign Up</b></button>
            </div>
            <p className="textalign marginTop">Have an account? <Link to={{
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

function mapStateToProps(state) {
  return {
      // skill: state.Skill.courses
  };
}
const mapDispatchToProps = dispatch => ({
  userSignup: async (data) => dispatch(user(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Registration);