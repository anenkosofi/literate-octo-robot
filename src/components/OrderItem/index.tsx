import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Remove } from '@assets/close.svg';
import { ReactComponent as Heart } from '@assets/heart.svg';
import { ConfirmUnitChange } from '@components/ConfirmUnitChange';
import { CountPicker } from '@components/CountPicker';
import { LoginForm } from '@components/LoginForm';
import { Modal } from '@components/Modal';
import { Stars } from '@components/Stars';
import { useAppDispatch, useAppSelector, useAuth } from '@hooks';
import {
  selectPromocodeDiscount,
  selectCartItems,
  selectCart,
} from '@store/cart/selectors';
import { updateCartItem, removeFromCart } from '@store/cart/slice';
import { selectWishlistIds } from '@store/wishlist/selectors';
import { setWishlist } from '@store/wishlist/slice';
import { CartItem, ButtonNames } from '@types';
import { setFixedPrice } from '@utils';

import './OrderItem.scss';

type OrderItemProps = {
  item: CartItem;
};

export const OrderItem: FC<OrderItemProps> = ({
  item: {
    product: {
      id,
      title,
      farm,
      fresheness,
      rating,
      previewImage,
      units,
      stock,
      price,
      discount,
    },
    id: itemId,
    chosenUnit,
    chosenQuantity,
  },
}) => {
  const dispatch = useAppDispatch();
  const promocodeDiscount = useAppSelector(selectPromocodeDiscount);
  const cartItems = useAppSelector(selectCartItems);
  const items = useAppSelector(selectCart);
  const wishlist = useAppSelector(selectWishlistIds);
  const { isAuthorized, user } = useAuth();

  const isProductInWishlist = wishlist.find(
    ({ id: userId, products }) => userId === user?.id && products.includes(id)
  );
  const maxQuantity = parseInt(stock);
  const updatedUnits = units.filter(unit => unit !== chosenUnit);

  const [unit, setUnit] = useState(chosenUnit);
  const [tempUnit, setTempUnit] = useState('');
  const [count, setCount] = useState(chosenQuantity);
  const [matchedItem, setMatchedItem] = useState<CartItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ordered, setOrdered] = useState(0);
  const [remainder, setRemainder] = useState(maxQuantity);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (matchedItem) {
      return setIsModalOpen(true);
    }
    if (tempUnit.length) {
      return setUnit(tempUnit);
    }
  }, [matchedItem]);

  useEffect(() => {
    const cartItem = cartItems.find(
      item => item.product.id === id && item.chosenUnit === tempUnit
    );
    if (cartItem) {
      return setMatchedItem(cartItem);
    }
    if (tempUnit.length && !cartItem) {
      return setUnit(tempUnit);
    }
  }, [tempUnit]);

  useEffect(() => {
    setCount(chosenQuantity);
  }, [chosenQuantity]);

  useEffect(() => {
    if (user && user.id) {
      dispatch(updateCartItem({ userId: user?.id, _id: itemId, id, unit }));
      setMatchedItem(null);
      setTempUnit('');
    }
  }, [unit]);

  useEffect(() => {
    if (user && user.id) {
      dispatch(
        updateCartItem({ userId: user?.id, _id: itemId, id, quantity: count })
      );
    }
  }, [count]);

  useEffect(() => {
    const sameItems = items.filter(
      item => item.id === id && item.unit === unit
    );
    const orderedQuantity = sameItems
      .map(item => item.quantity)
      .reduce((acc, item) => (acc += item), 0);
    setOrdered(orderedQuantity);
    const productRemainder = parseInt(stock) - orderedQuantity;
    setRemainder(productRemainder);
  }, [items]);

  const setCountHandler = (count: number) => {
    setCount(count);
  };

  const setNextCountHandler = (typeButton: ButtonNames) => {
    if (typeButton === ButtonNames.SUP) {
      setCount(prevState => prevState + 1);
    } else if (typeButton === ButtonNames.SUB) {
      setCount(prevState => prevState - 1);
    }
  };

  const setUnitHandler = (unit: string) => {
    setTempUnit(unit);
  };

  const getTotalPrice = () => {
    return setFixedPrice(price[unit] * chosenQuantity);
  };

  const getNewTotalPrice = () => {
    const totalDiscount = (1 - discount / 100) * (1 - promocodeDiscount / 100);

    return setFixedPrice(price[unit] * totalDiscount * chosenQuantity);
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(itemId));
  };

  const updateWishlistHandler = () => {
    if (!isAuthorized) {
      return setIsSignedIn(true);
    }
    if (user && user.id) {
      dispatch(setWishlist({ userId: user?.id, productId: id }));
    }
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setIsSignedIn(false);
  };

  useEffect(() => {
    const bodyEl = document.getElementById('body') as HTMLElement;

    bodyEl.style.overflow = isModalOpen ? 'hidden' : 'visible';
  }, [isModalOpen]);

  useEffect(() => {
    const bodyEl = document.getElementById('body') as HTMLElement;

    bodyEl.style.overflow = isSignedIn ? 'hidden' : 'visible';
  }, [isSignedIn]);

  return (
    <>
      <li className="order__item">
        <div className="order__content">
          <NavLink to={`/products/${id}`} className="order__thumb">
            <img src={previewImage} alt={title} className="order__image" />
          </NavLink>
          <div className="order__control">
            <button
              type="button"
              className="order__button"
              onClick={updateWishlistHandler}
            >
              <Heart
                className={
                  isProductInWishlist
                    ? 'order__button-icon order__wish-icon order__wish-icon_active'
                    : 'order__button-icon order__wish-icon'
                }
              />
              <span>Wishlist</span>
            </button>
            <button
              type="button"
              className="order__button"
              onClick={removeFromCartHandler}
            >
              <Remove className="order__button-icon order__remove-icon" />
              <span>Remove</span>
            </button>
          </div>
        </div>
        <div className="order__product-summary">
          <div className="order__info">
            <h3 className="order__name">
              <NavLink to={`/products/${id}`} className="order__link">
                {title}
              </NavLink>
            </h3>
            <ul className="order__info-list">
              <li className="order__info-item">
                <span className="order__info-item_color_grey">Farm:</span>
                <span>{farm}</span>
              </li>
              <li className="order__info-item">
                <span className="order__info-item_color_grey">Freshness:</span>
                <span>{fresheness}</span>
              </li>
            </ul>
            <div className="order__rating">
              <Stars rating={rating} />
            </div>
          </div>
          <div className="order__quantity">
            <div className="order__price">
              <span>{getNewTotalPrice()} USD</span>
              <span className="order__price_old">{getTotalPrice()}</span>
            </div>
            <CountPicker
              items={updatedUnits}
              max={maxQuantity}
              count={count}
              unit={unit}
              onSetUnit={setUnitHandler}
              onSetCountByValue={setCountHandler}
              onSetCountByStep={setNextCountHandler}
              ordered={ordered}
              remainder={remainder}
            />
          </div>
        </div>
      </li>
      {isModalOpen && (
        <Modal closeModal={closeModalHandler}>
          <ConfirmUnitChange
            unit={tempUnit}
            stock={maxQuantity}
            prevQuantity={matchedItem?.chosenQuantity}
            currentQuantity={chosenQuantity}
            setUnit={() => setUnit(tempUnit)}
            closeModal={closeModalHandler}
          />
        </Modal>
      )}
      {isSignedIn && (
        <Modal closeModal={closeModalHandler}>
          <LoginForm closeModal={closeModalHandler} />
        </Modal>
      )}
    </>
  );
};
