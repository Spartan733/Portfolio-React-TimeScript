import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';
import NotFound from './pages/NotFound.tsx';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App