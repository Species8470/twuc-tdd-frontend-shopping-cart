import React from 'react';
import './index.css';

const ShoppingCart = () => {
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
          <tr className="table-row">
            <td className="table-cell"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default ShoppingCart;
