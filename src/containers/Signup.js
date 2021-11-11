/* eslint-disable import/no-named-as-default
*/
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setNewUserEmail,
  setNewUserName,
  setNewUserPassword,
  setPasswordConfirmation,
} from '../actions';
import creatUser from '../apirequests/CreateUser';
// import PropTypes from 'prop-types'
const signUp = ({
  userCredentials,
  storeUserEmail,
  storeUserName,
  storeUserPassword,
  storePasswordConfiration,
}) => {
  const handleChange = (e) => {
    const userDetails = {};
    switch (e.target.id) {
      case 'user-name':
        // userDetails.username = e.target.value;
        storeUserName(e.target.value);
        break;
      case 'user-email':
        userDetails.email = e.target.value;
        storeUserEmail(e.target.value);
        break;
      case 'user-password':
        // userDetails.password = e.target.value;
        storeUserPassword(e.target.value);
        break;
      case 'user-password-confirmation':
        // userDetails.passwordConfirmation = e.target.value;
        storePasswordConfiration(e.target.value);
        break;
      default:
    }
  };
  const handleSubmit = (e) => {
    if ((userCredentials.username !== '') && (userCredentials.email !== '')
    && (userCredentials.password !== '') && (userCredentials.passwordConfirmation !== '')) {
      creatUser(userCredentials).then((res) => console.log(res));
      console.log('test succeeded');
    }
    e.preventDefault();
    // typedMovie('');
  };
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
  storeUserEmail() {},
  userCredentials: {},
};
signUp.propTypes = {
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
  userCredentials: state,

});
const mapDispatchToProps = (dispatch) => ({
  // StoreCreatedUserInfo: (details) => dispatch(saveCreatedUser(details)),
  storeUserName: (username) => dispatch(setNewUserName(username)),
  storeUserEmail: (email) => dispatch(setNewUserEmail(email)),
  storeUserPassword: (password) => dispatch(setNewUserPassword(password)),
  storePasswordConfiration: (confirmation) => dispatch(setPasswordConfirmation(confirmation)),
});

export default connect(mapStateProps, mapDispatchToProps)(signUp);
