import jwtDecode from 'jwt-decode';

const getAllBooks = async () => {
  const decoded = jwtDecode(JSON.parse(localStorage.getItem('auth_token')));
  try {
    const rawResponse = await fetch(`https://mysterious-eyrie-66534.herokuapp.com/users/${decoded.user_id}/books`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth_token'))}`,
      },
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};
export default getAllBooks;
