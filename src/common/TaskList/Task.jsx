import {
  CalendarMonth,
  Delete,
  StarOutlineOutlined,
} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import {
  Checkbox,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios, { deleteTaskRoute, updateTaskRoute } from "../../api/api";
import { useUserInfo } from "../../context/userInfoContext";
import { useRenderTask } from "../../context/renderTasksContext";
import { useUserTasks } from "../../context/userTaskContext";
import { useIsProgress } from "../../context/isProgressContext";
import formatDate from "../../utils/formatDate";

function Task({ task }) {
  const [importantTask, setImportantTask] = useState(false);

  const [renderTask, setRenderTask] = useRenderTask();
  const [userTasks, setUserTasks] = useUserTasks();
  const userInfo = useUserInfo();
  const [, setIsProgress] = useIsProgress();
  const { title, isDone, updatedAt, isImportant } = task;

  async function handleTaskStatusChange(e) {
    const { _id, title, user, note, isImportant, category } = task;
    setIsProgress(true);
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
      const doneTaskInUserList = userTasks.map((task) => {
        if (task._id === _id) {
          return { ...task, isDone: !isDone };
        }
        return task;
      });
      setUserTasks(doneTaskInUserList);

      const notDoneListRender = renderTask.filter((task) => task._id !== _id);
      setRenderTask(notDoneListRender);

      await axios.put(updateTaskRoute, payload);

      setIsProgress(false);
    } catch (err) {
      setIsProgress(false);
      console.log(err);
    }
  }

  async function markImportant() {
    setIsProgress(true);
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
      setIsProgress(false);
    } catch (err) {
      setIsProgress(false);
      console.log(err);
    }
  }

  async function deleteTask() {
    if (!userInfo) return;
    setIsProgress(true);

    try {
      const taskListAfterDeletionInRender = renderTask.filter(
        (filterTask) => filterTask._id !== task._id
      );

      setRenderTask(taskListAfterDeletionInRender);

      const taskListAfterDeletionInUserTask = userTasks.filter(
        (filterTask) => filterTask._id !== task._id
      );

      setUserTasks(taskListAfterDeletionInUserTask);

      await axios.delete(
        `${deleteTaskRoute}/${userInfo._id}/${userInfo.allTaskCategory}/${task._id}`
      );

      setIsProgress(false);
    } catch (err) {
      setIsProgress(false);
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
          <Tooltip enterDelay={2000} title="Delete Task" placement="top">
            <IconButton onClick={deleteTask} sx={{ color: "white" }}>
              <Delete />
            </IconButton>
          </Tooltip>
          <Tooltip enterDelay={1000} title="Mark Important" placement="top">
            <IconButton onClick={markImportant}>
              {isImportant ? (
                <StarIcon sx={{ color: "yellow" }} />
              ) : (
                <StarOutlineOutlined sx={{ color: "white" }} />
              )}
            </IconButton>
          </Tooltip>
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
