import React, { useState, useEffect, useCallback } from "react";
import CartContext from "./cartContext";

let logoutTimer;
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedRemainingDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedRemainingDate);
  if (remainingTime <= 600000) {
    return null;
  }
  return {
    token: storedToken,
    duration: remainingTime,
  };
};
const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const tokenData = retrieveStoredToken();

  const [token, setToken] = useState(tokenData?.token);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const addItemHandler = (item) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex > -1) {
      const newCartItems = [...items];
      newCartItems[itemIndex].quantity = newCartItems[itemIndex].quantity + 1;
      updateItems(newCartItems);
    } else {
      updateItems([...items, item]);
    }
    localStorage.setItem("cart", JSON.stringify(items));
  };
  const removeItemHandler = (id) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === id);

    if (itemIndex > -1) {
      let newCartItems = [...items];
      if (newCartItems[itemIndex].quantity === 1) {
        newCartItems.splice(itemIndex, 1);
        //newCartItems=newCartItems.filter(item=>item.id!==id)
      } else {
        newCartItems[itemIndex].quantity = newCartItems[itemIndex].quantity - 1;
      }
      updateItems(newCartItems);
      localStorage.setItem("cart", JSON.stringify(items));
    }
  };
  const onOrderHandler = () => {
    console.log("Order is Placed");
    console.log("Ordered Items : ", items);
    updateItems([]);
    localStorage.removeItem("cart");
  };

  const cartContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    onOrder: onOrderHandler,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
