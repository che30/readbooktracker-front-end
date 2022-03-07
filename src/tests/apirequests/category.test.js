import axios from 'axios';
import getAllCategories from '../../apirequests/GetAllCategories';

jest.mock('axios');
it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue(
    {
      data: [{
        id: 1,
        name: 'fiction',
        created_at: '2022-03-01T17:55:05.669Z',
        updated_at: '2022-03-01T17:55:05.669Z',
      }, {
        id: 2,
        name: 'classics',
        created_at: '2022-03-01T17:55:05.669Z',
        updated_at: '2022-03-01T17:55:05.669Z',
      }],
    },
  );

  const result = await getAllCategories();
  expect(result.data[0].name).toEqual('fiction');
  expect(result.data[1].name).toEqual('classics');
});
