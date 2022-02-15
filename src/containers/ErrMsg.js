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
      <div className="mx-auto w-75">
        {errMessages.map((msg) => (
          <div key={msg} className="text-center d-inline-flex">
            <div className="alert alert-danger text-success ">
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
