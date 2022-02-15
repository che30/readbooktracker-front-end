import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sendLoginRequest from '../apirequests/sendLoginRequest';
import {
  loginSuccessAction,
  loginUserEmail,
  loguserPassword,
  unsucessfulLoginAction,
} from '../actions';
import '../assets/Login.css';

const Login = (props) => {
  const {
    email,
    password,
    setPassword,
    setEmail,
    LogInSuccess,
    isLoggedIn,
    unsucessful,
    unsucessfulState,
  } = props;
  const handleChange = (e) => {
    if (e.target.id === 'user-email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'user-password') {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((email !== '') && (password !== '')) {
      sendLoginRequest(email, password).then((res) => {
        if (res.status && res.status === 200) {
          LogInSuccess(true);
        } else {
          unsucessful(true);
        }
      });
    }
  };
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="Login__main__container">
      <div className="login__alert__msg">
        {unsucessfulState ? (
          <div className="text-center alert alert-danger">
            {' '}
            Invalid combination
            of email and password
            {' '}
          </div>
        ) : <div> </div>}
      </div>
      <div className="form__container">
        <form className=" mx-auto Login__form">
          <div>

            <input
              type="email"
              placeholder="email"
              id="user-email"
              value={email}
              onChange={handleChange}
              className="text-center input-form"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              id="user-password"
              value={password}
              onChange={handleChange}
              className=" text-center input-form"
            />
          </div>
          <button type="submit" className="Login__submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
      <div className="mx-auto new__user__link">
        <span className="text-white"> New user?</span>
        <span>
          <NavLink
            exact
            to="/Signup"
            className="text-decoration-none text-danger"
          >
            {' '}
            SignUp

          </NavLink>
        </span>
      </div>
    </div>
  );
};
Login.defaultProps = {
  setEmail() {},
  setPassword() {},
  LogInSuccess() {},
  unsucessful() {},
  email: '',
  password: '',
};
Login.propTypes = {
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  LogInSuccess: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
  unsucessfulState: PropTypes.bool.isRequired,
  unsucessful: PropTypes.func,
};
const mapStateProps = (state) => ({
  email: state.LoginUser.email,
  password: state.LoginUser.password,
  isLoggedIn: state.LoginUser.loggedIn,
  unsucessfulState: state.LoginUser.unsucceful,
});
const mapDispatchToProps = (dispatch) => ({
  setPassword: (password) => dispatch(loguserPassword(password)),
  setEmail: (email) => dispatch(loginUserEmail(email)),
  LogInSuccess: (status) => dispatch(loginSuccessAction(status)),
  unsucessful: (status) => dispatch(unsucessfulLoginAction(status)),
});
export default connect(mapStateProps, mapDispatchToProps)(Login);
