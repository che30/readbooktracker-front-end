import axios from 'axios';
import data from '../helpers/data';

const createNewCategory = async (name) => {
  const token = data();
  try {
    const result = await axios.post('http://127.0.0.1:3001/cats', {
      name,
    },
    { headers: { Authorization: `Bearer ${token}` } });
    return result;
  } catch (err) {
    return err;
  }
};
export default createNewCategory;
