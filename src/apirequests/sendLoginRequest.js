import axios from 'axios';
import backEndUrl from '../helpers/backendLink';

const sendLoginRequest = async (email, password) => {
  let result;
  try {
    result = await axios.post(`${backEndUrl()}/auth/login`, {
      email,
      password,
    });
    localStorage.setItem('auth_token',
      JSON.stringify(result.data.auth_token));
    return result;
  } catch (error) {
    return error;
  }
};
export default sendLoginRequest;
