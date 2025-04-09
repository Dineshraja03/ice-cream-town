import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import OrderPage from './pages/OrderPage';
import CelebrationBookingPage from './pages/CelebrationBookingPage';
import EventGallery from './components/EventGallery';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/celebration-booking" element={<CelebrationBookingPage />} />
                <Route path="/gallery" element={<EventGallery />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
            <FloatingButtons />
        </Router>
    );
};

export default App;