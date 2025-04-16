import React from 'react';
import styles from '../styles/Products.module.css';
import image from '../assets/images/product2.png';

import FF from '../assets/products/snacks/french  fries.webp';
import nuggets from '../assets/products/snacks/nuggets.jpg';
import cnuggets from '../assets/products/snacks/chicken nuggets.jpg';
import alootikki from '../assets/products/snacks/Aloo Tikki.jpg';
import smilies from '../assets/products/snacks/smiley.jpg';
import eggbunmasala from '../assets/products/snacks/egg bun masala.jpg';
import vegpuff from '../assets/products/snacks/veg puff.webp';
import eggpuff from '../assets/products/snacks/egg puff.jpg';
import chickenpuff from '../assets/products/snacks/chicken puff.jpg';
import mushroompuff from '../assets/products/snacks/mushroom puff.jpg';
import vegroll from '../assets/products/snacks/veg roll.jpg';
// import eggroll from '../assets/products/snacks/egg roll.jpg';
import chickenroll from '../assets/products/snacks/chicken roll.jpg';
import breadomelette from '../assets/products/snacks/Bread Omelette.png';


//ice creams
import vanila from '../assets/products/ice creams/Vanilla.webp';
import chocolate from '../assets/products/ice creams/chocolate.jpg';
import strawberry from '../assets/products/ice creams/strawberry.jpg';
import butterscotch from '../assets/products/ice creams/butterscotch.jpg';
import brownie from '../assets/products/ice creams/brownie.jpg';
import chocofluffy from '../assets/products/ice creams/choco fluffy.jpg';

//porimixtures
import porimix1 from '../assets/products/Porimix/kara pori.jpg';
import porimix2 from '../assets/products/Porimix/Thattu Vadai Set.jpg';
import porimix3 from '../assets/products/Porimix/porimix3.png';

//cakes
import black from '../assets/products/cakes/black forest.jpg';
import red from '../assets/products/cakes/red velvet.webp';
import white from '../assets/products/cakes/white forest.jpg';
import icecream from '../assets/products/cakes/ice cream.jpg';

const Products = () => {
    const sections = [
        {
            title: 'Snacks',
            items: [
                { id: 1, name: 'French Fries', image: FF },
                { id: 2, name: 'Chicken Nuggets', image: cnuggets },
                { id: 3, name: 'Nuggets', image: nuggets },
                { id: 4, name: 'Aloo Tikki', image: alootikki },
                { id: 5, name: 'Smileys', image: smilies },
                { id: 6, name: 'Egg bun Masala', image: eggbunmasala },
                { id: 7, name: 'Veg Puff', image: vegpuff },
                { id: 8, name: 'Egg Puff', image: eggpuff },
                { id: 9, name: 'Chicken Puff', image: chickenpuff },
                { id: 10, name: 'Mushroom Puff', image: mushroompuff },
                { id: 11, name: 'Veg Roll', image: vegroll },
                // { id: 12, name: 'Egg Roll', image: eggroll },
                { id: 13, name: 'Chicken Roll', image: chickenroll },
                { id: 14, name: 'Bread Omelette', image: breadomelette },
            ],
        },
        {
            title: 'Pori Mixtures',
            items: [
                { id: 1, name: 'Kara Pori', image: porimix1 },
                { id: 2, name: 'Thattu Vadai Set', image: porimix2 },
                    {id:3, name: 'Thattu Vadai Set (Egg)', image:porimix3}
            ],
        },
        {
            title: 'Ice Creams & Deserts',
            items: [
                { id: 1, name: 'Vanila', image: vanila },
                { id: 2, name: 'chocolate', image: chocolate },
                { id: 3, name: 'strawberry', image: strawberry },
                { id: 4, name: 'Butterscotch', image: butterscotch },
                { id: 5, name: 'Choco fluffy', image: chocofluffy },
                { id: 6, name: 'Brownie', image: brownie }
            ],
        },
        
        {
            title: 'Cakes',
            items: [
                { id: 1, name: 'White Forest', image: white },
                { id: 2, name: 'Black Forest', image: black },
                { id: 3, name: 'Red Velvet', image: red },
                { id: 4, name: 'Ice Cream Cake', image: icecream }
            ],
        },
    ];

    return (
        <div className={styles.container}>
            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className={styles.section}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    <div className={styles.grid}>
                        {section.items.map((item) => (
                            <div key={item.id} className={styles.card}>
                                <img src={item.image} alt={item.name} className={styles.image} />
                                <h3 className={styles.itemName}>{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;