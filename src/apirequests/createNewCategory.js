import axios from 'axios';
import data from '../helpers/data';

const createNewCategory = async (name) => {
  const token = data();
  try {
    const result = await axios.post('https://read-book-tracker-front-end.herokuapp.com/api/cats', {
      name,
    },
    { headers: { Authorization: `Bearer ${token}` } });
    return result;
  } catch (err) {
    return err;
  }
};
export default createNewCategory;
