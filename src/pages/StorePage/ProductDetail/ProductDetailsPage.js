import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import CartContext from "../../../Store/CartCtx/Cart-Context";


const ProductDetailsPage = () => {
  const crtx = useContext(CartContext)
  const location = useLocation();

  const Images = location.state.url;
  const data = {
    title: location.state.title,
    price: location.state.price,
    imageUrl: location.state.url[0],
  }
  // console.log(data);

  const [mainImg, setMainImg] = useState(Images[0]);
  const imageChangeHandler = (e) => {
    setMainImg(e.target.src);
  };
 
  const buttonHandler = () => {
    crtx.addItemToCart({ ...data, quantity: 1 });
  };


  return (
    <>
      <Container fluid className="my-4 ">
        <Row className="">
          <Col xs={5} sm={1} md={2} className="ms-4 d-flex flex-column ">
            {Images.map((Img) => {
              return (
                <Col className="sideImageColumn" key={Math.random()}>
                  <Figure className="sideImages" onClick={imageChangeHandler}>
                    <Figure.Image
                      width={80}
                      height={80}
                      alt="171x180"
                      src={Img}
                    />
                  </Figure>
                </Col>
              );
            })}
          </Col>

          <Col sm={4} className="d-flex justify-content-center">
            <Figure>
              <Figure.Image
                width={500}
                height={600}
                alt="171x180"
                src={mainImg}
              />
              <Figure.Caption>
                {/* Nulla vitae elit libero, a pharetra augue mollis interdum. */}
              </Figure.Caption>
            </Figure>
          </Col>

          <Col className="mt-4">
            <Col className="">
              <h6>Smartees</h6>
            </Col>
            <Col className="mt-2">
              <h3>Men Full Sleeve Printed Hooded Sweatshirt</h3>
            </Col>
            <Col>
              f pleasure, accepted explain up to now. , The things we are
              accusing of these in the explication of the truth receives from
              the flattery of her will never be the trouble and they are refused
              to the pleasures and the pleasures of the pain, explain the
              treatment of excepturi o
            </Col>
            <Col className="my-3">
              <h2>₹399</h2>
            </Col>
            <Col>
              <Row>
                <Col sm={1}>
                  <h3>Size</h3>
                </Col>
                <Col className="mt-2">
                  <select
                    style={{ fontWeight: "bolder", padding: ".1rem .5rem" }}
                  >
                    {/* <option>Size</option> */}
                    <option>S</option>
                    <option>M</option>
                    <option>XL</option>
                  </select>
                </Col>
              </Row>
            </Col>

            <Col className="my-4">
              <Button
                className="py-3 mx-2"
                style={{ width: "10rem" }}
                variant="warning"
                onClick={buttonHandler}
              >
                ADD TO CART
              </Button>
              <Button
                className="py-3 mx-2"
                style={{ width: "10rem" }}
                variant="success"
              >
                BUY NOW
              </Button>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in the enduring of which
            were born in it? Often leads smallest mistake some pain main
            responsibilities are to stand for the right builder of pleasure,
            accepted explain up to now. , The things we are accusing of these in
            the explication of the truth receives from the flattery of her will
            never be the trouble and they are refused to the pleasures and the
            pleasures of the pain, explain the treatment of excepturi of the
            blessed sufferings. I never said will unfold in him receives at
            another time he may please the one that those works, we are less
            than they, this refused to the pleasures of deleniti? Those are!
            Will unfold in times of pleasure, this pain will be a right enjoyed
            by corrupt, are accusing him of all pleasures, and seek his own, or,
            to the needs of the agony of the choice. We hate the fellow. Lorem
            ipsum carrots enhanced rebates. Excellent sayings of a man of
            sorrows, hates no prosecutors will unfold in th
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetailsPage;