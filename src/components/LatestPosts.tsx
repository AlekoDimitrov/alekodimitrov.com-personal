import { Box, Button, Divider, Link } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Moment from "react-moment";
import blogsMeta from "../blogData";

const blogVariants = {
  initial: {
    backgroundColor: "#ffff",
  },
  whileHover: {
    scale: 1.01,
    backgroundColor: "#fbf7fb",
  },
};

const LatestPosts = () => {
  const [articles, setArticles] = useState(true);
  return (
    <>
      <Box padding="30px">
        <h2>Recent Posts</h2>
        {blogsMeta.map((blog, key) => {
          if (key < 3) {
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
          } else if (key < 6 && articles === false) {
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
                      <Moment>{blog.date}</Moment>
                    </p>
                    <p className="latestPostsP">2 min read</p>
                  </Box>
                  <p className="latestPostsP">{blog.description}</p>
                </motion.div>
              </Link>
            );
          }
        })}
        <Box width={"100%"} display={"flex"} justifyContent="flex-end">
          <Button
            onClick={() => {
              setArticles(false);
            }}
            href={articles ? "" : "/articles"}
          >
            <Box padding="10px">
              <motion.div
                className="latestPostsMOTIONDIV"
                whileHover={{ color: "#9c27b0" }}
              >
                <p className="readMore">
                  {articles ? "Load More" : "Read All"}
                </p>
                <AiOutlineArrowRight />
              </motion.div>
            </Box>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LatestPosts;
