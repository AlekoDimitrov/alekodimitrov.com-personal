import { AppBar, IconButton, SvgIcon, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Box, height, width } from "@mui/system";
import MobileNavigation from "./MobileNavigation";
import { motion } from "framer-motion";
import LogoSvg from "!@svgr/webpack!../../../public/alekodimitrov-logo.svg";
import Link from "next/link";

const Navbar = () => {
  const [navigation, setNavigation] = useState<boolean>(false);
  const setNavigationState = () => {
    if (navigation === true) {
      setNavigation(false);
    } else {
      setNavigation(true);
    }
  };
  return (
    <Box height={65}>
      <AppBar>
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
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LogoSvg />
                    <h4>Aleko Dimitrov</h4>
                  </Box>
                </a>
              </Link>
            </Box>

            <Box onClick={setNavigationState}>
              <motion.div
                style={{ display: "flex", justifyContent: "flex-end" }}
                whileTap={{
                  scale: 0,
                  opacity: 0,
                }}
              >
                <IconButton color="inherit" aria-label="menu">
                  {navigation === true ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </motion.div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {navigation === true ? (
        <MobileNavigation isOpen={true} />
      ) : (
        <MobileNavigation isOpen={false} />
      )}
    </Box>
  );
};

export default Navbar;
