import React from 'react';
import { useAppContext } from '../../context/AppContext';
import ProductItem from '../ProductItem/ProductItem';
import './ProductItems.styles.css';

const ProductItems = () => {
  const { products, status } = useAppContext();

  if (status === 'error') return <h1>Well, I probably messed up</h1>;
  if (status === 'loading') return <h1>Loading...</h1>;

  return (
    <main className='product-items-container'>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </main>
  );
};

export default ProductItems;
