import { Box, Divider, Link, ListItem } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const mobileNavLinks = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "/articles", text: "Blog" },
  { id: 3, href: "/about", text: "About" },
  { id: 5, href: "/contacts", text: "Contacts" },
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
    <Box>
      <Box
        position="fixed"
        zIndex={1}
        top={0}
        left={0}
        display={{ sm: "none" }}
      >
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Box
            overflow="auto"
            sx={{
              display: "flex",
              backgroundColor: "#380e40",
              width: "100vw",
              height: "100vh",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                color: "whitesmoke",
                height: "60%",
                width: "80%",
              }}
            >
              <ul>
                {mobileNavLinks.map((link) => {
                  return (
                    <motion.div key={link.id} variants={childVariants}>
                      <ListItem>
                        <Link href={link.href} underline="none" color={"#ffff"}>
                          <h4>{link.text}</h4>
                        </Link>
                      </ListItem>
                      <Divider color={"#4f176a"} />
                    </motion.div>
                  );
                })}
              </ul>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default MobileNavigation;
