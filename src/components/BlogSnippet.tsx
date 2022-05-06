import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Moment from "react-moment";

const BlogSnippet = ({ blogMeta }: any) => {
  return (
    <Link href={blogMeta.slug} passHref>
      <a>
        <motion.div
          className="latestPostsDIV"
          initial={{ backgroundColor: "#ffff" }}
          whileHover={{ scale: 1.01, backgroundColor: "#fbf7fb" }}
        >
          <h3 className="latestPostsTitle">{blogMeta.title}</h3>
          <Box display={"flex"} justifyContent={"space-between"}>
            <p className="latestPostsP">
              <Moment fromNow>{blogMeta.date}</Moment>
            </p>
            <p className="latestPostsP">2 min read</p>
          </Box>
          <p className="latestPostsP">{blogMeta.description}</p>
        </motion.div>
      </a>
    </Link>
  );
};

export default BlogSnippet;
