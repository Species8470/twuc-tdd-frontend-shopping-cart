import React, {useEffect, useState} from 'react';
import './index.css';
import {getProducts} from '../../service';

const ShoppingCart = () => {

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getProducts().then(products => {
      setProducts(products);
      calculatePrice(products);
    });
  }, []);

  const calculatePrice = (products) => {
    let price = 0;
    products.forEach(product => price += product.price);
    setTotal(price);
  };

  return (
    <div className="wrapper">
      <div className="title">Shopping Cart</div>
      <table className="table">
        <thead className="table-header">
          <tr className="table-row">
            <th className="table-cell align-left">商品名称</th>
            <th className="table-cell align-right">单价</th>
            <th className="table-cell align-right">数量</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="table-row product">
              <td className="table-cell align-left">{product.name}</td>
              <td className="table-cell align-right">{product.price}</td>
              <td className="table-cell align-right">{product.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="operation">
        <h2 className="total">合计: {total}</h2>
        <button className="purchase">支 付</button>
      </section>
    </div>
  );
};


export default ShoppingCart;
