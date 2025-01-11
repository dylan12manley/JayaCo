import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Forms from './pages/Forms/Forms';

import HeaderForm from './pages/Forms/HeaderForm';
import MainForm from './pages/Forms/MainForm';

import Error from './pages/Error/Error';

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
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/header-form'
          element={<HeaderForm />}
        />
        <Route
          path='main-form'
          element={<MainForm />}
        />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </Router>
  );
}
