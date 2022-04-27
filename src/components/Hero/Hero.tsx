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
            <Typography variant="h1">Aleko Dimitrov,</Typography>
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
            I create authentic and functional web applications by following
            industry-set principles and experimenting my way through to the
            finished product. I also enjoy blogging, but I usually write about
            subjects I want to understand better. Here, you can find my
            summarized efforts trying to grasp everything from web technologies
            and cryptography to philosophy and economics.
          </p>
          <h2 className="heroH2">I ❤️</h2>
          <Box display={"flex"} alignItems={"center"} color="rgb(87, 87, 87)">
            <p className="heroH4">
              Ethereum, Linux, FOSS, zero-knowledge, DeFi, less web bloat
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
