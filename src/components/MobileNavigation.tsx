import { Box, Link } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";

const MobileNavigation = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "whitesmoke",
        }}
      >
        <Link href="#" color={"#ffff"}>
          <h2>Home</h2>
        </Link>
        <Link href="#" color={"#ffff"}>
          <h2>Blog</h2>
        </Link>
        <Link href="#" color={"#ffff"}>
          <h2>About</h2>
        </Link>
        <Link href="#" color={"#ffff"}>
          <h2>Projects</h2>
        </Link>
        <Link href="#" color={"#ffff"}>
          <h2>About</h2>
        </Link>
      </Box>
    </Box>
  );
};

export default MobileNavigation;
