import { Box, Divider, Link, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

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
          My web journey began in 2017 when I was still figuring out what
          digital skills I wanted to focus on. I was learning web development on
          and off for a couple of years and by the end of 2021, I had found my love
          for solving web problems. The more I learned, the more I understood how
          valuable a good software developer is. Now, my goal is to become one.
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
            enjoy working with React and Next.js.
          </Typography>
          <Typography variant="body2" mt={2}>
            I love to solve challenges on websites such as{" "}
            <Link
              rel="noopener"
              target="_blank"
              href="https://leetcode.com/AlekoDimitrov/"
              underline="none"
              color="#4f176a"
            >
              LeetCode
            </Link>{" "}
            and{" "}
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.codewars.com/users/AlekoDimitrov"
              underline="none"
              color="#4f176a"
            >
              CodeWars
            </Link>
            . Most of the time, I use JavaScript, but depending on what I&apos;m trying
            to learn, I migh use other languages. I chose JavaScript because I&apos;m
            bothered that this is the #1 reason causing a bloated web.
            That is also why I&apos;d love to work on improving
            efficiency within my own code. There are lots of inefficiencies caused by JS,
            making websites run slower, resulting in bad UX.
          </Typography>
          <Typography variant="body2" mt={2}>
            Aside from coding, I enjoy learning and growing my skilset through
            active engagement with community and colleagues. I like to believe
            that through mastery, a person can best achieve what&apos;s both
            great and worth sharing.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default about;
