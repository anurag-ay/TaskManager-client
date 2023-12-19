import { Stack, Typography } from "@mui/material";
import React from "react";
import { useActiveCategory } from "../context/activeCategoryContext";

function TodayCategory() {
  const [, setActiveCategory] = useActiveCategory();

  function handleClick() {
    setActiveCategory("today");
  }

  return (
    <>
      <Stack
        onClick={handleClick}
        direction="row"
        sx={{
          backgroundColor: "#232323",
          padding: "0.7em",
          borderRadius: "0.2em",
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
          <Typography>Today</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default TodayCategory;
