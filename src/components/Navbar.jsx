import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaCartShopping,
  FaClockRotateLeft,
  FaBars,
} from 'react-icons/fa6';
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Cake', path: '/cake' },
  { name: 'Occassion', path: '/occasion' },
  { name: 'Item', path: '/item' },
];
const possible = [];
export default function Navbar({ open, setOpen }) {
  const url = useLocation().pathname;
  const navigate = useNavigate();
  console.log(url);
  return (
    <nav>
      <div className="max-w-7xl mx-auto shadow-lg px-2 sm:px-2 lg:px-8 py-2">
        <div className="flex justify-between item-center relative">
          {/* mobile button */}
          <div className="md:hidden flex items-center w-[180px]">
            <button onClick={() => setOpen(!open)}>
              <FaBars className="w-[100%]" />
            </button>
          </div>
          {/* left-nav-section */}
          <div className="flex space-x-16">
            {/* logo */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-pink-400"
              >
                <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z" />
              </svg>
            </div>
            {/* primary-nav */}
            <div className="hidden md:flex items-center space-x-4 text-gray-600 font-medium text-lg">
              <Link className="px-4 py-2" to={'/'}>
                HOME
              </Link>
              <Link className="px-4 py-2" to={'/cake'}>
                CAKE
              </Link>
              <Link className="px-4 py-2">OCCASIONS</Link>
              <Link className="px-4 py-2">ITEM</Link>
            </div>
          </div>
          {/* right-nav-section */}
          <div className="flex items-center space-x-1">           
            <button
              className="hover:bg-slate-950 hover:text-white transition-colors duration-600 h-[100%]
            border border-black rounded-xl px-5 py-1"
            >
              <FaUser />
            </button>
            <button
              onClick={() => navigate('/cart')}
              className="hover:bg-slate-950 hover:text-white transition-colors duration-600 h-[100%]
            border border-black rounded-xl px-5 py-1]"
            >
              <div className="relative flex">
                <FaCartShopping />
                <span
                  className="absolute -right-2 -top-2 w-3 h-3 rounded-lg bg-red-600 text-white text-[8px]
            flex justify-center items-center"
                >
                  0
                </span>
              </div>
            </button>
            <button
              className="hover:bg-slate-950 hover:text-white transition-colors duration-600 h-[100%]
            border border-black rounded-xl px-5 py-1"
            >
              <FaClockRotateLeft />
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {open && (
        <div className="px-2">
          {navItems.map((item) => (
            <Link
              to={item.path}
              className={`block ${
                url === item.path
                  ? 'bg-gray-600 text-white rounded-md px-3 py-2'
                  : 'px-3 py-2'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
