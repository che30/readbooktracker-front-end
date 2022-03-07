import axios from 'axios';
import backEndUrl from '../helpers/backendLink';

const getAllCategories = async () => {
  try {
    const result = await axios.get(`${backEndUrl()}/api/categories`,
      { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth_token'))}` } });
    return result;
  } catch (error) {
    return error;
  }
};
export default getAllCategories;
