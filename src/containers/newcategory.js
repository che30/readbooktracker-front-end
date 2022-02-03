import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { NewCategoryAction, ValidateEr } from '../actions';
import createNewCategory from '../apirequests/createNewCategory';
import ErrMsg from './ErrMsg';

const NewCategory = ({
  savecatname,
  categoryName,
  errMsg,
}) => {
  const history = useHistory();
  const handleChange = (e) => {
    savecatname(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewCategory(categoryName).then((res) => {
      if (res.status === 200) {
        errMsg(res.data);
      }
      savecatname('');
    });
  };
  return (
    <div>
      <div className="mt-3">
        <ErrMsg />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="input"
          placeholder="name"
          onChange={handleChange}
          name="category"
          value={categoryName}
        />
        <button type="submit">
          submit
        </button>
      </form>
      <button type="button" onClick={history.goBack}>Back</button>
    </div>
  );
};
NewCategory.defaultProps = {
  savecatname() {},
  errMsg() {},
  categoryName: '',
};
NewCategory.propTypes = {
  savecatname: PropTypes.func,
  categoryName: PropTypes.string,
  errMsg: PropTypes.func,
};
const mapStateProps = (state) => ({
  categoryName: state.saveCategoryName.categoryName,
});
const mapDispatchToProps = (dispatch) => ({
  savecatname: (catname) => dispatch(NewCategoryAction(catname)),
  errMsg: (msg) => dispatch(ValidateEr(msg)),
});
export default connect(mapStateProps, mapDispatchToProps)(NewCategory);
