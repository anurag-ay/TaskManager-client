import { DoneOutlineSharp } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

function NavBar() {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#212121" }} position="static">
        <Toolbar variant="dense">
          <IconButton sx={{ color: "#4aaaef" }}>
            <DoneOutlineSharp sx={{ height: "0.9em", width: "0.9em" }} />
          </IconButton>
          <Typography sx={{ ml: "0.3em", fontSize: "0.9em" }}>
            Task Manager
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
