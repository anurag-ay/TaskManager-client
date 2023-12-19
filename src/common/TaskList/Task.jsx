import { Delete, StarOutlineOutlined } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { Checkbox, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import axios, { deleteTaskRoute, updateTaskRoute } from "../../api/api";
import { useUserInfo } from "../../context/userInfoContext";
import { useRenderTask } from "../../context/renderTasksContext";
import { useUserTasks } from "../../context/userTaskContext";

function Task({ task }) {
  const [importantTask, setImportantTask] = useState(false);

  const [renderTask, setRenderTask] = useRenderTask();
  const [userTasks, setUserTasks] = useUserTasks();
  const userInfo = useUserInfo();
  const { title } = task;

  async function handleTaskStatusChange(e) {
    console.log(e.target.checked);
    const { _id, title, user, note, isImportant, category } = task;

    const payload = {
      _id,
      title,
      user,
      note,
      isDone: e.target.checked,
      isImportant,
      category,
    };
    try {
      await axios.put(updateTaskRoute, payload);

      // const doneTaskInUserList = userTasks.map((task) => {
      //   if (task._id === _id) {
      //     return { ...task, isDone: true };
      //   }
      //   return task;
      // });
      // setUserTasks(doneTaskInUserList);

      // const notDoneListRender = renderTask.filter(
      //   (task) => task.isDone === false
      // );

      // setRenderTask(notDoneListRender);
    } catch (err) {
      console.log(err);
    }
  }

  async function markImportant() {
    setImportantTask((prev) => !prev);

    const { _id, title, user, note, isDone, category } = task;

    const markImportantTasks = userTasks.map((task) => {
      if (task._id === _id) {
        return { ...task, isImportant: true };
      }
      return task;
    });

    setUserTasks(markImportantTasks);

    const payload = {
      _id,
      title,
      user,
      note,
      isDone,
      isImportant: !importantTask,
      category,
    };
    try {
      await axios.put(updateTaskRoute, payload);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteTask() {
    if (!userInfo) return;

    try {
      const res = await axios.delete(
        `${deleteTaskRoute}/${userInfo._id}/${userInfo.allTaskCategory}/${task._id}`
      );

      const deletedTask = res.data;
      const taskListAfterDeletionInRender = renderTask.filter(
        (task) => task._id !== deletedTask._id
      );

      setRenderTask(taskListAfterDeletionInRender);

      const taskListAfterDeletionInUserTask = userTasks.filter(
        (task) => task._id !== deletedTask._id
      );

      setUserTasks(taskListAfterDeletionInUserTask);
    } catch (err) {
      console.log(err);
    }
  }

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
        <Checkbox sx={{ color: "white" }} onChange={handleTaskStatusChange} />
        <Typography ml="0.6em">{title}</Typography>
      </Stack>

      <Stack direction="row">
        <IconButton onClick={deleteTask} sx={{ color: "white" }}>
          <Delete />
        </IconButton>

        <IconButton onClick={markImportant}>
          {importantTask ? (
            <StarIcon sx={{ color: "yellow" }} />
          ) : (
            <StarOutlineOutlined sx={{ color: "white" }} />
          )}
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default Task;
