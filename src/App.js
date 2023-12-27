import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartProvider from "./components/Context/cartProvider";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import MainNavigationRoutes from "./components/Layout/MainNavigationRoutes";
import NavBar from "./components/Layout/Navbar";
import Notification from "./components/Layout/Notification";
import { fetchCartData, sendCartData } from "./reduxstore/cart-action";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <CartProvider>
      <div style={{ paddingBottom: "50px" }}>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        <NavBar />
        <Header />
        <MainNavigationRoutes />
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
