import axios from 'axios';

const sendLoginRequest = async (email, password) => {
  let result;
  try {
    result = await axios.post('https://mysterious-eyrie-66534.herokuapp.com/auth/login', {
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
