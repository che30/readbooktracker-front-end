import jwtDecode from 'jwt-decode';

const newMeasurementApi = async (pgRead, bookId, date) => {
  const token = JSON.parse(localStorage.getItem('auth_token'));
  const decoded = jwtDecode(token);
  try {
    const rawResponse = await fetch('http://127.0.0.1:3001/measurments', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        pages_read: pgRead,
        book_id: bookId,
        user_id: decoded.user_id,
        date,
      }),
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};
export default newMeasurementApi;
