import './App.css';
import Navbar from './components/Navbar/Navbar'
import HomeScreen from './screens/home-screen/HomeScreen'
import PasswordScreen from './screens/password-screen/PasswordScreen'

function App() {
  return (
      <div className="App">
          <PasswordScreen/>
          {/*<Navbar/>*/}
          {/*<HomeScreen/>*/}
      </div>
  );
}

export default App;
