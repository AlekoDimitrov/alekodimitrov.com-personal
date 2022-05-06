import { Box, Divider, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const mobileNavLinks = [
  { href: "/", text: "Home" },
  { href: "/articles", text: "Blog" },
  { href: "/about", text: "About" },
  { href: "/contacts", text: "Contacts" },
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
  const setNavigationState = () => {
    props.mobileNavigation === true && props.setMobileNavigation(false);
  };

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
                height: "70%",
                width: "80%",
              }}
            >
              <ul>
                {mobileNavLinks.map((link, key) => {
                  return (
                    <motion.div key={key} variants={childVariants}>
                      <ListItem>
                        <Link href={link.href} passHref>
                          <button
                            onClick={setNavigationState}
                            className={"mobileNavigationButton"}
                          >
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "700", marginTop: 5 }}
                            >
                              {link.text}
                            </Typography>
                          </button>
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
