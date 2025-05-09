import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Show loader when location changes
    setIsLoading(true);
    
    // Hide loader after a short delay (500ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <>
      {isLoading && <Loader minDisplayTime={500} />}
      {children}
    </>
  );
};

export default PageTransition;