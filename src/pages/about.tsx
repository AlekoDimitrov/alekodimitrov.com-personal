import { Box, Divider, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import ContactForm from "../components/ContactForm";

const about = () => {
  return (
    <>
      <Head>
        <title>Abot Me | Aleko Dimitrov</title>
      </Head>

      <Box
        padding={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: { xs: 8, sm: 14 },
        }}
      >
        <Typography variant="h3">About me 👨‍🦲</Typography>
        <Typography variant="body2" mt={2} mb={6}>
          My web development journey began in 2017 when I had to figure out what
          I was gonna do for a living. I did it on and off for a couple of
          years. By the end of 2021, I had developed my love for solving
          problems. The more I grew, the better I understood how valuable a good
          software developer is. Now I&apos;m here, creating things and having
          fun. I don&apos;t think I&apos;ll ever turn back. <br /> <br /> My
          dream is to reach the peak of every necessary skill required to be an
          indispensable part of every tech team.
        </Typography>
        <Divider />
        <Typography variant="h3" mt={6}>
          My Toolkit
        </Typography>
        <Box mb={4}>
          <Typography variant="body2" mb={2} color="#4f176a">
            (JavaScript, React, Next.js, Node.js, Python)
          </Typography>
          <Typography variant="body1">
            My interests are within the JavaScript + TypeScript ecosystem. I
            love to work with React and Next.js.
          </Typography>
          <Typography variant="body2" mt={2}>
            I always strive to write clean, functional code and inefficiencies
            are never overlooked.
          </Typography>
          <Typography variant="body2" mt={2}>
            Aside from coding, I enjoy learning and growing my skills through
            active engagement. I read, write and do everything that leads me
            closer to proficiency. I believe that only through mastery of crafts
            can a person ever achieve anything worth sharing.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default about;
