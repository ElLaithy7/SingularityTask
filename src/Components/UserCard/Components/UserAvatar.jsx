import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = () => {
  return (
    <div>
      <Avatar
        sx={{
          backgroundColor: "#EDD6DE",
          color: "black",
          fontWeight: "600",
          fontSize: "medium",
        }}
        variant="rounded"
      >
        SA
      </Avatar>
    </div>
  );
};

export default UserAvatar;
