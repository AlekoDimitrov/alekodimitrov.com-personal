import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <Box padding={3} mt={8}>
        <Box
          sx={{
            display: { sm: "flex" },
            justifyContent: { sm: "space-between" },
          }}
        >
          <Box
            sx={{
              display: { sm: "flex" },
              flexDirection: { sm: "column" },
              justifyContent: { sm: "center" },
            }}
          >
            <Typography variant="h3">Aleko Dimitrov,</Typography>
            <Typography variant="body1">developer for the web.</Typography>
          </Box>
          <Avatar
            alt="Aleko Dimitrov"
            src="./aleko-avatar.jpg"
            sx={{
              width: { xs: 90, sm: 120 },
              height: { xs: 90, sm: 120 },
              marginTop: 3,
              marginBottom: 3,
            }}
          ></Avatar>
        </Box>
        <Box
          sx={{
            backgroundColor: "#380e40",
            padding: 3,
            color: "whitesmoke",
            borderRadius: 5,
          }}
        >
          <Box display={"flex"}>
            <motion.h2
              initial={{ rotate: 0 }}
              animate={{ rotate: 20 }}
              transition={{ duration: 0.3, yoyo: "Infinity" }}
              className="heroH2"
            >
              👋
            </motion.h2>
            <h2 className="heroH2">,</h2>
          </Box>

          <Box
            sx={{
              borderStyle: "none",
              borderRight: "none",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "4px solid",
              borderImage:
                "linear-gradient(to right, rgb(73, 73, 170), #9c27b0) 1",
              width: "36.5px",
              marginBlockEnd: "0.83em",
            }}
          ></Box>
          <p className="heroP">
            Welcome, I&apos;m glad you&apos;re here! In my blog, you&apos;ll
            find posts about everything I find interesting. I mostly write about
            topics I lack knowledge in, but then there are some that I know a
            bit more about. <br /> Richard Feynman came up with the
            method—study, teach, refine, and simplify. This blog was made with
            the &quot;teach, refine, and simplify&quot; part of his method in
            mind.
          </p>
          <Box display={"flex"}>
            <h2 className="heroH2">I</h2>
            <motion.h2
              initial={{ scale: 0.6 }}
              animate={{ scale: 0.8 }}
              transition={{ duration: 0.3, yoyo: "Infinity" }}
              className="heroH2"
            >
              ❤️
            </motion.h2>
          </Box>

          <Box
            sx={{
              borderStyle: "none",
              borderRight: "none",
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "4px solid",
              borderImage:
                "linear-gradient(to right, rgb(73, 73, 170), #9c27b0) 1",
              width: "33px",
              marginBlockEnd: "0.83em",
            }}
          ></Box>
          <Box display={"flex"} alignItems={"center"} color="rgb(87, 87, 87)">
            <p className="heroH4">
              Next.js, React, Linux, FOSS, zero-knowledge, DeFi, Monero,
              Personal Finance (FIRE 🇪🇺)
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
