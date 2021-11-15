import axios from 'axios';

const creatUser = async (userCredentials) => {
  try {
    const result = await axios.post('http://127.0.0.1:3001/signup', {
      username: userCredentials.username,
      email: userCredentials.email,
      password: userCredentials.password,
      password_confirmation: userCredentials.passwordConfirmation,
    });
    return result;
  } catch (error) {
    return error;
  }
};
export default creatUser;
