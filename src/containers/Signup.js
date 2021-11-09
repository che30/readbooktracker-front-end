/* eslint-disable import/no-named-as-default
*/
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newUserAction } from '../actions';
import creatUser from '../apirequests/CreateUser';
// import PropTypes from 'prop-types'
const signUp = ({ userCredentials, storeUserInfo }) => {
  const handleChange = (e) => {
    const userDetails = {};
    switch (e.target.id) {
      case 'user-name':
        userDetails.username = e.target.value;
        break;
      case 'user-email':
        userDetails.email = e.target.value;
        break;
      case 'user-password':
        userDetails.password = e.target.value;
        break;
      case 'user-password-confirmation':
        userDetails.passwordConfirmation = e.target.value;
        break;
      default:
        return;
    }
    storeUserInfo(userDetails);
  };
  const handleSubmit = () => {
    if ((userCredentials.username !== '') && (userCredentials.email !== '')
    && (userCredentials.password !== '') && (userCredentials.passwordConfirmation !== '')) {
      creatUser(userCredentials).then((res) => console.log(res));
      console.log('test succeeded');
    }
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
  storeUserInfo() {},
  userCredentials: {},
};
signUp.propTypes = {
  storeUserInfo: PropTypes.func,
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
  storeUserInfo: (userinfo) => dispatch(newUserAction(userinfo)),
});

export default connect(mapStateProps, mapDispatchToProps)(signUp);
