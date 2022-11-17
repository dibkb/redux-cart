import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../features/hooks";
import { fetchProducts } from "../features/products/asyncThunk";
const Products = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.products.status);
  const products = useAppSelector((state) => state.products.products);
  let content;
  if (status === "LOADING") {
    content = <h3 className="text-lg">LOADING....</h3>;
  } else if (status === "SUCCEEDED") {
    content = <>{JSON.stringify(products)}</>;
  }
  useEffect(() => {
    if (status === "IDLE") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return <div>{content}</div>;
};

export default Products;
