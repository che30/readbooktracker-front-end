import axios from 'axios';
import data from '../helpers/data';

const getAllCategories = async () => {
  const token = data();
  try {
    const result = await axios.get('https://mysterious-eyrie-66534.herokuapp.com/cats',
      { headers: { Authorization: `Bearer ${token}` } });
    return result;
  } catch (error) {
    return error;
  }
};
export default getAllCategories;
