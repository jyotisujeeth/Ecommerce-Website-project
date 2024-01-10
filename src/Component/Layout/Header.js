import { Fragment, useState, useContext, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { BsCart3 } from "react-icons/bs";
import CartContext from "../Cart/CartContext";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthContext";

const Header = (props) => {
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // Whenever the user who has not logged In clicks on the Products tab should be redirected to Login Page automatically.

  const history = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    alert("Do you want Logout");
    authCtx.Logout();
    history("/login");
  };
  const openCart = () => {
    setShowCart(true);

    // fetch(
    //   `https://ecommerse1-c3862-default-rtdb.firebaseio.com/ProductData/${authCtx.email}.json`
    // )
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  useEffect(() => {
    console.log("successfully run");
    openCart();
  }, []);

  const closeCart = () => {
    setShowCart(false);
  };

  const location = useLocation();
  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink to="/home" style={{ color: "white" }}>
                HOME
              </NavLink>
            </Nav.Item>

            {isLoggedIn && (
              <div style={{ marginRight: "40px" }}>
                <Link to="/store" style={{ color: "green" }}>
                  STORE
                </Link>
              </div>
            )}

            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink
                to="/about"
                style={{ color: "white" }}
                onClick={() => props.handleShow(false)}
              >
                ABOUT
              </NavLink>
            </Nav.Item>

            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink to="/contactUs" style={{ color: "white" }}>
                ContactUs
              </NavLink>
            </Nav.Item>

            <Nav.Item style={{ marginRight: "40px" }}>
              <NavLink
                to="/auth"
                style={{ color: "yellow" }}
                render={(props) =>
                  isLoggedIn ? (
                    <NavLink {...props} />
                  ) : (
                    <NavLink {...props} disabled />
                  )
                }
              >
                Login
              </NavLink>
            </Nav.Item>

            {isLoggedIn && (
              <div style={{ marginRight: "40px" }}>
                <Link
                  to="/auth"
                  style={{ color: "red" }}
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
            )}
          </Nav>
        </Container>
        {location.pathname !== "/" &&
          location.pathname !== "/about" &&
          location.pathname !== "/contact_us" &&
          location.pathname !== "/auth" && (
            <Button
              variant="outline-primary"
              style={{
                marginRight: "15px",
                backgroundColor: "transparent",
                borderColor: "#007bff",
                color: "white",
              }}
              onClick={openCart}
            >
              Cart <BsCart3 />
              {numberOfCartItems}
            </Button>
          )}
      </Navbar>

      {showCart && <Cart onClose={closeCart} />}
    </Fragment>
  );
};
export default Header;
