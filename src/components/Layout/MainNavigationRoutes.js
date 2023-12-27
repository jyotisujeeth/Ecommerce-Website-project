import HomePage from "./HomePage";
import StorePage from "../ProductsStore/Store";
import AboutUs from "./AboutUs";
import { Route, Routes } from "react-router-dom";
import React from "react";
import ContactUs from "./ContactUs";
import ProductDetail from "../ProductsStore/ProductDetail";
import ErrorPage from "./ErrorPage";
import MyOrders from "./MyOrders";
import AuthForm from "../Auth/AuthForm";

const MainNavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/store/:productId" element={<ProductDetail />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainNavigationRoutes;
