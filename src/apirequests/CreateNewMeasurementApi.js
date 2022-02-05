import jwtDecode from 'jwt-decode';
import data from '../helpers/data';

const newMeasurementApi = async (pgRead, bookId, date) => {
  const token = data();
  const decoded = jwtDecode(token.auth_token);
  try {
    const rawResponse = await fetch('http://127.0.0.1:3001/measurments', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.auth_token}`,
      },
      body: JSON.stringify({
        pages_read: pgRead,
        book_id: bookId,
        user_id: decoded.user_id,
        date,
      }),
    });
    const content = await rawResponse.json();
    console.log(content);
    return content;
  } catch (error) {
    return error;
  }
};
export default newMeasurementApi;
