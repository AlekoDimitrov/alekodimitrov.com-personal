import {
  Box,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { blogsMeta } from "./blogData";
import { motion } from "framer-motion";
import Head from "next/head";
import Moment from "react-moment";
import BlogSnippet from "../../components/BlogSnippet";

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
        Everything I&apos;ve writtern
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
          return <BlogSnippet blogMeta={blog} key={key} />;
        })}
    </Box>
  );
};

export default Blog;
