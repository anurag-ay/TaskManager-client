import React from "react";
import NavBar from "../components/NavBar";
import RightSideBar from "../components/RightSideBar";
import TaskList from "../components/TaskList";
// import LeftSideBar from "../components/LeftSideBar";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

function Home() {
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <NavBar />
      <Grid container sx={{ height: "93.4vh", boxSizing: "border-box" }}>
        <Grid item xs={12} sm={3} lg={3}>
          <RightSideBar />
        </Grid>

        {query && (
          <Grid item sm lg xl>
            <TaskList />
          </Grid>
        )}
        {/* <Grid item lg={2}>
          <LeftSideBar />
        </Grid> */}
      </Grid>
    </>
  );
}

export default Home;
