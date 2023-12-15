import { Stack } from "@mui/material";
import React from "react";
import Task from "./Task";

function TaskBody() {
  return (
    <Stack gap={1} sx={{ height: "62vh", overflowY: "scroll" }}>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </Stack>
  );
}

export default TaskBody;
