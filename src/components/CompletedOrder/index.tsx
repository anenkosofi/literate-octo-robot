import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import order from '@assets/order.png';

import './CompletedOrder.scss';

export const CompletedOrder: FC = () => {
  return (
    <div className="order-confirm">
      <h1 className="order-confirm__title">
        Your order is completed! Thank you!
      </h1>
      <img
        src={order}
        alt="Order confirmation"
        className="order-confirm__image"
      />
      <p className="order-confirm__description">
        We&apos;re getting started on your order right away, and you will
        receive an order confirmation email. In the meantime, explore the latest
        products, just head over to
      </p>
      <NavLink to="/products" className="order-confirm__link">
        Explore more products
      </NavLink>
    </div>
  );
};
