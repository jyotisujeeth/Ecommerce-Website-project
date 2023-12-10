import { Nav, Container, Navbar } from "react-bootstrap";
import Cart from "./Cart/cartItems";
const NavBar = () => {
  return (
    <>
      <Navbar bg="warning" variant="light" expand="lg">
        <Container className="justify-content-center display-flex">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/home">
                <b>Home</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/store">
                <b>Store</b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">
                <b>About</b>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Cart />
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
