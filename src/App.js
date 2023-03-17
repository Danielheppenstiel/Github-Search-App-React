import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/notfound' element={<NotFound/>} />
              <Route path='/*' element={<NotFound/>} />
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;