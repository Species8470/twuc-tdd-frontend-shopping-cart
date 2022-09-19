import { getData } from '../../http/http';
import { getProducts } from '../index';
import mockProducts from '../../../mockData/products.json';

jest.mock('../../http/http');

describe('service', () => {
  describe('get products', () => {
    it('should return products', async () => {
      getData.mockResolvedValue({products: mockProducts});
      const actual = await getProducts();

      expect(actual).toEqual(mockProducts);
    });
  });
});
