import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            className="shadow-xl rounded-md p-5 border"
            container
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-5">
                <img
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
                  alt=""
                  className="w-[5rem] h-[5rem] object-cover object-top"
                />
                <div className="space-y-2 ml-5 text-left">
                  <p className="font-semibold">Title</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color : Yellow</span>
                    <span>Size : M</span>
                  </p>
                  <p>Seller : Linaria</p>
                  <p>₹ 1099</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  color: "#9155FD",
                }}
              >
                <StarBorderIcon
                  sx={{
                    fontSize: "2rem",
                  }}
                  className="px-2"
                />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
