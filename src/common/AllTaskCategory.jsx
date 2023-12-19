import { Stack, Typography } from "@mui/material";
import React from "react";
import { useActiveCategory } from "../context/activeCategoryContext";
import { useUserInfo } from "../context/userInfoContext";

function AllTaskCategory() {
  const [activeCategory, setActiveCategory] = useActiveCategory();
  const userInfo = useUserInfo();

  function handleClick() {
    if (!userInfo) return;
    setActiveCategory(userInfo.allTaskCategory);
  }

  return (
    <>
      <Stack
        onClick={handleClick}
        direction="row"
        sx={{
          backgroundColor:
            activeCategory === userInfo?.allTaskCategory
              ? "#6f6f6f"
              : "#232323",
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
          <Typography>To Do</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default AllTaskCategory;
