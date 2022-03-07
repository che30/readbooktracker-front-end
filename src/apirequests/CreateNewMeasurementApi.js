import jwtDecode from 'jwt-decode';
import data from '../helpers/data';
import backEndUrl from '../helpers/backendLink';

const newMeasurementApi = async (pgRead, bookId, date) => {
  const token = data();
  const decoded = jwtDecode(token);
  try {
    const rawResponse = await fetch(`${backEndUrl()}/api/user-measurement`, {
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
