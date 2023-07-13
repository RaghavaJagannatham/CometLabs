import { Grid } from "@mui/material";

const Testimonials = ({ props }) => {
  return (
    <Grid
      sx={{ width: 400 }}
      container
      gap={5}
      margin={3}
      direction="row"
      justifyContent="flex-start"
      alignItems="left"
    >
      <div className="comment">
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/dfb61e74-multor-testimonial1-stars.svg"
          alt="rating"
        />
        <p style={{ fontStyle: "italic", fontSize: "2em" }}>{props.comment}</p>
      </div>
      <div style={{ display: "flex"}}>
        <img src={props.profileImg} alt="profile-img" />
        <div style={{ marginLeft: ".9em" }}>
          <p style={{ marginBottom: ".4em" }}>
            <strong>{props.name}</strong>
          </p>
          Location
        </div>
      </div>
    </Grid>
  );
};
export default Testimonials;
