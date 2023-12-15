import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import React from "react";

const CustomTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

function TaskListFooter() {
  return (
    <Box
      sx={{
        mt: "1em",
        backgroundColor: "#212121",
        opacity: "70%",
      }}
    >
      <CustomTextField fullWidth label="Add New Task" variant="filled" />
    </Box>
  );
}

export default TaskListFooter;
