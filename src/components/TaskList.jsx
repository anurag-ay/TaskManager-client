import { Box, Grid } from "@mui/material";
import React, { useRef } from "react";
import backgroundImage from "../assets/backgroundImages/Background.jpg";
import TaskListHeader from "../common/TaskList/TaskListHeader";
import TaskBody from "../common/TaskList/TaskBody";
import TaskListFooter from "../common/TaskList/TaskListFooter";
import { useActiveCategory } from "../context/activeCategoryContext";

function TaskList() {
  const [activeCategory] = useActiveCategory();
  const taskBodyRef = useRef();

  function isSpecificCategory() {
    if (
      activeCategory === "today" ||
      activeCategory === "important" ||
      activeCategory === "done" ||
      !activeCategory
    )
      return false;
    return true;
  }
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
          <TaskBody taskBodyRef={taskBodyRef} />
        </Grid>
        {isSpecificCategory() && (
          <Grid item>
            <TaskListFooter taskBodyRef={taskBodyRef} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default TaskList;
