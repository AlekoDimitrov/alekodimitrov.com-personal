import {
  Box,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import blogsMeta from "../../blogData";
import { motion } from "framer-motion";
import Head from "next/head";
import Moment from "react-moment";

const blogVariants = {
  initial: {
    backgroundColor: "#ffff",
  },
  whileHover: {
    scale: 1.01,
    backgroundColor: "#fbf7fb",
  },
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box
      padding={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: { xs: 8, sm: 14 },
      }}
    >
      <Head>
        <title>Blog | Aleko Dimitrov</title>
      </Head>
      <Typography variant="h3">Blog</Typography>
      <Typography variant="body1" mb={4}>
        Everything I've writtern
      </Typography>
      <TextField
        id="standard-basic"
        label="Search articles"
        variant="standard"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <Box mt={5}>
        <h2>All Posts</h2>
      </Box>
      {blogsMeta
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        })
        .map((blog, key) => {
          return (
            <Link href={blog.slug} underline="none" key={key}>
              <motion.div
                className="latestPostsDIV"
                variants={blogVariants}
                initial="initial"
                whileHover="whileHover"
              >
                <h3 className="latestPostsTitle">{blog.title}</h3>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <p className="latestPostsP">
                    <Moment fromNow>{blog.date}</Moment>
                  </p>
                  <p className="latestPostsP">2 min read</p>
                </Box>
                <p className="latestPostsP">{blog.description}</p>
              </motion.div>
            </Link>
          );
        })}
    </Box>
  );
};

export default Blog;
