import axios from 'axios';

const queryAndCountCategories = async () => {
  const data = JSON.parse(localStorage.getItem('data'));
  try {
    const result = await axios.get('https://mysterious-eyrie-66534.herokuapp.com/cats',
      { headers: { Authorization: `Bearer ${data.auth_token}` } });
    return result;
  } catch (error) {
    return error;
  }
};
export default queryAndCountCategories;
