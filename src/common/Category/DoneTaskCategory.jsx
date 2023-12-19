import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useActiveCategory } from "../../context/activeCategoryContext";
import { CheckCircle } from "@mui/icons-material";

function DoneTaskCategory() {
  const [, setActiveCategory] = useActiveCategory();

  function handleClick() {
    setActiveCategory("done");
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
          <IconButton sx={{ color: "#16bc79" }}>
            <CheckCircle />
          </IconButton>
          <Typography>Done</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default DoneTaskCategory;
