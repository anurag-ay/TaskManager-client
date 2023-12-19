import {
  CalendarMonth,
  Delete,
  StarOutlineOutlined,
} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { Checkbox, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import axios, { deleteTaskRoute, updateTaskRoute } from "../../api/api";
import { useUserInfo } from "../../context/userInfoContext";
import { useRenderTask } from "../../context/renderTasksContext";
import { useUserTasks } from "../../context/userTaskContext";
import formatDate from "../../utils/formatDate";

function Task({ task }) {
  const [importantTask, setImportantTask] = useState(false);

  const [renderTask, setRenderTask] = useRenderTask();
  const [userTasks, setUserTasks] = useUserTasks();
  const userInfo = useUserInfo();
  const { title, isDone, updatedAt, isImportant } = task;

  async function handleTaskStatusChange(e) {
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

      const doneTaskInUserList = userTasks.map((task) => {
        if (task._id === _id) {
          return { ...task, isDone: true };
        }
        return task;
      });
      setUserTasks(doneTaskInUserList);

      const notDoneListRender = renderTask.filter(
        (task) => task.isDone === false
      );

      setRenderTask(notDoneListRender);
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
      sx={{
        backgroundColor: "#212121",
        color: "white",
        borderRadius: "0.2em",
        opacity: "87%",
        "&:hover": {
          opacity: "100%",
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Checkbox
            sx={{ color: "white" }}
            onChange={handleTaskStatusChange}
            checked={isDone}
          />
          <Typography ml="0.6em">{isDone ? <s>{title}</s> : title}</Typography>
        </Stack>

        <Stack direction="row">
          <IconButton onClick={deleteTask} sx={{ color: "white" }}>
            <Delete />
          </IconButton>

          <IconButton onClick={markImportant}>
            {isImportant ? (
              <StarIcon sx={{ color: "yellow" }} />
            ) : (
              <StarOutlineOutlined sx={{ color: "white" }} />
            )}
          </IconButton>
        </Stack>
      </Stack>

      {isDone && (
        <Stack
          direction="row"
          sx={{
            p: "0.2em",
            pt: "0",
            alignItems: "center",
          }}
        >
          <CalendarMonth
            sx={{ width: "0.6em", height: "0.6em", mb: "0.11em", ml: "0.2em" }}
          />
          <Typography sx={{ fontSize: "0.8em", ml: "0.2em", fontWeight: "50" }}>
            {`Completed on ${formatDate(new Date(updatedAt))}`}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}

export default Task;
