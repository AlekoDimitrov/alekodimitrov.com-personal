import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

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
          <h2 className="heroH2">👋,</h2>
          <p className="heroP">
            Hi there, my name is Aleko. I like to build web applications. Here,
            you&apos;ll find written summaries about topics I find interesting
            and would like to learn more about. I&apos;m ususally not
            specialized in what I write about, but when I want to learn
            something, I try to explain it. Richard Feynman came up with the
            method—study, teach, refine, simplify.
          </p>
          <h2 className="heroH2">I ❤️</h2>
          <Box display={"flex"} alignItems={"center"} color="rgb(87, 87, 87)">
            <p className="heroH4">
              Next.js, React, Linux, FOSS, zero-knowledge, DeFi, Monero,
              Personal Finance (FIRE in 🇪🇺)
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
