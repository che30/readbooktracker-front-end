import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CreateRequestMsg = ({ load }) => {
  console.log(load);
  if (load) {
    return (
      <div>
        creating user
      </div>
    );
  }
  return (
    <div className="d-none">
      nothing
    </div>
  );
};
CreateRequestMsg.propTypes = {
  load: PropTypes.bool.isRequired,
};

const mapStateProps = (state) => ({
  load: state.newUserDetails.loading,
});
export default connect(mapStateProps, null)(CreateRequestMsg);
