import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Forms from './pages/Forms/Forms';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/forms'
          element={<Forms />}
        />
      </Routes>
    </Router>
  );
}
