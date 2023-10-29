import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/customer/Home';
import Footer from './components/Footer';
import Dashboard from './pages/admin/Dashboard';
import { useState } from 'react';
import Cart from './pages/customer/Cart';
import OrderHistory from './pages/customer/OrderHistory';
import Profile from './pages/customer/Profile';
import Shop from './pages/customer/Shop';
import CartProvider from './context/CartContext';
import Checkout from './pages/customer/Checkout';
import Test from './Test';
import ProductDetails from './pages/customer/ProductDetails';

function App() {
  const [open, setOpen] = useState(false);
  const StudentLayout = () => {
    return (
      <>
        <Navbar open={open} setOpen={setOpen} />
        <Outlet />
        <Footer />
      </>
    );
  };
  const AdminLayout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route element={<StudentLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/shop/:id/product-detail"
              element={<ProductDetails />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="/history" element={<OrderHistory />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="" element={<Dashboard />} />
          </Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
