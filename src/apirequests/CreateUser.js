import axios from 'axios';

const creatUser = async (userCredentials) => {
  console.log('hit the create user');
  const result = await axios.post('http://127.0.0.1:3001/signup', {
    username: userCredentials.username,
    email: userCredentials.email,
    password: userCredentials.password,
    password_digest: userCredentials.passwordConfirmation,
  });
  return result;
};
export default creatUser;
