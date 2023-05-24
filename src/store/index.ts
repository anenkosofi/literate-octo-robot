import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filtersReducer } from './filters/slice';
import { FiltersState } from './filters/slice';
import { productDetailsReducer } from './productDetails/slice';
import { ProductDetailsState } from './productDetails/slice';
import { productsReducer } from './products/slice';

const filtersPersistConfig = {
  key: 'filters',
  storage,
};

const productDetailsPersistConfig = {
  key: 'productDetails',
  storage,
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: persistReducer<FiltersState>(filtersPersistConfig, filtersReducer),
    productDetails: persistReducer<ProductDetailsState>(
      productDetailsPersistConfig,
      productDetailsReducer
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
