import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './stylesheets/general.css'
import './stylesheets/components.css'
import './stylesheets/heros.css'
import Home from './pages/home'


import './stylesheets/App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router >
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
