import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/customer/Home';
import Footer from './components/Footer';
import Dashboard from './pages/admin/Dashboard';
import Cake from './pages/customer/Cake';
import Login from './pages/customer/Login';
import { useState } from 'react';
import Cart from './pages/customer/Cart';

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
      <Routes>
        <Route element={<StudentLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
