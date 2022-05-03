import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import React from "react";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import LogoSvg from "!@svgr/webpack!../../public/alekodimitrov-logo.svg";
import Link from "next/link";

let navbarLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/articles",
    name: "Blog",
  },
  {
    href: "/about",
    name: "About",
  },

  {
    href: "/contacts",
    name: "Contacts",
  },
];

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
            justifyContent: "center",
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
            <Link href="/">
              <a>
                <LogoSvg className="logoSvg" />
              </a>
            </Link>
          </Box>
          <Box className={"navbarA"}>
            {navbarLinks.map((link, key) => {
              return (
                <Button
                  sx={{ textTransform: "none" }}
                  href={link.href}
                  key={key}
                >
                  <p className={"navbarTagText"}>{link.name}</p>
                </Button>
              );
            })}
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
