
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';
import Login from './pages/Login';


function App() {


  return (
    <div className="App">
      Hello!
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;