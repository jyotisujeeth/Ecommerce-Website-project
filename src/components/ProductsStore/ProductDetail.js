import React from "react";
import { useParams } from "react-router-dom";
import ProductCarousel from "./ProductCarousel";
const ProductDetail = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <>
      <ProductCarousel />
    </>
  );
};

export default ProductDetail;
