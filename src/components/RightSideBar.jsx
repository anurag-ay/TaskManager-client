import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import Category from "../common/Category";
import UserInfoCard from "../common/UserInfoCard";

function RightSideBar() {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: "93.4vh",
        backgroundColor: "#212121",
        p: "0.3em",
        overflowY: "scroll",
      }}
    >
      <UserInfoCard />
      <Divider />

      <Stack gap="0.4em">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </Stack>
    </Box>
  );
}

export default RightSideBar;
