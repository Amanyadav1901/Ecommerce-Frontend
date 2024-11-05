import React from "react";
import { Route, Routes } from "react-router-dom";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Cart from "../customer/components/Cart/Cart";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Homepage from "../customer/pages/Homepage/Homepage";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <div className="z-50 relative lg:w-screen">
          <Navigation />
        </div>
      </div>

      <Routes>
        <Route path="/login" element={<Homepage />} />
        <Route path="/signup" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order/" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
