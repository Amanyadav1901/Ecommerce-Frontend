import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{
          bgcolor: "black",
          color: "white",
          py: 3,
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Company
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5 " variant="h6" gutterBottom>
              About
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              Blog
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              Press
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              Jobs
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Solutions
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5 " variant="h6" gutterBottom>
              Marketing
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              Analytics
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              Commerce
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              Insights
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Documentation
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5 " variant="h6" gutterBottom>
              Guides
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5 " variant="h6">
            Legal
          </Typography>
          <div className="flex flex-col">
            <Button className="pb-5 " variant="h6" gutterBottom>
              Claim
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              Privacy
            </Button>
            <Button className="pb-5 " variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Company. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
