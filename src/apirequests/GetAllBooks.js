import jwtDecode from 'jwt-decode';

const getAllBooks = async () => {
  const token = JSON.parse(localStorage.getItem('auth_token'));
  const decoded = jwtDecode(token);
  try {
    const rawResponse = await fetch(`http://127.0.0.1:3001/users/:${decoded.user_id}/books`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};
export default getAllBooks;
