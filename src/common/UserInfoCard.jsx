import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

function UserInfoCard() {
  return (
    <Stack
      direction="row"
      sx={{
        p: "0.5em",
        alignItems: "center",
        backgroundColor: "#212121",
      }}
    >
      <Avatar />
      <Stack direction="column" sx={{ ml: "1em", color: "white" }}>
        <Typography>Full Name</Typography>
        <Typography>@username</Typography>
      </Stack>
    </Stack>
  );
}

export default UserInfoCard;
