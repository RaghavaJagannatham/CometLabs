import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import video from "../../utilities/video.mp4";
import "./ProductVideo_styles.css";
const ProductVideo = () => {
  return (
    <Box className="video-box">
      <Container
        style={{ paddingTop: "8em", width:"100%"}}
        sx={{ backgroundColor: "#E8FBFB" }}
      >
        <h1
          className="heading-video"
          style={{
            textAlign: "center",
            fontWeight: "800",
            width: "30%",
            margin: "0 auto"
          }}
        >
          Show visitors what they're signing up for
        </h1>
        <Typography
          variant="body1"
          align={"center"}
          style={{ width: "30%", margin: "1em auto" }}
        >
          Include a video or photo from one of your sessions to help people
          understand your service (or just to hype ‘em up).{" "}
        </Typography>
        <Container className="video-div">
          <video controls className="video">
            <source src={video} type="video/mp4" />
          </video>
        </Container>
      </Container>
    </Box>
  );
};
export default ProductVideo;
