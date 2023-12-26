import "./App.css";
import { Spinner } from "react-bootstrap";
import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import PrivateRoutes from "./Routes/PrivateRoutes";
import NavBar from "./Components/NavBar";
import PublicRoutes from "./Routes/PublicRoutes";
// import About from "./Pages/AboutPage/About";
// import ErrorPage from "./Pages/ErrorPage";
// import Footer from "./Components/Footer";
// import HomePage from "./Pages/HomePage/HomePage";
// import ContactPage from "./Pages/ContactPage/ContactPage";
// import Login from "./Pages/LoginPage/Login";
// import ProductDetailsPage from "./Pages/StorePage/ProductDetail/ProductDetailsPage";
const StorePage = lazy(() => import("./Pages/StorePage/StorePage"));
const About = lazy(() => import("./Pages/AboutPage/About"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const Footer = lazy(() => import("./Components/Footer"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const ContactPage = lazy(() => import("./Pages/ContactPage/ContactPage"));
const Login = lazy(() => import("./Pages/LoginPage/Login"));
const ProductDetailsPage = lazy(() =>
  import("./Pages/StorePage/ProductDetail/ProductDetailsPage")
);
// const NavBar = lazy(() => import("./Components/NavBar"));

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Suspense
        fallback={
          <div>
            <p className="text-center display-3">Loading...</p>
            {/* <Spinner
              style={{ textAlign: "center" }}
              animation="border"
              variant="dark"
              size="lg"
            /> */}
          </div>
        }
      >
        <Switch>
          <PrivateRoutes exact Component={HomePage} path="/" />
          <PrivateRoutes Component={StorePage} path="/store" exact />
          <PrivateRoutes Component={About} path="/about" />
          <PrivateRoutes Component={ContactPage} path="/contact" exact />
          <PrivateRoutes
            Component={ProductDetailsPage}
            path="/productDetails"
          />
          <PublicRoutes path="/login" Component={Login} exact />
          <PrivateRoutes Component={ErrorPage} path="*" />
        </Switch>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
