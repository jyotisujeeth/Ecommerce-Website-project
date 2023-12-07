import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemHandler = (item) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex > -1) {
      const newCartItems = [...items];
      newCartItems[itemIndex].quantity = newCartItems[itemIndex].quantity + 1;
      updateItems(newCartItems);
    } else {
      updateItems([...items, item]);
    }
  };
  const removeItemHandler = (id) => {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === id);

    if (itemIndex > -1) {
      let newCartItems = [...items];
      if (newCartItems[itemIndex].quantity === 1) {
        newCartItems.splice(itemIndex, 1);
        //newCartItems=newCartItems.filter(item=>item.id!==id)
        console.log("hello");
      } else {
        newCartItems[itemIndex].quantity = newCartItems[itemIndex].quantity - 1;
      }
      console.log(newCartItems);
      updateItems(newCartItems);
    }
  };
  const onOrderHandler = () => {
    console.log("Order is Placed");
    updateItems([]);
  };

  const cartContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    onOrder: onOrderHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
