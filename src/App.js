import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/PageFooter';

import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ErrorPage from './pages/404/ErrorPage';

function App() {
  return (

    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />

      </div>
    </Router>

  );
}

export default App;
