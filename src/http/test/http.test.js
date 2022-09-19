import axios from 'axios';
import {getData} from '../http';
import mockProducts from '../../../mockData/products.json';

jest.mock('axios');

describe('http', () => {
  describe('get data', () => {
    it('should retrieve data', async () => {
      const mockData = {
        '/': {
          'get': {
            'products': mockProducts
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
