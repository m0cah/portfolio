import './App.css';
import { Nav } from "./Components/Nav";
import { Projects } from "./Components/Projects";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className='app-div'>
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
