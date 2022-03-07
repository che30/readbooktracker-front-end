import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ErrMsg = ({ errors }) => {
  if (errors !== '') {
    return (
      <div className="mx-auto w-75">
        {errors.map((msg) => (
          <div key={msg} className="text-center">
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
