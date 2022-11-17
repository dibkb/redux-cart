import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
const Header: React.FC = () => {
  return (
    <header className="bg-slate-700 py-6 text-white">
      <div className="container mx-auto flex justify-between">
        <nav className=" text-lg font-medium flex gap-x-6">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Link
          to="/cart"
          className="flex gap-x-1 justify-between items-center border rounded border-white text-slate-600 bg-white w-16 px-2 py-1"
        >
          <ShoppingCartIcon className="h-6 w-6" />
          <small className="text-sm">4</small>
        </Link>
      </div>
    </header>
  );
};

export default Header;
