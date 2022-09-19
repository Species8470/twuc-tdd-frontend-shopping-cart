import { getData } from '../../http/http';
import { getProducts } from '../index';

jest.mock('../../http/http');

describe('service', () => {
  describe('get products', () => {
    it('should return products', async () => {
      const mockProducts = [{'id': 1, 'name': '小米手环', 'price': 299.00, 'count': 1},
        {'id': 2, 'name': '任天堂 Nintendo Switch', 'price': 2099.00, 'count': 2},
        {'id': 3, 'name': 'SONY WH-1000XM4 无线智能降噪耳机', 'price': 2099.00, 'count': 1},
        {'id': 4, 'name': 'iPhone 13 256GB', 'price': 6799.00, 'count': 1}];
      getData.mockResolvedValue({products: mockProducts});
      const actual = await getProducts();

      expect(actual).toEqual(mockProducts);
    });
  });
});