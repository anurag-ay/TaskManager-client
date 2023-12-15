import { DoneTwoTone } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";

function TaskListHeader() {
  return (
    <Stack sx={{ mb: "1em" }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", color: "white" }}
      >
        <Typography variant="h1" sx={{ fontSize: "2em" }}>
          Category Name
        </Typography>
        <IconButton>
          <DoneTwoTone />
        </IconButton>
      </Stack>
      <Typography variant="body1" color="white">
        Friday, December 15
      </Typography>
    </Stack>
  );
}

export default TaskListHeader;
