import { Box, Container, Grid } from "@mui/material";
import * as React from "react";
const About = () => {
  return (
    <Grid
      gap={8}
      padding={3}
      container
      justifyContent="center"
      alignItems="center"
      className="about-div"
    >
      <img
        className="profile-image"
        src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_0cs0b400000000000001o.jpg"
        alt="about"
      />

      <Grid
        container
        gap={2}
        width={500}
        direction="column"
        justifyContent="center"
        alignItems="left"
      >
        <h5 style={{ color: "#07C3C6", fontWeight: "400" }}>ABOUT</h5>
        <h2>Some more information about your business</h2>
        <p>
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </p>
      </Grid>
    </Grid>
  );
};
export default About;
