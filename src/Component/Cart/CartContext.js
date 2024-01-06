import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (product) => {},
  removeItem: (id) => {},
  updateItem: (id, quantity) => {},
});

export default CartContext; 



// import React, { useContext } from "react";
// import CartContext from "./CartContext";

// const MyComponent = () => {
//   const cartContext = useContext(CartContext);

//   return (
//     <div>
//       <h2>Cart Items:</h2>
//       <ul>
//         {cartContext.items.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <h2>Total Amount: {cartContext.totalAmount}</h2>
//     </div>
//   );
// };

// export default  MyComponent;
