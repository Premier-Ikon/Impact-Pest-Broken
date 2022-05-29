import './App.css';
import Navbar from './components/Navbar/Navbar'
import {Button} from './components/Buttons'

function App() {
  return (
      <div className="App">
        <Navbar/>
        <div className="home-image-container">
          <div className="mask">
            <div className="welcome-container">
              <div className="welcome-header">
                <h1>Welcome to</h1>
                <h1>Impact Pest Pros</h1>
              </div>
              <div className="welcome-body">
                <h3>Your Premier Pest Solutions</h3>
              </div>
            </div>
            <div className='welcome-buttons'>
              <Button buttonStyle={"btn--common"}>Services</Button>
              <Button buttonStyle={"btn--common"}>About Us</Button>
            </div>

          </div>


        </div>

      </div>
  );
}

export default App;
