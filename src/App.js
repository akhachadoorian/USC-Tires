import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './stylesheets/general.css'
import './stylesheets/pages.css'
import './stylesheets/components.css'
import './stylesheets/heros.css'
import Home from './pages/home'


import './stylesheets/App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer'

function App() {
  return (
    <Router >
      <div className='content-wrapper'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}  />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
