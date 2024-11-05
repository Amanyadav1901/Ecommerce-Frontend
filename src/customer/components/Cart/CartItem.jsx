import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
            alt="product"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold"> Men slim Kurta</p>
          <p className="opacity-70">Size : L ,Yellow</p>
          <p className="opacity-70 mt-2">Seller : XYX brand</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹ 199</p>
            <p className="line-through opacity-50">₹ 299</p>
            <p className="text-green-600 font-semibold">10% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton className="border rounded-md px-2">
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="px-7 py-1 border rounded-sm">2</span>
          <IconButton className="border rounded-md px-2">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button className="capitalize">Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
