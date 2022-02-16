import axios from 'axios';

const getAllCategories = async () => {
  try {
    const result = await axios.get('https://mysterious-eyrie-66534.herokuapp.com/cats',
      { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth_token'))}` } });
    return result;
  } catch (error) {
    return error;
  }
};
export default getAllCategories;
