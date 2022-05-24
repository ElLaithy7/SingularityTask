import { Button } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const WatchIntroButton = () => {
  const buttonStyles = { textTransform: "none", fontWeight: "bold" };
  return (
    <div>
      <Button variant="text" startIcon={<PlayArrowIcon />} sx={buttonStyles}>
        Watch Our Intro
      </Button>
    </div>
  );
};

export default WatchIntroButton;
