import { StarOutlineOutlined } from "@mui/icons-material";
import { Checkbox, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

function Task() {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        backgroundColor: "#212121",
        color: "white",
        borderRadius: "0.2em",
        opacity: "87%",
        "&:hover": {
          opacity: "100%",
        },
      }}
    >
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Checkbox
          sx={{ color: "white" }}
          checked={true}
          // onChange={handleChange}
        />
        <Typography ml="0.6em">This is the task You have to do</Typography>
      </Stack>
      <IconButton>
        <StarOutlineOutlined sx={{ color: "white" }} />
      </IconButton>
    </Stack>
  );
}

export default Task;
