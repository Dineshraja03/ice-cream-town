import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import OrderPage from './pages/OrderPage';
import CelebrationBookingPage from './pages/CelebrationBookingPage';
import EventGallery from './components/EventGallery';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CateringPage from './pages/CateringPage';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Loader from './components/Loader';
import PageTransition from './components/PageTransition';

const App = () => {
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        // This will hide the initial loader after 500ms (0.5 seconds)
        const timer = setTimeout(() => {
            setInitialLoading(false);
        }, 500);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {initialLoading && <Loader minDisplayTime={700} />}
            <Router>
                <PageTransition>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/order" element={<OrderPage />} />
                        <Route path="/celebration-booking" element={<CelebrationBookingPage />} />
                        <Route path="/catering" element={<CateringPage />} />
                        <Route path="/gallery" element={<EventGallery />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                    <Footer />
                    <FloatingButtons />
                </PageTransition>
            </Router>
        </>
    );
};

export default App;