import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './stylesheets/general.css'
import Home from './pages/home'


import './App.css';

function App() {
  return (
    <Router basename="/usc-tires">
      <div>
        {/* Add navigation here */}
        <Routes>
          <Route path="/" element={<Home />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
