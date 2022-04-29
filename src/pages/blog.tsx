import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Blog = () => {
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
        I write to learn, and I learn to write
      </Typography>
      <TextField
        id="standard-basic"
        label="Search articles"
        variant="standard"
      />
    </Box>
  );
};

export default Blog;
