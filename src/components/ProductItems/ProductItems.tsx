import React from 'react';
import { useAppContext } from '../../context/AppContext';

const ProductItems = () => {
  const { products, status } = useAppContext();

  if (status === 'error') return <h1>Well, I probably messed up</h1>;
  if (status === 'loading') return <h1>Loading...</h1>;

  return (
    <>
      {products.map((product) => {
        return <h1>{product.title}</h1>;
      })}
    </>
  );
};

export default ProductItems;
