import React, { useState, useContext } from "react";
import { Button, Badge, Modal } from "react-bootstrap";
import CartContext from "../Context/cartContext";
import cartItemsArr from "./cartItemsArr";
const Cart = () => {
  const removeItemHandler = () => {};
  const addItemToCart = () => {};
  const { items } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const CartItems = cartItemsArr.map((item) => (
    <tr style={{ textAlign: "center" }}>
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
        <Button variant="success" onClick={addItemToCart}>
          +
        </Button>
      </td>
    </tr>
  ));
  const totalItemsCount = cartItemsArr.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        My Cart <Badge bg="dark">{totalItemsCount}</Badge>
        <span className="visually-hidden">cart-items</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center" }}>
            <b>Your Cart</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Cart;
