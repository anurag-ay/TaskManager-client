import React from "react";
import NavBar from "../components/NavBar";
import RightSideBar from "../components/RightSideBar";
import TaskList from "../components/TaskList";
import LeftSideBar from "../components/LeftSideBar";
import { Grid } from "@mui/material";

function Home() {
  return (
    <>
      <NavBar />

      <Grid container sx={{ height: "93.4vh", boxSizing: "border-box" }}>
        <Grid item lg={2}>
          <RightSideBar />
        </Grid>
        <Grid item xs sm lg xl>
          <TaskList />
        </Grid>
        {/* <Grid item lg={2}>
          <LeftSideBar />
        </Grid> */}
      </Grid>
    </>
  );
}

export default Home;
