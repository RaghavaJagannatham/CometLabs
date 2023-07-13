import './App.css';
import About from './components/About/About';
import Benefit from './components/About/Benefits/benefits';
import data from './Data/data';

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
    </div>
  );
}

export default App;
