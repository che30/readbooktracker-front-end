/* eslint-disable import/no-named-as-default
*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  accountBeignCreated,
  LogInLogOutState,
  setNewUserEmail,
  setNewUserName,
  setNewUserPassword,
  setPasswordConfirmation,
  ValidateEr,
} from '../actions';
import creatUser from '../apirequests/CreateUser';
import sendLoginRequest from '../apirequests/sendLoginRequest';
import CreationRequestMsg from './CreationRequestMsg';
import ErrMsg from './ErrMsg';

const signUp = ({
  userCredentials,
  storeUserEmail,
  storeUserName,
  storeUserPassword,
  storePasswordConfiration,
  creatMsg,
  errMsg,
  updateStatus,
  isLoggedIn,
}) => {
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
    creatUser(userCredentials).then((result) => {
      if (result.status === 201) {
        creatMsg(true);
        sendLoginRequest(userCredentials.email,
          userCredentials.password).then(() => {
          updateStatus(true);
          creatMsg(false);
        });
      }
      if (result.status === 200) {
        errMsg(result.data);
      }
    });

    e.preventDefault();
    // typedMovie('');
  };
  useEffect(() => {
    const cred = JSON.parse(localStorage.getItem('data'));
    if ((cred !== null) && Object.keys(cred).length !== 0) {
      updateStatus(true);
    }
  });
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div>
        <CreationRequestMsg />
      </div>
      <div>
        <ErrMsg />
      </div>
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

    </div>
  );
};
signUp.defaultProps = {
  storeUserName() {},
  storeUserPassword() {},
  storePasswordConfiration() {},
  storeUserEmail() {},
  creatMsg() {},
  errMsg() {},
  updateStatus() {},
  userCredentials: {},

};
signUp.propTypes = {
  LoginUser: PropTypes.func,
  storeUserName: PropTypes.func,
  storeUserPassword: PropTypes.func,
  storeUserEmail: PropTypes.func,
  storePasswordConfiration: PropTypes.func,
  creatMsg: PropTypes.func,
  errMsg: PropTypes.func,
  updateStatus: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
  userCredentials: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    passwordConfirmation: PropTypes.string,
  }),
};
const mapStateProps = (state) => ({
  userCredentials: state.newUserDetails,
  isLoggedIn: state.LoginUser.loggedIn,

});
const mapDispatchToProps = (dispatch) => ({
  updateStatus: (status) => dispatch(LogInLogOutState(status)),
  storeUserName: (username) => dispatch(setNewUserName(username)),
  storeUserEmail: (email) => dispatch(setNewUserEmail(email)),
  storeUserPassword: (password) => dispatch(setNewUserPassword(password)),
  storePasswordConfiration: (confirmation) => dispatch(setPasswordConfirmation(confirmation)),
  creatMsg: (msg) => dispatch(accountBeignCreated(msg)),
  errMsg: (msg) => dispatch(ValidateEr(msg)),
});

export default connect(mapStateProps, mapDispatchToProps)(signUp);
