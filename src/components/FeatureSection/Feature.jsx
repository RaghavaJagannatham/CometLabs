import { Box, Container } from "@mui/material";
import "./Feature_styles.css";
const Feature = ({ props }) => {
  return (
    <Box style={{ width: "310px" }} className="feature-div">
      <Container className="image-feature-div">
        <img src={props.img_url} alt="feature" width="280" height="169" />
      </Container>
      <Container className="inner-feature-div" style={{ marginTop: "3" }}>
        <h3>{props.heading}</h3>
        <p>{props.body}</p>
      </Container>
    </Box>
  );
};
export default Feature;
