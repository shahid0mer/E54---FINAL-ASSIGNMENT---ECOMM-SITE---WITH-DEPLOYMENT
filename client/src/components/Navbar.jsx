import { Link, useNavigate } from "react-router-dom";
import shoppy from "../assets/jshopyfinal.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartModal from "./CartModal";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  
  const isLoggedIn = !!localStorage.getItem("isAuth");

  const cartItemCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 h-[80px]">
        <div className="max-w-full mx-auto px-8 py-8 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="text-2xl font-bold text-cyan-700">
            <Link to="/">
              <img className="w-[100px]" src={shoppy} alt="Shoppy Logo" />
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="space-x-4 flex items-center">
            {!isLoggedIn ? (
              <Link
                to="/signup"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-90 text-white rounded-md transition-all"
              >
                Sign Up
              </Link>
            ) : null}

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition active:scale-90 text-white rounded-md"
              >
                Logout
              </button>
            )}

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative"
            >
              <FaShoppingCart size={24} color="#4B5563" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {cartOpen && <CartModal open={cartOpen} setOpen={setCartOpen} />}
    </>
  );
}
