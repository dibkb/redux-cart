import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../features/hooks";
import { totalCartItems } from "../features/cart/cartSlice";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
const Header: React.FC = () => {
  const nums = useAppSelector(totalCartItems);
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
          <small className="text-sm">{nums}</small>
        </Link>
      </div>
    </header>
  );
};

export default Header;
