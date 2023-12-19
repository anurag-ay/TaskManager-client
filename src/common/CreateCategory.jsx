// import styled from "@emotion/styled";
import { Box, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import axios, { addCategoryRoute } from "../api/api";
import { useUserInfo } from "../context/userInfoContext";
import { useUserCategory } from "../context/userCategoryContext";
import { useActiveCategory } from "../context/activeCategoryContext";

function CreateCategory({ setIsClickCreateNewCategory }) {
  const [type, setType] = useState("");
  const userInfo = useUserInfo();
  const [, setUserCategory] = useUserCategory();
  const [, setActiveCategory] = useActiveCategory();

  async function createCategory(e) {
    e.preventDefault();
    if (!userInfo) return;
    if (!type) return;

    const payload = {
      type,
      userId: userInfo._id,
    };
    try {
      const res = await axios.post(addCategoryRoute, payload);
      const newCategory = res.data;
      setUserCategory((prev) => [...prev, newCategory]);
      setActiveCategory(newCategory._id);
      setIsClickCreateNewCategory(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Stack
        direction="row"
        sx={{
          backgroundColor: "#232323",
          borderRadius: "0.2em",
          color: "white",
        }}
      >
        <Box component="form" onSubmit={createCategory}>
          <TextField autoFocus onChange={(e) => setType(e.target.value)} />
        </Box>
      </Stack>
    </>
  );
}

export default CreateCategory;
