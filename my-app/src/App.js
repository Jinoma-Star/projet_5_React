import './App.scss';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';

function App() {
  return (
<div className="App">
    <Router>
      <div>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
</div>
);
}

export default App;
