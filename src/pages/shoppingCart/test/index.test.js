import {render, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../index';
import {getProducts} from '../../../service';
import mockProducts from '../../../mockData/products.json';

jest.mock('../../../service');

describe('Shopping Cart', () => {
  test('should show shopping cart page', () => {
    getProducts.mockResolvedValue([]);
    const { getByText } = render(<ShoppingCart/>);

    expect(getByText('Shopping Cart')).toBeInTheDocument();
  });

  test('should shpw empty shopping cart, given empty list', () => {
    getProducts.mockResolvedValue([]);
    const { getByText, container } = render(<ShoppingCart/>);
    const products = container.getElementsByClassName('product');

    expect(products).toHaveLength(0);
    expect(getByText('商品名称')).toBeInTheDocument();
    expect(getByText('单价')).toBeInTheDocument();
    expect(getByText('数量')).toBeInTheDocument();
  });

  test('should show products in shopping cart, given is not empty', () => {
    getProducts.mockResolvedValue(mockProducts);
    const {container} = render(<ShoppingCart />);
    const products = container.getElementsByClassName('product');

    waitFor(() => {
      expect(products).toHaveLength(mockProducts.length);
      products.forEach((product, i) => {
        expect(product.getByText(mockProducts[i].name)).toBeInTheDocument();
        expect(product.getByText(mockProducts[i].price)).toBeInTheDocument();
        expect(product.getByText(mockProducts[i].count)).toBeInTheDocument();
      });
    });
  });


});
