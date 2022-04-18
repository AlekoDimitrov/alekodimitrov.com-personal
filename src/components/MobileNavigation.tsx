import { Box, Link } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavigation = (props: any) => {
  return (
    <AnimatePresence>
      {props.isOpen === true && (
        <Box>
          <motion.div
            initial={{ y: "-50%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%", opacity: ".5" }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#1976d2",
                width: "100vw",
                height: "100vh",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  padding: "25px",
                  height: "86%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  color: "whitesmoke",
                }}
              >
                <Link href="#" underline="none" color={"#ffff"}>
                  <h3>Home</h3>
                </Link>
                <Link href="#" underline="none" color={"#ffff"}>
                  <h3>Blog</h3>
                </Link>
                <Link href="#" underline="none" color={"#ffff"}>
                  <h3>About</h3>
                </Link>
                <Link href="#" underline="none" color={"#ffff"}>
                  <h3>Projects</h3>
                </Link>
                <Link href="#" underline="none" color={"#ffff"}>
                  <h3>About</h3>
                </Link>
              </Box>
            </Box>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
