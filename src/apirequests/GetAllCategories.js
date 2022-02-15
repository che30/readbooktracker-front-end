import axios from 'axios';
import data from '../helpers/data';

const getAllCategories = async () => {
  const token = data();
  try {
    const result = await axios.get('http://127.0.0.1:3001/cats',
      { headers: { Authorization: `Bearer ${token}` } });
    return result;
  } catch (error) {
    return error;
  }
};
export default getAllCategories;
