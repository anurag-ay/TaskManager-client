import React, { useState } from "react";
import { Sort } from "@mui/icons-material";
import {
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useActiveCategory } from "../../context/activeCategoryContext";
import { useUserCategory } from "../../context/userCategoryContext";
import { useUserInfo } from "../../context/userInfoContext";

function TaskListHeader() {
  const [activeCategory] = useActiveCategory();
  const [categories] = useUserCategory();
  const userInfo = useUserInfo();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function currentDate() {
    let today = new Date();
    return today.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }

  function currentCategory() {
    if (activeCategory === "today") {
      return "Today";
    } else if (activeCategory === "important") {
      return "Important";
    } else if (activeCategory === "done") {
      return "Done";
    } else if (activeCategory === userInfo?.allTaskCategory) {
      return "Todo";
    } else {
      return categories?.find((category) => category._id === activeCategory)
        ?.type;
    }
  }

  return (
    <Stack sx={{ mb: "1em" }}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", color: "white" }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "2em", color: "black", fontWeight: "700" }}
        >
          {currentCategory()}
        </Typography>

        <Tooltip title="Sort">
          <IconButton onClick={handleClick} sx={{ color: "black" }}>
            <Sort />
          </IconButton>
        </Tooltip>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem>Latest</MenuItem>
          <MenuItem>Oldest</MenuItem>
        </Menu>
      </Stack>

      <Typography variant="body1" color="white">
        {currentDate()}
      </Typography>
    </Stack>
  );
}

export default TaskListHeader;
