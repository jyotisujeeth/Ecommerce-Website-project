import { useEffect, useReducer, useContext } from "react";
import CartContext from "./CartContext";
import AuthContext from "../Store/AuthContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "replace") {
    if (state && state.item) {
      state.items = action.replCartItem;
      //return {
      //  items:action?.data,
      //  totalAmount: action.data.reduce((acc, item) => {
      //  return acc + (item.price || 0);
      //  }, 0),
      //  };
    }
  }

  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items?.findIndex(
      (cartItem) => cartItem.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        existingCartItem,
        quantity: existingCartItem.quantity + 1,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const newItem = {
        ...action.item,
        quantity: 1,
      };
      updatedItems = state.items.concat(newItem);
    }
    const updatedTotalAmount = state.totalAmount + action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (cartItem) => cartItem.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
        amount:
          existingItem.amount - existingItem.amount / existingItem.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    const updatedTotalAmount =
      state.totalAmount - existingItem.amount / existingItem.quantity;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "UPDATE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (cartItem) => cartItem.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedItem = {
      ...existingItem,
      quantity: action.quantity,
      amount: (existingItem.amount / existingItem.quantity) * action.quantity,
    };
    const updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
    const updatedTotalAmount = state.items.reduce(
      (acc, item) => acc + item.amount,
      0
    );
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const authCtx = useContext(AuthContext);

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatchCartAction({ type: "UPDATE_ITEM", id: id, quantity: quantity });
  };

  useEffect(() => {
    const eddit = async () => {
      const response = await fetch(
        `https://e-comm-2e2d6-default-rtdb.firebaseio.com/ProductData/${authCtx.email}.json`
      );

      // get request
      if (!response) {
        return;
      }
      const data = await response.json();
      console.log(data);
      const replCartItem = [];

      for (let key in data) {
        replCartItem.push({ ...data[key], id: key });
      }
      console.log("-------------", replCartItem);
      dispatchCartAction({
        type: "replace",
        data: replCartItem,
      });
      console.log("fetching data");
    };
    eddit();
  }, [authCtx.email]);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    updateQuantity: updateQuantity,
  };
  console.log("==============", cartState.items);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
