import { AppBar, IconButton, SvgIcon, Toolbar } from "@mui/material";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import { Box, height, width } from "@mui/system";
import MobileNavigation from "./MobileNavigation";
import { motion } from "framer-motion";
import LogoSvg from "!@svgr/webpack!../../../public/alekodimitrov-logo.svg";
import Link from "next/link";

const Navbar = (props: any) => {
  const setNavigationState = () => {
    props.mobileNavigation === false
      ? props.setMobileNavigation(true)
      : props.setMobileNavigation(false);
  };
  return (
    <Box>
      <AppBar color="primary">
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
                  <LogoSvg />
                </a>
              </Link>
            </Box>

            <Box onClick={setNavigationState}>
              <motion.div
                style={{ display: "flex", justifyContent: "flex-end" }}
                whileTap={{
                  scale: 0.5,
                  opacity: 0.5,
                }}
              >
                <IconButton color="inherit" aria-label="menu">
                  {props.mobileNavigation ? <IoClose /> : <HiMenuAlt4 />}
                </IconButton>
              </motion.div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
