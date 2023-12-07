import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import CartProvider from "./components/Context/cartProvider";
import StorePage from "./components/Store";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import AboutUs from "./components/AboutUs";

/* const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/store" element={<StorePage />} />
  </Route>
);
const router = createBrowserRouter(routeDefinitions);
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/store", element: <StorePage /> },
      { path: "/aboutUs", element: <AboutUs /> },
    ],
  },
]);
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainNavigationRoutes from "./components/MainNavigationRoutes";
import NavBar from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <div style={{ paddingBottom: "50px" }}>
        <NavBar />
        <Header />
        <MainNavigationRoutes />
      </div>
      <Footer />
    </CartProvider>
  );
}
