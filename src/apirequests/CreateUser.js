import axios from 'axios';

const creatUser = async (userCredentials) => {
  const body = {
    username: userCredentials.username,
    email: userCredentials.email,
    password: userCredentials.password,
    password_confirmation: userCredentials.passwordConfirmation,
  };
  try {
    const result = await axios.post('https://read-book-tracker-front-end.herokuapp.com/signup', body);
    return result;
  } catch (error) {
    return error;
  }
};
export default creatUser;
