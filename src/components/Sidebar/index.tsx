import React, { forwardRef, ForwardedRef } from 'react';
import { IoMdClose } from 'react-icons/io';

import { BrandsFilter } from '@components/BrandsFilter';
import { CategoriesFilter } from '@components/CategoriesFilter';
import { PriceFilter } from '@components/PriceFilter';
import { RatingFilter } from '@components/RatingFilter';
import { useAppSelector, useAppDispatch } from '@hooks';
import { resetFilters } from '@store/filters/slice';
import { selectPrices } from '@store/products/selectors';
import { CategoryCount } from '@types';

import './Sidebar.scss';

type SidebarProps = {
  categories: CategoryCount;
  brands: string[];
} & React.HTMLProps<HTMLBaseElement>;

export const Sidebar = forwardRef(function Sidebar(
  props: SidebarProps,
  ref: ForwardedRef<HTMLBaseElement>
) {
  const dispatch = useAppDispatch();
  const prices = useAppSelector(selectPrices);

  const closeSidebarHandler = (ref: ForwardedRef<HTMLBaseElement>) => {
    if (ref instanceof Function) {
      ref(null);
    } else if (ref?.current) {
      ref.current.classList.remove('sidebar_opened');
      document.body.style.overflow = 'auto';
    }
  };

  const resetFiltersHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    dispatch(resetFilters());
  };

  return (
    <aside {...props} ref={ref} className="sidebar">
      <div className="sidebar__content">
        <button
          type="button"
          onClick={() => closeSidebarHandler(ref)}
          className="close-button"
        >
          <IoMdClose size={20} />
          <span>Close</span>
        </button>
        <CategoriesFilter categories={props.categories} />
        <BrandsFilter brands={props.brands} />
        <RatingFilter />
        <PriceFilter priceRange={prices} />
        <button
          type="button"
          className="reset-button"
          onClick={resetFiltersHandler}
        >
          Reset
        </button>
      </div>
    </aside>
  );
});
