/* eslint-disable import/no-named-as-default
*/
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  loginUserEmail,
  logUserAuth,
  loguserPassword,
  setNewUserEmail,
  setNewUserName,
  setNewUserPassword,
  setPasswordConfirmation,
} from '../actions';
import creatUser from '../apirequests/CreateUser';
import sendLoginRequest from '../apirequests/sendLoginRequest';
// import PropTypes from 'prop-types'
const signUp = ({
  userCredentials,
  storeUserEmail,
  storeUserName,
  storeUserPassword,
  storePasswordConfiration,
  loguserEmail,
  logPassword,
  logUserAuth,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleChange = (e) => {
    switch (e.target.id) {
      case 'user-name':
        storeUserName(e.target.value);
        break;
      case 'user-email':
        storeUserEmail(e.target.value);
        break;
      case 'user-password':
        storeUserPassword(e.target.value);
        break;
      case 'user-password-confirmation':
        storePasswordConfiration(e.target.value);
        break;
      default:
    }
  };
  const handleSubmit = (e) => {
    if ((userCredentials.username !== '') && (userCredentials.email !== '')
     && (userCredentials.password !== '') && (userCredentials.passwordConfirmation !== '')) {
      creatUser(userCredentials).then((result) => {
        if (result.data.status === 200) {
          loguserEmail(userCredentials.email);
          logPassword(userCredentials.password);
          logUserAuth(result.data.auth_token);
          sendLoginRequest(userCredentials.email,
            userCredentials.password).then((result) => {
            localStorage.setItem('Authorization',
              JSON.stringify(result.data.auth_token));
            setIsLoggedIn(true);
          });
        }
        console.log('before results');
        console.log(result.data);
        // console.log('test', result.data.auth_token);
      });
    }

    e.preventDefault();
    // typedMovie('');
  };
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <form>
        <div>
          <input
            type="input"
            placeholder="username"
            id="user-name"
            value={userCredentials.username}
            onChange={handleChange}
            className="w-25 input-form text-center"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            id="user-email"
            value={userCredentials.email}
            onChange={handleChange}
            className="w-25 input-form text-center"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            id="user-password"
            value={userCredentials.password}
            onChange={handleChange}
            className="w-25 input-form text-center"
          />
        </div>
        <input
          type="password"
          placeholder="password confirmation"
          id="user-password-confirmation"
          value={userCredentials.passwordConfirmation}
          onChange={handleChange}
          className="w-25 input-form text-center"
        />
        <div>
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </form>

    </div>
  );
};
signUp.defaultProps = {
  storeUserName() {},
  storeUserPassword() {},
  storePasswordConfiration() {},
  loguserEmail() {},
  storeUserEmail() {},
  logPassword() {},
  logUserAuth() {},
  userCredentials: {},

};
signUp.propTypes = {
  logUserAuth: PropTypes.func,
  logPassword: PropTypes.func,
  loguserEmail: PropTypes.func,
  storeUserName: PropTypes.func,
  storeUserPassword: PropTypes.func,
  storeUserEmail: PropTypes.func,
  storePasswordConfiration: PropTypes.func,
  userCredentials: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    passwordConfirmation: PropTypes.string,
  }),
};
const mapStateProps = (state) => ({
  userCredentials: state.newUserDetails,

});
const mapDispatchToProps = (dispatch) => ({
  // StoreCreatedUserInfo: (details) => dispatch(saveCreatedUser(details)),
  logUserAuth: (auth) => dispatch(logUserAuth(auth)),
  logPassword: (password) => dispatch(loguserPassword(password)),
  loguserEmail: (details) => dispatch(loginUserEmail(details)),
  storeUserName: (username) => dispatch(setNewUserName(username)),
  storeUserEmail: (email) => dispatch(setNewUserEmail(email)),
  storeUserPassword: (password) => dispatch(setNewUserPassword(password)),
  storePasswordConfiration: (confirmation) => dispatch(setPasswordConfirmation(confirmation)),
});

export default connect(mapStateProps, mapDispatchToProps)(signUp);
