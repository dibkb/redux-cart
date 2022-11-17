import React from "react";
import type { ProductType } from "../features/products/productSlice";
const Product: React.FC<ProductType> = ({
  title,
  description,
  price,
  image,
}) => {
  return (
    <article className="flex basis-1/3 gap-x-6 border-solid border-2 border-slate-600">
      <img src={image} className="w-48 h-48" />
      <div>
        <h1 className="text-lg font-semibold mb-3">{title}</h1>
        <p className="text-xs mb-3">{description}</p>
        <span className="font-semibold">£ {price}</span>
        <div className="my-6 border-2 border-slate-600 w-36 bg-slate-600 text-white flex justify-center py-1">
          Add to Cart
        </div>
      </div>
    </article>
  );
};
const ProductContainer: React.FC<ProductContainerProp> = ({ products }) => {
  const productList = products.map((element, id) => {
    return <Product {...element} key={element.id} />;
  });
  return <div className="flex flex-wrap mt-6">{productList}</div>;
};

export default ProductContainer;
interface ProductContainerProp {
  products: ProductType[];
}
