import { Box, Divider, Link } from "@mui/material";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const blogVariants = {
  initial: {
    backgroundColor: "#ffff",
  },
  whileHover: {
    scale: 1.01,
    backgroundColor: "#f5f5f5",
  },
};

const LatestPosts = () => {
  return (
    <>
      <Box padding={3}>
        <h2>Latest Posts</h2>
        <Link href={"#"} underline={"none"}>
          <motion.div
            className="latestPostsDIV"
            variants={blogVariants}
            initial="initial"
            whileHover="whileHover"
          >
            <h3 className="latestPostsH3">
              Creating and Using API Routes in NextJS.
            </h3>
            <Box display={"flex"} justifyContent={"space-between"} pr={"20px"}>
              <p className="latestPostsP">2 months ago</p>
              <p className="latestPostsP">2 min read</p>
            </Box>
            <p className="latestPostsP">
              How to create and use API routes in NextJS
            </p>
          </motion.div>
        </Link>
        <Link href={"#"} underline={"none"}>
          <motion.div
            className="latestPostsDIV"
            variants={blogVariants}
            initial="initial"
            whileHover="whileHover"
          >
            <h3 className="latestPostsH3">
              Creating and Using API Routes in NextJS.
            </h3>
            <Box display={"flex"} justifyContent={"space-between"} pr={"20px"}>
              <p className="latestPostsP">2 months ago</p>
              <p className="latestPostsP">2 min read</p>
            </Box>
            <p className="latestPostsP">
              How to create and use API routes in NextJS
            </p>
          </motion.div>
        </Link>
        <Link href={"#"} underline={"none"}>
          <motion.div
            className="latestPostsDIV"
            variants={blogVariants}
            initial="initial"
            whileHover="whileHover"
          >
            <h3 className="latestPostsH3">
              Using NextJS Server-Side Rendering Method.
            </h3>
            <Box display={"flex"} justifyContent={"space-between"} pr={"20px"}>
              <p className="latestPostsP">2 months ago</p>
              <p className="latestPostsP">2 min read</p>
            </Box>
            <p className="latestPostsP">
              How to create and use API routes in NextJS
            </p>
          </motion.div>
        </Link>
        <Box padding={"10px"}>
          <Link href="#" color={"#00000"}>
            <Box display={"flex"} justifyContent={"flex-end"}>
              <motion.div
                className="latestPostsMOTIONDIV"
                whileHover={{ color: "#9c27b0" }}
              >
                <p className="readMore">Read More</p>
                <AiOutlineArrowRight />
              </motion.div>
            </Box>
          </Link>
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default LatestPosts;
