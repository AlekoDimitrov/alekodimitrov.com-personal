import { Box, Button, Divider, Link } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Moment from "react-moment";
import { blogsMeta } from "../pages/articles/blogData";
import BlogSnippet from "./BlogSnippet";

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
            return <BlogSnippet blogMeta={blog} key={key} />;
          } else if (key < 6 && articles === false) {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: key * 0.1 }}
                key={key}
              >
                <BlogSnippet blogMeta={blog} />
              </motion.div>
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
