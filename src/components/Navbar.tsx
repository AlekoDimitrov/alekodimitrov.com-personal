import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Box, height, width } from "@mui/system";
import MobileNavigation from "./MobileNavigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navigation, setNavigation] = useState(0);
  const setNavigationState = () => {
    if (navigation === 1) {
      setNavigation((navigation = 0));
    } else {
      setNavigation((navigation = 1));
    }
  };
  return (
    <div>
      {navigation === 1 && <MobileNavigation />}
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
            <h1>AD</h1>
            <Box onClick={setNavigationState}>
              <motion.div
                style={{ display: "flex" }}
                whileTap={{
                  scale: 0,
                  opacity: 0,
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  sx={{ padding: "0", width: "100%", height: "100%" }}
                >
                  {navigation === 1 ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </motion.div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
