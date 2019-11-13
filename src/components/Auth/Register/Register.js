import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../../actions/auth";

import "../Login/login.css";

import BenshadaForm from "../../BenshadaForm/BenshadaForm";

class Register extends React.Component {
  render() {
    if (this.props.isSignedIn === true) {
      return <Redirect to={{
        pathname: '/role',
        state: { from: this.props.location }
      }} />;
    }
    return (
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100">
          <div className="col col-md-3 col-lg-6 d-none d-md-block h-100 login-left" />
          <div className="col col-md-9 col-lg-6">
            <h3 className="mb-2 text-center pt-5">
              Register on Benshada Place
            </h3>
            <p className="lead mb-4 text-center">
              Or return{" "}
              <Link className="text-primary" to="/">
                home
              </Link>
            </p>

            <BenshadaForm
              onSubmitForm={this.props.register}
              className="form px-4 px-md-5 mx-md-3"
              btn="Register"
              type="register"
            />

            <p className="text-muted text-left px-4 px-md-5 mx-md-3 my-3">
              Have an account?
              <br />
              <Link to="/login">Login</Link>
            </p>
            {/* <p className="text-center my-3">
            <Link to="#" className="text-primary">Forgot password or email?</Link>
          </p> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
