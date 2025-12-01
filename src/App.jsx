import { Routes, Route } from 'react-router-dom';

import AppNavbar from './components/App/Navbar';
import Footer from './components/App/Footer';
import BtnTop from './components/App/BtnTop';

import Home from './pages/Home/Home';
import Faculties from './pages/Faculties/Faculties';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

import './App.css';


function App() {    
    return (
        <div>
            <AppNavbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/faculties' element={<Faculties />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

            <Footer />
            <BtnTop />
        </div>
    );
}

export default App;
