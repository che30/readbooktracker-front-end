import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sendLoginRequest from '../apirequests/sendLoginRequest';
import { LogInLogOutState, loginUserEmail, loguserPassword } from '../actions';
import data from '../helpers/data';

const Login = (props) => {
  const {
    email,
    password,
    setPassword,
    setEmail,
    isLoggedIn,
    logIn,
  } = props;
  const token = data();
  if (token.auth_token) {
    logIn(true);
  }
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
        if (res.status === 200) {
          logIn(true);
        }
      });
    }
  };
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <form>
        <div>

          <input
            type="email"
            placeholder="email"
            id="user-email"
            value={email}
            onChange={handleChange}
            className="w-25 input-form text-center"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            id="user-password"
            value={password}
            onChange={handleChange}
            className="w-25 input-form text-center"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
Login.defaultProps = {
  setEmail() {},
  setPassword() {},
  logIn() {},
  email: '',
  password: '',
};
Login.propTypes = {
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  logIn: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
};
const mapStateProps = (state) => ({
  email: state.LoginUser.email,
  password: state.LoginUser.password,
  isLoggedIn: state.LoginUser.loggedIn,
});
const mapDispatchToProps = (dispatch) => ({
  setPassword: (password) => dispatch(loguserPassword(password)),
  setEmail: (email) => dispatch(loginUserEmail(email)),
  logIn: (status) => dispatch(LogInLogOutState(status)),
});
export default connect(mapStateProps, mapDispatchToProps)(Login);
