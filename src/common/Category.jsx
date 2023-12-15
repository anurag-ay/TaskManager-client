import { Task } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

function Category() {
  return (
    <>
      <Box
        sx={{
          height: "1.8em",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#232323",
          padding: "0.3em",
          borderRadius: "0.2em",
          "&:hover": {
            boxShadow: "0 0 1 1",
            cursor: "pointer",
            backgroundColor: "#6f6f6f",
          },
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            gap: "0.5em",
          }}
        >
          <Task />
          <Typography>Category</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Category;
