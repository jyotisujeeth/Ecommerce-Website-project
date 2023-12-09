import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "./Cart/cartItems";
import Cart from "../Cart/cartItems";
import { useContext } from "react";
import CartContext from "./Context/cartContext";
import CartContext from "../Context/cartContext";

const NavBar = () => {
  const authCtx = useContext(CartContext);