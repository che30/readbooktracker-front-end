import React from "react";
import  propTypes  from PropTypes;
import { pagesRead } from "../actions";
import { connect } from "react-redux";
const newMeasurement = ({savePagesRead}) =>{

  return(<>
  <form>
    <input type="text" value={pageRead} onChange={handleChange}>
    </input>
  </form>
  </>)
}
newMeasurement.defaultProps = {
  savePagesRead() {},
}
newMeasurement.propTypes = {
  savePagesRead: propTypes.func,
}
const mapDispatchToProps =(dispatch) =>({
  savePagesRead: (pg) => dispatch(pagesRead(pg))
})
export default connect(mapDispatchToProps)