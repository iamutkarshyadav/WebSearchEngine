import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Searchpage from './pages/Searchpage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/search" element={<Searchpage />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
