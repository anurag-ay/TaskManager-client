import { Stack, Typography } from "@mui/material";
import React from "react";

function ImportantCategory() {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          backgroundColor: "#232323",
          padding: "0.7em",
          borderRadius: "0.2em",
          "&:hover": {
            boxShadow: "0 0 1 1",
            cursor: "pointer",
            backgroundColor: "#6f6f6f",
          },
          color: "white",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            color: "white",
          }}
        >
          <Typography>Important Tasks</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default ImportantCategory;