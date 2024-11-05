import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productItem }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/product/${5}`);
      }}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem] ">
        <img
          className="h-full w-full object-cover object-left-top"
          src={productItem.imageUrl}
          alt=" "
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60 ">{productItem.brand}</p>
          <p>{productItem.title}</p>
        </div>
        <div className=" font-semibold flex items-center space-x-2">
          <p className="font-semibold">₹ {productItem.discountedPrice}</p>
          <p className="line-through opacity-50 ">₹ {productItem.price}</p>
          <p className="text-green-600">{productItem.discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
