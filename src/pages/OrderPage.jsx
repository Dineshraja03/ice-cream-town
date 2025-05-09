import React from 'react';
import { Link } from 'react-router-dom';
import OrderButtons from '../components/OrderButtons';
import { FaUtensils, FaArrowRight } from 'react-icons/fa';
import styles from '../styles/OrderPage.module.css';

const OrderPage = () => {
    return (
        <div className={styles.orderPage}>
            <div className={styles.heroSection}>
                <h1 className={styles.pageTitle}>Order Your Favorite Ice Cream!</h1>
                <p className={styles.pageDescription}>
                    Indulge in the best ice creams and desserts. Order now from Swiggy or Zomato and enjoy the taste of happiness!
                </p>
            </div>
            
            <div className={styles.orderSection}>
                <OrderButtons />
            </div>
            
            {/* Catering Service Section */}
            <div className={styles.cateringPromoSection}>
                <div className={styles.cateringPromoContent}>
                    <FaUtensils className={styles.cateringIcon} />
                    <h2 className={styles.cateringTitle}>Need Catering Services?</h2>
                    <p className={styles.cateringDescription}>
                        We offer premium ice cream catering for weddings, birthdays, 
                        corporate events and more. Make your special occasions memorable!
                    </p>
                    <Link 
                        to="/celebration-booking" 
                        state={{ activeForm: 'catering' }} 
                        className={styles.cateringButton}
                    >
                        Book Catering Service <FaArrowRight className={styles.arrowIcon} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;