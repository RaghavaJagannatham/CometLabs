import './App.css';
import About from './components/About/About';
import Benefit from './components/Benefits/benefits';
import data from './Data/data';
import Attribute from './components/Attributes/Attribute';
import features from './Data/features';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
        <About />
        {/* Benefits has some icons that were taken from data.js file from Data folder */}
        <div className="benefit-div">
          {data.map((data) => {
            return <Benefit props={data} />;
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
    </div>
  );
}

export default App;
