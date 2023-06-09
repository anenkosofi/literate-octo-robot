import React, { FC } from 'react';

import { ProductItem } from '@components/ProductItem';
import { Product } from '@types';

import './ProductsList.scss';

type ProductsListProps = {
  products: Product[];
};

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <ul className="products-list">
      {products.map(product => (
        <ProductItem key={product.id} item={product} />
      ))}
    </ul>
  );
};
