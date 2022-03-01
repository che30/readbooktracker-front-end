import axios from 'axios';
import data from '../helpers/data';
import backEndUrl from '../helpers/backendLink';

const createNewCategory = async (name) => {
  const token = data();
  try {
    // https://read-book-api.herokuapp.com/ read-book-tracker-front-end
    const result = await axios.post(`${backEndUrl()}/api/categories`, {
      name,
    },
    { headers: { Authorization: `Bearer ${token}` } });
    return result;
  } catch (err) {
    return err;
  }
};
export default createNewCategory;
