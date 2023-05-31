import React, { FC, useEffect, useState, useRef } from 'react';

import { ReactComponent as Clear } from '@assets/close.svg';
import { DefaultCart } from '@components/DefaultCart';
import { OrderList } from '@components/OrderList';
import { useAppSelector, useAppDispatch } from '@hooks';
import {
  selectOrder,
  selectIsPromocodeApplied,
  selectPromocodeDiscount,
  selectTax,
} from '@store/cart/selectors';
import {
  applyPromocode,
  setPromocodeDiscount,
  setTax,
} from '@store/cart/slice';
import { Promocode } from '@types';
import { getNewPrice, getFormattedDate } from '@utils';

import './Order.scss';

export const Order: FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectOrder);
  const isPromocodeApplied = useAppSelector(selectIsPromocodeApplied);
  const promocodeDiscount = useAppSelector(selectPromocodeDiscount);
  const tax = useAppSelector(selectTax);
  const inputRef = useRef<HTMLInputElement>(null);

  const promocodes = Object.values(Promocode);

  const [taxation, setTaxation] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isPromocodeApplied) {
      const value = Math.floor(Math.random() * (50 - 10) + 10);
      dispatch(setPromocodeDiscount(value));
    }
  }, [isPromocodeApplied]);

  useEffect(() => {
    if (!tax) {
      const value = Math.floor(Math.random() * (30 - 10) + 10);
      dispatch(setTax(value));
    }
  }, []);

  const subTotalPrice = items.reduce(
    (acc, { product, chosenQuantity, chosenUnit }) => {
      const unit = product.units.find(unit => unit === chosenUnit);
      if (unit) {
        const price = product.price[chosenUnit];
        const newPrice = getNewPrice(price, product.discount);
        acc += newPrice * chosenQuantity;
      }
      return Number(acc.toFixed(2));
    },
    0
  );

  useEffect(() => {
    const date = getDeliveryDate();
    const formattedDate = getFormattedDate(date);
    setDeliveryDate(formattedDate);
  }, []);

  useEffect(() => {
    getTaxation();
  }, [tax, items]);

  const getTaxation = () => {
    const calculatedTax = Number((subTotalPrice * (tax / 100)).toFixed(2));
    setTaxation(calculatedTax);
  };

  const getTotalPrice = () => Number((subTotalPrice + taxation).toFixed(2));

  const getDeliveryDate = () => {
    const date = items.map(({ product }) => product.deliveryTime);
    const greaterDate = Math.max(...date);
    const start = new Date();
    const end = new Date(start);
    end.setDate(end.getDate() + greaterDate);
    return end;
  };

  const clearInputHandler = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const setEmptyMessage = () => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const promocode = formData.get('promocode') as string;
    if (!promocode) {
      setMessage('Please enter a promocode.');
      setEmptyMessage();
      return;
    }
    const isValidPromocode = promocodes.some(item => item === promocode);
    if (isValidPromocode) {
      dispatch(applyPromocode());
      clearInputHandler();
      setMessage(`Promo code ${promocodeDiscount}% was applied successfully!`);
      setEmptyMessage();
      return;
    }
    setMessage('Invalid promo code. Please try again.');
    setEmptyMessage();
  };

  return (
    <div className="order">
      {items.length ? (
        <>
          <h2 className="order__title">Order Summary</h2>
          <p className="order__description">
            Price can change depending on shipping method and taxes of your
            state.
          </p>
          <OrderList />
          <ul className="order__summary-list">
            <li className="order__summary-item">
              <span>Subtotal</span>
              <span>{subTotalPrice} USD</span>
            </li>
            <li className="order__summary-item">
              <span>Tax</span>
              <span>
                {tax}% {taxation} USD
              </span>
            </li>
          </ul>
          <form
            className="order__field"
            autoComplete="off"
            onSubmit={onSubmitHandler}
          >
            <label htmlFor="promocode" className="order__label"></label>
            <input
              id="promocode"
              type="text"
              name="promocode"
              placeholder="Apply promo code"
              className="order__input"
              ref={inputRef}
            />
            {Boolean(message.length) && (
              <p className="order__message">{message}</p>
            )}
            <div className="order__button-control">
              <button
                type="button"
                className="order__clear-button"
                onClick={clearInputHandler}
              >
                <Clear className="order__clear-icon" />
              </button>
              <div className="order__divider"></div>
              <button type="submit" className="order__promocode-button">
                Apply now
              </button>
            </div>
          </form>
          <div className="order__total">
            <div className="order__total-name">
              <p>Total Order</p>
              <p className="order__delivery-day">
                Guaranteed delivery day: {deliveryDate}
              </p>
            </div>
            <span className="order__total-price">{getTotalPrice()} USD</span>
          </div>
        </>
      ) : (
        <DefaultCart />
      )}
    </div>
  );
};
