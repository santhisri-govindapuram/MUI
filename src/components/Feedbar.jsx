import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";


const Feedbar = () => {
    return (
        <Box bgcolor="pink" flex={3} p={2}>
          <Post />
        </Box>
    )
}

export default Feedbar

