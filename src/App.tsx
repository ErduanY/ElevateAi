import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InputForm from './pages/InputForm';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input-form" element={<InputForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;






