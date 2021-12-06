import React from "react";
import  propTypes  from PropTypes;
import { pagesRead } from "../actions";
import { connect } from "react-redux";
const newMeasurement = ({savePagesRead,pageRead}) =>{
  const handleChange = (e) =>{
    savePagesRead(e.target.value);
  }

const handleSubmit =(e) =>{
  e.preventDefault();
  console.log('it works');
}
  return(<>
  <form>
    <input type="text" value={pageRead} onChange={handleChange}>
    </input>
    <button type="submit" onClick={handleSubmit}>
      submit
    </button>
  </form>
  </>)
}
newMeasurement.defaultProps = {
  savePagesRead() {},
  pageRead: '',
}
newMeasurement.propTypes = {
  savePagesRead: propTypes.func,
  pageRead: propTypes.string
}
const mapStateProps =(state)=>({
  pagesRead: state.measurementReducer
})
const mapDispatchToProps =(dispatch) =>({
  savePagesRead: (pg) => dispatch(pagesRead(pg))
})
export default connect(mapStateProps, mapDispatchToProps)(newMeasurement)