import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sendLoginRequest from '../apirequests/sendLoginRequest';
import LoginUser from '../reducers/Login';

const Login = (props) => {
  const {
    email, password, authorization, login,
  } = props;
  const userdata = {
    email: '',
    password: '',
  };
  const handleChange = (e) => {
    if (e.target.id === email) {
      userdata.email = e.target.id;
    } else if (e.target.id === password) {
      userdata.password = e.target.id;
    }
    login(email, password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((email !== '') && (password !== '')) {
      sendLoginRequest(email, password, authorization);
    }
  };
  return (
    <div>
      <form>
        <div>

          <input
            type="email"
            placeholder="email"
            id="user-email"
            value={userdata.email}
            onChange={handleChange}
            className="w-25 input-form text-center"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            id="user-password"
            value={userdata.password}
            onChange={handleChange}
            className="w-25 input-form text-center"
          />
        </div>
        <button type="submit" onSubmit={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
Login.defaultProps = {
  login() {},
  email: '',
  authorization: '',
  password: '',
};
Login.propTypes = {
  login: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  authorization: PropTypes.string,
};
const mapStateProps = (state) => ({
  email: state.LoginUser.email,
  password: state.LoginUser.password,
  authorization: state.LoginUser.authorization,
});
const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(LoginUser(email, password)),
});
export default connect(mapStateProps, mapDispatchToProps)(Login);
