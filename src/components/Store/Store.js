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
      <Col key={product.id} className="mt-5">
        <ProductCard
          id={product.id}
          title={product.title}
          imageUrl={product.imageUrl}
          price={product.price}
          addToCart={addToCartHandler}
        />
      </Col>
    );
  });
  return (
    <div className="ms-5 me-5">
      <h3 style={{ textAlign: "center" }}>The Store</h3>
      <Row>{storeDisplay}</Row>
    </div>
  );
};
export default StorePage;
