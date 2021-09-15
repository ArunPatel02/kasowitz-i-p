import './App.css';
import { Banner } from './components/Banner';
import { Featured } from './components/Featured';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Featured/>
    </div>
  );
}

export default App;
