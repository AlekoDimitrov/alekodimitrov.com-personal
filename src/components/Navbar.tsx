import {
  AppBar,
  IconButton,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import { Box, height, width } from "@mui/system";
import MobileNavigation from "./MobileNavigation";
import { motion } from "framer-motion";
import LogoSvg from "!@svgr/webpack!../../public/alekodimitrov-logo.svg";
import Link from "next/link";

const Navbar = (props: any) => {
  const setNavigationState = () => {
    props.mobileNavigation === false
      ? props.setMobileNavigation(true)
      : props.setMobileNavigation(false);
  };
  return (
    <AppBar
      className="appBar"
      color="transparent"
      elevation={0}
      sx={{
        position: { sm: "absolute" },
        backgroundColor: { sm: "transparent", xs: "purple" },
      }}
    >
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Link href="#">
              <a>
                <LogoSvg className="logoSvg" />
              </a>
            </Link>
          </Box>
          <Box className={"navbarA"}>
            <a href={"#"}>Home</a>
            <a href={"#"}>Blog</a>
            <a href={"#"}>About</a>
            <a href={"#"}>Projects</a>
            <a href={"#"}>Contacts</a>
          </Box>
          <Box
            onClick={setNavigationState}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <motion.div
              style={{ display: "flex", justifyContent: "flex-end" }}
              whileTap={{
                scale: 0.5,
                opacity: 0.5,
              }}
            >
              <IconButton color="inherit" aria-label="menu">
                {props.mobileNavigation ? (
                  <IoClose color="white" />
                ) : (
                  <HiMenuAlt4 color="white" />
                )}
              </IconButton>
            </motion.div>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
