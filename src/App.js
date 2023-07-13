import Benefit from "./components/BenefitsSection/Benefits";
import Footer from "./components/FooterSection/Footer";
import Form from "./components/FormSection/Form";
import Header from "./components/HeaderSection/Header";
import ProductVideo from "./components/ProductVideoSection/ProductVideo";
import Feature from "./components/FeatureSection/Feature";
import About from "./components/AboutSection/About";
import Testimonials from "./components/Testimonials";
import data from "./utilities/data";
import TestimonialData from "./utilities/TestimonialData";
import featureList from "./utilities/featureList";
import { Grid } from "@mui/material";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="Flexi-div">
        <Form />
        <div className="benefit-div">
          {data.map((data) => {
            return <Benefit props={data} />;
          })}
        </div>
      </div>
      <ProductVideo />
      <Grid
        container
        gap={6}
        direction="column"
        padding={4}
        sx={{ mb: 10 }}
        justifyContent="center"
        alignItems="center"
      >
        <h3
          style={{
            paddingTop: "5rem",
            fontSize: "12px",
            letterSpacing: "2px",
            paddingBottom: "2rem",
            color: "#07C3C6",
            fontWeight: "900"
          }}
        >
          Don't just take our word for it.
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "60%"
          }}
        >
          {TestimonialData.map((data) => {
            return <Testimonials props={data} />;
          })}
        </div>
      </Grid>
      <Grid
        container
        gap={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {featureList.map((data) => {
          return <Feature props={data} />;
        })}
        <About />
      </Grid>

      <Footer />
    </div>
  );
}
