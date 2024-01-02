import CartProvider from "./Component/Cart/CartProvider";
import { Routes, Route } from "react-router-dom";

import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";

import HOME from "./Pages/Home";
import ABOUT from "./Pages/About";
import STORE from "./Pages/STORE";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";

import AuthForm from "./Component/Auth/AuthForm";

function App() {
  return (
    <CartProvider>
      <Header />

      <Routes>
        <Route path="/home" element={<HOME />} />
        <Route path="/store" element={<STORE />} />

        <Route path="/product/:productId" element={<ProductDetails />} />

        <Route path="/about" element={<ABOUT />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;
