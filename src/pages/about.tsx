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
          and off for a couple of years. By the end of 2021, I had found my love
          for solving problems. The older I got, the more I understood how
          valuable a good software developer is, and so I began to head in that
          direction. Now I&apos;m somewhere on the path, and I don&apos;t think
          I&apos;ll ever turn back. <br /> <br />
          My dream is to reach the pinnacle of every skill required to be an
          indispensable part of a team.
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
            . Most of the time, I use JavaScript, but depending on the mood, I
            might throw in some Python. JS is the language I enjoy tinkering
            with, but sometimes it bothers me for being the #1 reason causing a
            slower web. That is also why I&apos;d love to work on improving
            efficiency within my code. There is a lot of bloat JS code running
            behind the scenes on many websites, making them heavy and causing
            bad UX.
          </Typography>
          <Typography variant="body2" mt={2}>
            Aside from coding, I enjoy learning and growing my skilset through
            active engagement (hence the blog). I read, write and do everything
            that makes me more proficient in a given field. I like to believe
            that through mastery, a person can best achieve what&apos;s both
            great and worth sharing.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default about;
