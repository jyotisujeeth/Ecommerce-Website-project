import React from "react";
const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  onOrder: () => {},
  token: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});
export default CartContext;
