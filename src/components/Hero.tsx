import React from "react";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

const Hero = () => {
  return (
    <>
      <Box padding={3} mt={8}>
        <h1>Aleko Dimitrov,</h1>
        <p>developer for the web.</p>
        <Avatar
          alt="Aleko Dimitrov"
          src="./aleko-avatar.jpg"
          sx={{ width: 80, height: 80, marginTop: 5, marginBottom: 3 }}
        ></Avatar>
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
            I'm a front-end developer based in Bulgaria. My passion is to build
            web applications by following proven industry principles and through
            experimentation and tinkering.
          </p>
          <h2 className="heroH2">I ❤️</h2>
          <Box display={"flex"} alignItems={"center"} color="rgb(87, 87, 87)">
            <p className="heroH4">Ethereum, Linux, FOSS, zero-knowledge</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
