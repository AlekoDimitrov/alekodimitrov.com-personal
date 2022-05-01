import { AppBar, IconButton, Toolbar } from "@mui/material";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import React from "react";
import { Box } from "@mui/system";
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
        backgroundColor: { sm: "transparent", xs: "#5d176a" },
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
              flex: 1.3,
            }}
          >
            <Link href="/">
              <a>
                <LogoSvg className="logoSvg" />
              </a>
            </Link>
          </Box>
          <Box className={"navbarA"}>
            <a href={"/"} className={"navbarTagText"}>
              Home
            </a>
            <a href={"/articles"} className={"navbarTagText"}>
              Blog
            </a>
            <a href={"/about"} className={"navbarTagText"}>
              About
            </a>
            <a href={"/projects"} className={"navbarTagText"}>
              Projects
            </a>
            <a href={"/contacts"} className={"navbarTagText"}>
              Contacts
            </a>
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
