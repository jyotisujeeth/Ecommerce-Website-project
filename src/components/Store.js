import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import productsArr from "./products";
import ProductCard from "./ProductCard";
import cartContext from "./Context/cartContext";

const StorePage = () => {
  const { addItem } = useContext(cartContext);
  const storeDisplay = productsArr.map((product) => {
    return (
      <Col className="mt-5">
        <ProductCard
          title={product.title}
          imageUrl={product.imageUrl}
          price={product.price}
          addToCart={addItem(product)}
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
