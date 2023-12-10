import { Row, Col } from "react-bootstrap";
import productsArr from "./products";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../../reduxstore/cart-slice";

const StorePage = () => {
  const dispatch = useDispatch();

  const storeDisplay = productsArr.map((product) => {
    const addToCartHandler = (e) => {
      e.preventDefault();
      dispatch(cartActions.addItem({ ...product, quantity: 1 }));
    };
    return (
        />
      </Col>
    );
  });
  return (
  
  );
};
export default StorePage;
