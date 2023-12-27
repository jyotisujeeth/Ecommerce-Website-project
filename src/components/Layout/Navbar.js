import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../Cart/cartItems";
import { useContext } from "react";
import CartContext from "../Context/cartContext";

const NavBar = () => {
  const authCtx = useContext(CartContext);
  const navigate = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn);
  const logoutHandler = () => {
    authCtx.logout();
    navigate("/auth");
  };
  return (
    <>
      <Navbar bg="warning" variant="light" expand="lg">
        <Container>
          <Nav>
            <Nav.Item>
              {isLoggedIn && (
                <NavLink to="/home" style={{ marginRight: "50px" }}>
                  <b>Home</b>
                </NavLink>
              )}
            </Nav.Item>
            {isLoggedIn && (
              <Nav.Item>
                <NavLink to="/store" style={{ marginRight: "50px" }}>
                  <b>Store</b>
                </NavLink>
              </Nav.Item>
            )}
            {isLoggedIn && (
              <Nav.Item>
                <NavLink to="/orders" style={{ marginRight: "50px" }}>
                  <b>My Orders</b>
                </NavLink>
              </Nav.Item>
            )}
            <Nav.Item>
              <NavLink to="/about" style={{ marginRight: "50px" }}>
                <b>About Us</b>
              </NavLink>
            </Nav.Item>
            {isLoggedIn && (
              <Nav.Item>
                <NavLink to="/contact" style={{ marginRight: "50px" }}>
                  <b>Contact Us</b>
                </NavLink>
              </Nav.Item>
            )}
            {!isLoggedIn && (
              <Nav.Item>
                <NavLink to="/auth" style={{ marginRight: "50px" }}>
                  <b>Login</b>
                </NavLink>
              </Nav.Item>
            )}
          </Nav>
          <div className="d-flex justify-content-end">
            {isLoggedIn && <Cart />}
            {isLoggedIn && (
              <Button className="primary ms-3" onClick={logoutHandler}>
                Logout
              </Button>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
