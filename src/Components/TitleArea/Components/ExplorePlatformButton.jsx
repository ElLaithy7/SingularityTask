import { Button } from "@mui/material";
import React from "react";

const ExplorePlatformButton = () => {
  const buttonStyles = { textTransform: "none", marginRight: "20px" };
  return (
    <div>
      <Button variant="contained" size="large" sx={buttonStyles}>
        Explore Platform
      </Button>
    </div>
  );
};

export default ExplorePlatformButton;
