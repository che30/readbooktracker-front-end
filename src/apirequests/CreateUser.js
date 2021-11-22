import axios from 'axios';

const creatUser = async (userCredentials) => {
  const body = {
    username: userCredentials.username,
    email: userCredentials.email,
    password: userCredentials.password,
    password_confirmation: userCredentials.passwordConfirmation,
  };
  try {
    const result = await axios.post('http://127.0.0.1:3001/signup', body);
    console.log(' create user ');
    return result;
  } catch (error) {
    console.log('catch');
    console.log(error.Error.errors);
    return error;
  }
};
export default creatUser;
