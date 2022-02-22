import axios from 'axios';

const getAllCategories = async () => {
  try {
    const result = await axios.get('https://read-book-api.herokuapp.com/cats',
      { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth_token'))}` } });
    return result;
  } catch (error) {
    return error;
  }
};
export default getAllCategories;
