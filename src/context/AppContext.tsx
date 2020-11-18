import React, { FC, ReactNode, useContext } from 'react';

import { TInitialContext } from '../types/types';
import { useFetchProducts } from './../hooks/useFetchProducts';

const initialContext: TInitialContext = {
  products: [],
  status: 'idle',
};

const AppContext = React.createContext<TInitialContext>(initialContext);

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const { products, status } = useFetchProducts(
    'https://fakestoreapi.com/products?limit=10'
  );

  return (
    <AppContext.Provider
      value={{
        products,
        status,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
