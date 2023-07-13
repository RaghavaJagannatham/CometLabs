import './App.css';
import About from './components/About/About';
import Benefit from './components/Benefits/benefits';
import data from './Data/data';
import Attribute from './components/Attributes/Attribute';
import features from './Data/features';
import { Grid } from '@mui/material';
import Header from './components/Header/Header'
import Testimonials from './components/Testimonials';
import Testimonialsdata from './Data/testimonialsdata';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Video from './components/video/video';
import './App.css'

function App() {
  return (
    <div className="App">
        <Header />
        {/* Benefits has some icons that were taken from data.js file from Data folder */}
        <div className='Flexi'>
          {/* Simple form is updated to the file folder */}
          <Form />
            <div className="benefit">
            {data.map((data) => {
                return <Benefit props={data} />;
            })}
            </div>
        </div>

        {/* Video */}
        <Video />

        {/* Testimonials data */}
        <div>
          {Testimonialsdata.map((data) => {
            return <Testimonials props={data} />;
          })}
        </div>
        {/* Attribiutes of the page Section */}
        <Grid
        container
        gap={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* Took data from the features.js that have data of features */}
        {features.map((data) => {
          return <Attribute props={data} />;
        })}
      </Grid>
      <About />
      <Footer />
    </div>
  );
}

export default App;
