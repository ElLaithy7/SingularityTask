import { Typography } from "@mui/material";
import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="titleContainer">
      <h1>
        Banking <br />
        the new way
      </h1>

      <div className="subtitle">
        <Typography variant="h6">
          A customer-focused bank that provides <br />
          complete financial solutions.
        </Typography>
      </div>
    </div>
  );
};

export default Title;
