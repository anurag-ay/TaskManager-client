import { Stack } from "@mui/material";
import React from "react";
import Task from "./Task";
import { useRenderTask } from "../../context/renderTasksContext";

function TaskBody() {
  const [renderTask] = useRenderTask();

  return (
    <Stack gap={1} sx={{ height: "62vh", overflowY: "scroll" }}>
      {renderTask &&
        renderTask.map((item, index) => <Task key={index} task={item} />)}
    </Stack>
  );
}

export default TaskBody;
