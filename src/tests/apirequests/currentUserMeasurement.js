import fetchMock from 'jest-fetch-mock';
import CurrentUserMeasurement from '../../apirequests/CurrentUserMeasurement';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it('finds exchange', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    book_id: 1,
    created_at: '2022-03-01T18:02:00.904Z',
    date: '2022-02-28',
    id: 1,
    pages_read: 10,
    updated_at: '2022-03-01T18:02:00.904Z',
    user_id: 1,
  }));

  const result = await CurrentUserMeasurement();

  expect(result.pages_read).toEqual(10);
  expect(fetch).toHaveBeenCalledTimes(1);
});
