import axios from 'axios';

const getAllCategories = async () => {
  const data = JSON.parse(localStorage.getItem('data'));
  try {
    const result = await axios.get('http://127.0.0.1:3001/cats',
      { headers: { Authorization: `Bearer ${data.auth_token}` } });
    return result;
  } catch (error) {
    return error;
  }
};
export default getAllCategories;
