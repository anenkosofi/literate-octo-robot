import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../index';
import {
  selectCategory,
  selectQuery,
  selectBrand,
  selectRating,
  selectPrice,
} from '@store/filters/selectors';

export const selectProducts = (state: RootState) => state.products.items;

export const selectIsLoading = (state: RootState) => state.products.isLoading;

export const selectVisibleProducts = createSelector(
  [
    selectProducts,
    selectCategory,
    selectQuery,
    selectBrand,
    selectRating,
    selectPrice,
  ],
  (products, category, query, brands, rating, price) => {
    return products.filter(product => {
      const productCategory = product.category.toLowerCase();
      const productTitle = product.title.trim().toLowerCase();
      const productBrand = product.farm.trim().toLowerCase();
      const productRating = product.rating;
      const productPrice = product.price.new;

      const matchesCategory =
        category === 'All categories' ||
        (category && productCategory === category.toLowerCase());
      const matchesQuery =
        !query || (query.trim() && productTitle.includes(query.trim()));
      const matchesBrand =
        !brands.length ||
        (brands.length &&
          brands.some(brand => brand.trim().toLowerCase() === productBrand));
      const matchesRating =
        !rating.length ||
        (rating.length && rating.some(element => element === productRating));
      const matchesPrice =
        productPrice >= price.min && productPrice <= price.max;

      return (
        matchesCategory &&
        matchesQuery &&
        matchesBrand &&
        matchesRating &&
        matchesPrice
      );
    });
  }
);
