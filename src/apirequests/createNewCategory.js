import axios from 'axios';

const createNewCategory = async (name) => {
  const user = JSON.parse(localStorage.getItem('data'));
  try {
    const result = await axios.post('http://127.0.0.1:3001/cats', {
      name,
    },
    { headers: { Authorization: `Bearer ${user.auth_token}` } });
    return result;
  } catch (err) {
    return err;
  }
};
export default createNewCategory;
