import { Box, Grid } from "@mui/material";
import React from "react";
import backgroundImage from "../assets/backgroundImages/Background.jpg";
import TaskListHeader from "../common/TaskList/TaskListHeader";
import TaskBody from "../common/TaskList/TaskBody";
import TaskListFooter from "../common/TaskList/TaskListFooter";

function TaskList() {
  return (
    <Box
      sx={{
        height: "93.4vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        p: "2em",
        boxSizing: "border-box",
      }}
    >
      <Grid container direction="column">
        <Grid item>
          <TaskListHeader />
        </Grid>
        <Grid item>
          <TaskBody />
        </Grid>
        <Grid item>
          <TaskListFooter />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TaskList;
