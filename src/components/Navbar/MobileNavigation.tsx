import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const mobileNavLinks = [
  { id: 1, href: "#", text: "Home" },
  { id: 2, href: "#", text: "About" },
  { id: 3, href: "#", text: "Projects" },
  { id: 4, href: "#", text: "Contacts" },
];

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const MobileNavigation = (props: any) => {
  return (
    <AnimatePresence>
      {props.isOpen === true && (
        <Box position="absolute" overflow={"hidden"} maxWidth={"100%"}>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#1976d2",
                width: "100vw",
                height: "100vh",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  color: "whitesmoke",
                  width: "80%",
                }}
              >
                <ul>
                  {mobileNavLinks.map((link) => {
                    return (
                      <motion.div key={link.id} variants={childVariants}>
                        <ListItem>
                          <Link
                            href={link.href}
                            underline="none"
                            color={"#ffff"}
                          >
                            <h4>{link.text}</h4>
                          </Link>
                        </ListItem>
                        <Divider />
                      </motion.div>
                    );
                  })}
                  {/* <ListItem>
                    <Link href="#" underline="none" color={"#ffff"}>
                      <h4>Home</h4>
                    </Link>
                  </ListItem>
                  <Divider /> */}
                </ul>
              </Box>
            </Box>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
