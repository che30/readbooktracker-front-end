import axios from 'axios';

const getAllCategories = async () => {
  try {
    const result = await axios.get('https://read-book-tracker-front-end.herokuapp.com/api/cats',
      { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth_token'))}` } });
    return result;
  } catch (error) {
    return error;
  }
};
export default getAllCategories;
