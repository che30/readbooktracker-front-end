import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CreateRequestMsg = ({ load }) => {
  if (load) {
    return (
      <div className="text-center">
        creating user
      </div>
    );
  }
  return (
    <div />
  );
};
CreateRequestMsg.propTypes = {
  load: PropTypes.bool.isRequired,
};

const mapStateProps = (state) => ({
  load: state.newUserDetails.loading,
});
export default connect(mapStateProps, null)(CreateRequestMsg);
