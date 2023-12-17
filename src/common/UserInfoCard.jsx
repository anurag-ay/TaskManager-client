import { Avatar, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useUserInfo } from "../context/userInfoContext";

function UserInfoCard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const userInfo = useUserInfo();

  useEffect(() => {
    if (!userInfo) return;
    const { firstName, lastName, userName } = userInfo;
    setFirstName(firstName);
    setLastName(lastName);
    setUserName(userName);
  }, [userInfo]);
  return (
    <Stack
      direction="row"
      sx={{
        p: "0.5em",
        alignItems: "center",
        backgroundColor: "#212121",
      }}
    >
      <Avatar />
      <Stack direction="column" sx={{ ml: "1em", color: "white" }}>
        <Typography>{`${firstName} ${lastName}`}</Typography>
        <Typography>{`@${userName}`}</Typography>
      </Stack>
    </Stack>
  );
}

export default UserInfoCard;
