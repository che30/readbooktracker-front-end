import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ErrMsg = ({ errors }) => {
  console.log(errors);
  if (errors !== '') {
    return (
      <div>
        {errors}
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
