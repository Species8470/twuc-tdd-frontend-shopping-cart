import {getByText, render, waitFor} from '@testing-library/react';
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

  test('should show empty shopping cart, given empty list', () => {
    getProducts.mockResolvedValue([]);
    const { getByText, container } = render(<ShoppingCart/>);
    const products = container.getElementsByClassName('product');

    expect(products).toHaveLength(0);
    expect(getByText('商品名称')).toBeInTheDocument();
    expect(getByText('单价')).toBeInTheDocument();
    expect(getByText('数量')).toBeInTheDocument();
  });

  test('should show products in shopping cart, given is not empty', async () => {
    getProducts.mockResolvedValue(mockProducts);
    const {container} = render(<ShoppingCart/>);

    await waitFor(() => {
      const products = Array.from(container.getElementsByClassName('product'));
      expect(products).toHaveLength(mockProducts.length);
      products.forEach((product, i) => {
        expect(getByText(product, mockProducts[i].name)).toBeInTheDocument();
        expect(getByText(product, mockProducts[i].price)).toBeInTheDocument();
        expect(getByText(product, mockProducts[i].count)).toBeInTheDocument();
      });
    });
  });

  test('should display total price and purchase button', () => {
    getProducts.mockResolvedValue(mockProducts);
    const {getByText, getByRole} = render(<ShoppingCart/>);

    expect(getByText('支 付')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });
});
