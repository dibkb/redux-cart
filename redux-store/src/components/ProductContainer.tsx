import React from "react";
import type { ProductType } from "../features/products/productSlice";
import { useAppDispatch } from "../features/hooks";
import { addToCart } from "../features/cart/cartSlice";
const Product: React.FC<ProductType> = ({
  id,
  title,
  description,
  price,
  images,
}) => {
  const dispatch = useAppDispatch();
  const addToCartHandler = (id: number) => {
    dispatch(addToCart(id));
  };
  return (
    <article className="flex basis-1/3 gap-x-6 border-solid border-2 border-slate-600 p-3">
      <img src={images[1]} className="w-48 h-48" />
      <div>
        <h1 className="text-lg font-semibold mb-3">{title}</h1>
        <p className="text-xs mb-3">{description}</p>
        <span className="font-semibold">£ {price}</span>
        <div
          onClick={() => addToCartHandler(id)}
          className="my-6 border-2 border-slate-600 w-36 bg-slate-600 text-white flex justify-center py-1 hover:cursor-pointer"
        >
          Add to Cart
        </div>
      </div>
    </article>
  );
};
const ProductContainer: React.FC<ProductContainerProp> = ({ products }) => {
  const productList = products.map((element) => {
    return <Product {...element} key={element.id} />;
  });
  return <div className="flex flex-wrap mt-6">{productList}</div>;
};

export default ProductContainer;
interface ProductContainerProp {
  products: ProductType[];
}
