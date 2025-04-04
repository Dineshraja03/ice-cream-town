import React from 'react';
import OrderButtons from '../components/OrderButtons';
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
        </div>
    );
};

export default OrderPage;