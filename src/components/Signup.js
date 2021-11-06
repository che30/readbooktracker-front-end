import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newUserAction } from '../actions';
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
        console.log(userDetails);
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
            type="input"
            placeholder="email"
            id="user-email"
            value={userCredentials.email}
            onChange={handleChange}
            className="w-25 input-form text-center"
          />
        </div>
        <div>
          <input
            type="input"
            placeholder="password"
            id="user-password"
            value={userCredentials.password}
            onChange={handleChange}
            className="w-25 input-form text-center"
          />
        </div>
        <input
          type="input"
          placeholder="password confirmation"
          id="user-password-confirmation"
          value={userCredentials.passwordConfirmation}
          onChange={handleChange}
          className="w-25 input-form text-center"
        />
        <div>
          {/* <button>
            {' '}
            submit
          </button> */}
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
  // getMovie: (movie) => dispatch(SearchMovie(movie)),
  storeUserInfo: (userinfo) => dispatch(newUserAction(userinfo)),
});

export default connect(mapStateProps, mapDispatchToProps)(signUp);
