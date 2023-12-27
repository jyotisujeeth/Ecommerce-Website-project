import React from "react";
import { Button, Badge, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../reduxstore/ui-slice";
import { cartActions } from "../../reduxstore/cart-slice";
import CartIcon from "./cartIcon";
const Cart = () => {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const items = useSelector((state) => state.cart.items);
  const totalItemsCount = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const showCartModalHandler = () => {
    dispatch(uiActions.handleShowCartModal());
  };

  const onOrderHandler = () => {
    dispatch(cartActions.onOrder());
    alert("Order has Been Placed");
    dispatch(uiActions.handleShowCartModal());
  };

  const CartItems = items.map((item) => {
    const removeItemHandler = () => {
      dispatch(cartActions.removeItem(item.id));
    };
    const addItemHandler = () => {
      dispatch(cartActions.addItem(item));
    };
    return (
      <tr key={item.id} style={{ textAlign: "center" }}>
        <td>
          <img
            src={item.imageUrl}
            alt="product"
            style={{ width: "80px", height: "80px" }}
          />
        </td>
        <td>{item.title}</td>
        <td>₹{item.price}</td>
        <td>{item.quantity}</td>
        <td>
          <Button variant="warning" onClick={removeItemHandler}>
            −
          </Button>
        </td>
        <td>
          <Button variant="success" onClick={addItemHandler}>
            +
          </Button>
        </td>
      </tr>
    );
  });

  let hasItems = totalItemsCount > 0;
  return (
    <>
      <Button variant="success" onClick={showCartModalHandler}>
        My Cart <Badge bg="dark">{totalItemsCount}</Badge>
        <span className="visually-hidden">cart-items</span>
      </Button>
      <Modal show={cartIsVisible} onHide={showCartModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              <CartIcon />
              <b>My Cart</b>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {hasItems && (
            <table className="table table-striped">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>{CartItems}</tbody>
            </table>
          )}
          {!hasItems && (
            <h5 style={{ textAlign: "center" }}>
              <b>Your cart is empty!!</b>
            </h5>
          )}
          {hasItems && (
            <div style={{ marginLeft: "60%" }}>
              <span>
                <b>Total Amount</b>
              </span>
              <span>
                <b> ₹{totalAmount.toFixed(2)}</b>
              </span>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={showCartModalHandler}>
            Close
          </Button>
          {hasItems && (
            <Button variant="success" onClick={onOrderHandler}>
              Order
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Cart;
