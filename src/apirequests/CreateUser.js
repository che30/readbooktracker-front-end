import axios from 'axios';
import backEndUrl from '../helpers/backendLink';

const creatUser = async (userCredentials) => {
  const body = {
    username: userCredentials.username,
    email: userCredentials.email,
    password: userCredentials.password,
    password_confirmation: userCredentials.passwordConfirmation,
  };
  try {
    const result = await axios.post(`${backEndUrl()}/signup`, body);
    return result;
  } catch (error) {
    return error;
  }
};
export default creatUser;
