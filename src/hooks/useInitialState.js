import { useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
  metacircle: [],
  paymentIsOpen: false,
  havePaymentId: null,
  haveOrderId: null,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const addToMetacircle = (payload) => {
    setState({
      ...state,
      metacircle: state.metacircle.includes(payload) ? state.metacircle : [...state.metacircle, payload],
    });
  };

  const removeFromMetacircle = (payload) => {
    setState({
      ...state,
      metacircle: state.metacircle.filter((items) => items.id !== payload.id),
    });
  };

  const togglePayment = () => {
    setState({
      ...state,
      paymentIsOpen: !state.paymentIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  const usePaymentId = () => {
    setState({
      ...state,
      havePaymentId: state.havePaymentId
    });
  };

  const useOrderId = () => {
    setState({
      ...state,
      haveOrderId: state.haveOrderId
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
    addToMetacircle,
    removeFromMetacircle,
    togglePayment,
    usePaymentId,
    useOrderId
  };
};

export default useInitialState;