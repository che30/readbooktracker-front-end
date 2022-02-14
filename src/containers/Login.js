import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sendLoginRequest from '../apirequests/sendLoginRequest';
import {
  loginSuccessAction, loginUserEmail, loguserPassword, unsucessfulLoginAction, ValidateEr,
} from '../actions';
import CreationRequestMsg from './CreationRequestMsg';

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
    errMsg,
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
          errMsg(res.data);
          unsucessful(true);
        }
      });
    }
  };
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div>
        <CreationRequestMsg />
      </div>
      <div>
        {unsucessfulState ? (
          <div className="text-center">
            {' '}
            Invalid combination
            of email and password
            {' '}
          </div>
        ) : <div> </div>}
      </div>
      <form className="w-75 mx-auto mt-3">
        <div>

          <input
            type="email"
            placeholder="email"
            id="user-email"
            value={email}
            onChange={handleChange}
            className="w-100 input-form text-center"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            id="user-password"
            value={password}
            onChange={handleChange}
            className="w-100 input-form text-center"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      <div>
        <span> New user?</span>
        <span>
          <NavLink
            exact
            to="/Signup"
            className="text-decoration-none"
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
  errMsg() {},
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
  errMsg: PropTypes.func,
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
  errMsg: (msg) => dispatch(ValidateEr(msg)),
});
export default connect(mapStateProps, mapDispatchToProps)(Login);
