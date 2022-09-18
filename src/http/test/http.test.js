import axios from 'axios';
import {getData} from '../http';

jest.mock('axios');

describe('http', () => {
  describe('get data', () => {
    it('should retrieve data', async () => {
      const mockData = {
        '/': {
          'get': {
            'products': [
              {'id': 1, 'name': '小米手环', 'price': 299.00, 'count': 1},
              {'id': 2, 'name': '任天堂 Nintendo Switch', 'price': 2099.00, 'count': 2},
              {'id': 3, 'name': 'SONY WH-1000XM4 无线智能降噪耳机', 'price': 2099.00, 'count': 1},
              {'id': 4, 'name': 'iPhone 13 256GB', 'price': 6799.00, 'count': 1}
            ]
          },
          'post': {'orderId': '1234567', 'status': 'PAID'}
        }
      };
      axios.get.mockResolvedValue({data: mockData});
      const actual = await getData();

      expect(axios.get).toBeCalledWith('http://localhost:8000/');
      expect(actual).toEqual(mockData);
    });
  });
});
