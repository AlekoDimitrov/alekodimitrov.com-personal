import { Box, Divider, Link } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import { motion } from "framer-motion";
import blogsMeta from "../blogData";

const blogVariants = {
  initial: {
    backgroundColor: "#ffff",
  },
  whileHover: {
    scale: 1.01,
    backgroundColor: "#f9f9f9",
  },
};

const LatestPosts = () => {
  let key = 0;
  return (
    <>
      <Box padding="30px">
        <h2>Latest Posts</h2>
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

        <Link href="#" color={"#00000"}>
          <Box display={"flex"} justifyContent={"flex-end"} padding="10px">
            <motion.div
              className="latestPostsMOTIONDIV"
              whileHover={{ color: "#9c27b0" }}
            >
              <p className="readMore">Read More</p>
              <AiOutlineArrowRight />
            </motion.div>
          </Box>
        </Link>

        <Divider />
      </Box>
    </>
  );
};

export default LatestPosts;
