import axios from 'axios';

const sendLoginRequest = async (email, password) => {
  let result;
  try {
    // http://127.0.0.1:3001
    // https://read-book-api.herokuapp.com
    result = await axios.post('https://read-book-api.herokuapp.com/auth/login', {
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
