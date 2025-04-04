import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import CelebrationBookingPage from './pages/CelebrationBookingPage';
import AboutPage from './pages/AboutPage';
import EventGallery from './components/EventGallery';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/celebration-booking" element={<CelebrationBookingPage />} />
                <Route path="/gallery" element={<EventGallery />} /> {/* Placeholder for Gallery */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer /> {/* Add Footer here */}
        </Router>
    );
};
export default App;