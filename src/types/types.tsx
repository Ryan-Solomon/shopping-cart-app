import { StringLiteral } from 'typescript';

type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type TInitialContext = {
  products: TProduct[];
  status: 'idle' | 'loading' | 'error';
};
