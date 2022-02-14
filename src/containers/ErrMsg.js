import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ErrMsg = ({ errors }) => {
  let errMessages;
  if (errors.length > 0) {
    errMessages = errors.split(';');
  }
  if (errors !== '') {
    return (
      <div>
        {errMessages.map((msg) => (
          <div key={msg} className="alert alert-danger text-success text-center">
            <div>
              {msg}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return false;
};
ErrMsg.defaultProps = {
  errors() {},
};
ErrMsg.propTypes = {
  errors: PropTypes.func,
};
const mapStateProps = (state) => ({
  errors: state.ValidateErr.error,
});
export default connect(mapStateProps, null)(ErrMsg);
