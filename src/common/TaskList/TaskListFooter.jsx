import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useUserInfo } from "../../context/userInfoContext";
import axios, { addTaskRoute } from "../../api/api";
import { useUserTasks } from "../../context/userTaskContext";
import { useRenderTask } from "../../context/renderTasksContext";
import { useActiveCategory } from "../../context/activeCategoryContext";

function TaskListFooter() {
  const [taskTitle, setTaskTitle] = useState("");

  const userInfo = useUserInfo();
  const [, setAllTasks] = useUserTasks();
  const [, setRenderTask] = useRenderTask();
  const [activeCategory] = useActiveCategory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!userInfo) return;
    if (!taskTitle) return;

    const payload = {
      title: taskTitle,
      userId: userInfo._id,
      categoryId: activeCategory,
    };
    const res = await axios.post(addTaskRoute, payload);
    const newTask = res.data;
    setRenderTask((prev) => [...prev, newTask]);
    setAllTasks((prev) => [...prev, newTask]);
    setTaskTitle("");
  }
  return (
    <Box
      sx={{
        mt: "1em",
        backgroundColor: "#212121",
        opacity: "70%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <CustomTextField
          fullWidth
          label="Add New Task"
          variant="filled"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </form>
    </Box>
  );
}

const CustomTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

export default TaskListFooter;
