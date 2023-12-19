import { Delete, Task } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import axios, { deleteCategoryRoute } from "../api/api";
import { useUserInfo } from "../context/userInfoContext";
import { useUserCategory } from "../context/userCategoryContext";
import { useActiveCategory } from "../context/activeCategoryContext";
import { useRenderTask } from "../context/renderTasksContext";
import { useUserTasks } from "../context/userTaskContext";

function Category({ category }) {
  const { type } = category;
  const userInfo = useUserInfo();
  const [categories, setUserCategory] = useUserCategory();
  const [activeCategory, setActiveCategory] = useActiveCategory();
  const [, setRenderTask] = useRenderTask();
  const [userTasks, setUserTasks] = useUserTasks();

  async function deleteCategory() {
    if (!userInfo) return;
    if (!category) return;

    try {
      const res = await axios.delete(
        `${deleteCategoryRoute}/${userInfo._id}/${category._id}`
      );
      const deletedCategory = res.data;

      const newCategoryList = categories.filter(
        (category) => category._id !== deletedCategory._id
      );

      const taskListAfterCategoryDeletion = userTasks.filter(
        (task) => task.category !== deletedCategory._id
      );
      setUserTasks(taskListAfterCategoryDeletion);

      setActiveCategory(userInfo?.allTaskCategory);
      setUserCategory(newCategoryList);
      setRenderTask([]);
    } catch (err) {
      console.log(err);
    }
  }

  function selectCategory() {
    setActiveCategory(category._id);
  }

  return (
    <>
      <Stack
        onClick={selectCategory}
        direction="row"
        sx={{
          backgroundColor:
            activeCategory === category?._id ? "#6f6f6f" : "#232323",
          padding: "0.7em",
          borderRadius: "0.2em",
          justifyContent: "space-between",
          "&:hover": {
            boxShadow: "0 0 1 1",
            cursor: "pointer",
            backgroundColor: "#6f6f6f",
          },
          color: "white",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            color: "white",
          }}
        >
          <Task />
          <Typography>{type}</Typography>
        </Stack>

        <IconButton
          sx={{
            color: "white",
          }}
          onClick={deleteCategory}
        >
          <Delete />
        </IconButton>
      </Stack>
    </>
  );
}

export default Category;
