import { Box, Link, TextField, Typography } from "@mui/material";
import React from "react";
import blogsMeta from "../../blogData";
import { motion } from "framer-motion";

const blogVariants = {
  initial: {
    backgroundColor: "#ffff",
  },
  whileHover: {
    scale: 1.01,
    backgroundColor: "#f9f9f9",
  },
};

const Blog = () => {
  let key = 0;
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
      <Typography variant="h1">Blog</Typography>
      <Typography variant="body2" mb={4}>
        The magic happens here.
      </Typography>
      <TextField
        id="standard-basic"
        label="Search articles"
        variant="standard"
      />

      <Box mt={5}>
        <h2>All Posts:</h2>
      </Box>

      {blogsMeta.map((blog) => {
        key += 1;
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
                <p className="latestPostsP">2 months ago</p>
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
