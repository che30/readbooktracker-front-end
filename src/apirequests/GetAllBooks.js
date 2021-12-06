const getAllBooks = async () => {
  const data = JSON.parse(localStorage.getItem('data'));
  try {
    const rawResponse = await fetch('http://127.0.0.1:3001/allbooks', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.auth_token}`,
      },
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};
export default getAllBooks;
