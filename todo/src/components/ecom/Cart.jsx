import React, { useContext } from 'react';
import { EcomContext } from './DataProvider';

export default function Cart() {
  const { cart } = useContext(EcomContext);
  const products = Object.values(cart)
  return (
    <div>
      <h1>Cart</h1>
      {products.length === 0 ? (
        <p>No products In Cart</p>
      ) : (
        products.map(({ product, quantity }) => (
          <li>
            {product.product} : {quantity}
          </li>
        ))
      )}
    </div>
  );
}
