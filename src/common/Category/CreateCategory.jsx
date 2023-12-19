import styled from "@emotion/styled";
import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import axios, { addCategoryRoute } from "../../api/api";
import { useUserInfo } from "../../context/userInfoContext";
import { useUserCategory } from "../../context/userCategoryContext";
import { useActiveCategory } from "../../context/activeCategoryContext";

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
          backgroundColor: "#212121",
          borderRadius: "0.2em",
          color: "white",
        }}
      >
        <Stack
          direction="row"
          component="form"
          onSubmit={createCategory}
          sx={{ flexGrow: "1" }}
        >
          <SideBarTextField
            fullWidth
            autoFocus
            color="secondary"
            onChange={(e) => setType(e.target.value)}
          />
        </Stack>
      </Stack>
    </>
  );
}

const SideBarTextField = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    color: "white",
    borderRadius: 4,
    fontSize: 16,
    fontWeight: "520",
    borderColor: "white",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
  },

  "&:hover": {
    borderColor: "#d4dee0",
  },
}));

export default CreateCategory;
