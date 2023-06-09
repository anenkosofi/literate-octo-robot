import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useAppSelector } from '@hooks';
import { selectProductDetails } from '@store/productDetails/selectors';
import { Pathname } from '@types';

import './Breadcrumbs.scss';

interface BreadcrumbPath {
  name: string;
  link: string;
}

enum Path {
  'ALL_PRODUCTS' = 'All products',
}

export const Breadcrumbs: FC = () => {
  const selectedProduct = useAppSelector(selectProductDetails);
  const location = useLocation();
  const { pathname } = location;

  const getBreadcrumbPaths = (): BreadcrumbPath[] => {
    const paths: BreadcrumbPath[] = [{ name: 'Homepage', link: Pathname.HOME }];

    const parts = pathname.split('/').filter(part => part !== '');
    let accumulatedPath = '/';
    for (let i = 0; i < parts.length; i++) {
      accumulatedPath += parts[i];
      const breadcrumbName = getBreadcrumbName(parts[i]);
      paths.push({
        name: breadcrumbName,
        link: accumulatedPath,
      });
      accumulatedPath += '/';
    }

    return paths;
  };

  const getBreadcrumbName = (part: string): string => {
    if (part === Pathname.PRODUCTS.slice(1)) {
      return Path.ALL_PRODUCTS;
    }
    const isProductId = /^\d+$/.test(part);
    if (isProductId) {
      if (selectedProduct) return selectedProduct?.title;
    }

    return part.charAt(0).toUpperCase() + part.slice(1);
  };

  const breadcrumbPaths = getBreadcrumbPaths();
  const lastPathIndex = breadcrumbPaths.length - 1;

  return (
    <ul className="breadcrumbs">
      {breadcrumbPaths.map((path, index) => (
        <li key={index} className="breadcrumbs__page">
          {Boolean(index) && <span> / </span>}
          <NavLink
            className={
              lastPathIndex === index
                ? 'breadcrumbs__link breadcrumbs__link_active'
                : 'breadcrumbs__link'
            }
            to={path.link}
          >
            {path.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
