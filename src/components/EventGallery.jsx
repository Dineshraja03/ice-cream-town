import React, { useEffect, useState } from 'react';
import styles from '../styles/EventGallery.module.css';
import { FaSync, FaUmbrella } from 'react-icons/fa';
import collage1 from '../assets/store/1.jpg';
import collage2 from '../assets/store/2.jpg';
import collage3 from '../assets/store/3.jpg';
import collage4 from '../assets/store/4.jpg';
import collage5 from '../assets/store/5.jpg';
import collage6 from '../assets/store/6.jpg';
import collage7 from '../assets/store/7.jpg';
import collage8 from '../assets/store/8.jpg';
import collage9 from '../assets/store/9.jpg';
import collage10 from '../assets/store/10.jpg';
import collage11 from '../assets/store/11.jpg';
import collage12 from '../assets/store/12.jpg';
import collage13 from '../assets/store/13.jpg';
import collage14 from '../assets/store/14.jpg';
import collage15 from '../assets/store/15.jpg';


//decoration images
import d1 from '../assets/decoration/deco1.jpg';
import d2 from '../assets/decoration/deco2.jpg';
import d3 from '../assets/decoration/deco3.jpg';
import d4 from '../assets/decoration/deco4.jpg';
// Using the same images temporarily - replace these with your decoration images
const decoration1 = d1;
const decoration2 = d2;
const decoration3 = d3;
const decoration4 = d4;


const EventGallery = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const loadInstagramScript = () => {
        // Remove any existing Instagram script
        const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
        if (existingScript) {
            existingScript.remove();
        }

        // Load the Instagram embed script
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    };

    useEffect(() => {
        loadInstagramScript();
    }, []);

    const handleRefresh = () => {
        setIsRefreshing(true);
        
        // Reprocess Instagram embeds
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        } else {
            loadInstagramScript();
        }
        
        // Animation timing
        setTimeout(() => {
            setIsRefreshing(false);
        }, 1000);
    };

    // Collage images data
    const collageImages = [
        { src: collage8, size: "large" },
        { src: collage2, size: "small" },
        { src: collage3, size: "small" },
        { src: collage4,  size: "medium" },
        { src: collage5,  size: "large" },
        { src: collage6, size: "small" },
        { src: collage7,  size: "small" },
        { src: collage1,  size: "medium" },
        { src: collage9,  size: "small" },
        { src: collage10, size: "small" },
        { src: collage11, size: "medium" },
        { src: collage12, size: "large" },
        { src: collage13, size: "medium" },
        { src: collage14, size: "medium" },
        { src: collage15, size: "large" },
    ];

    // Decoration images data
    const decorationImages = [
        { src: decoration1, alt: "Party Setup", size: "large" },
        { src: decoration2, alt: "Birthday Decoration", size: "large" },
        { src: decoration3, alt: "Birthday Decoration", size: "small" },
        { src: decoration4, alt: "Birthday Event ", size: "small" },
    ];

    return (
        <div className={styles.gallery}>
            {/* Image Collage Section */}
            <div className={styles.collageSection}>
                <h3 className={styles.collageTitle}>Ice Cream Town Gallery</h3>
                <div className={styles.collageContainer}>
                    {collageImages.map((image, index) => (
                        <div key={index} className={`${styles.collageItem} ${styles[image.size]}`}>
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <div className={styles.overlay}>
                                <p>{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* New Decoration Highlights Section */}
            <div className={styles.collageSection}>
                <h3 className={styles.collageTitle}>
                    <FaUmbrella className={styles.titleIcon} /> Decoration Highlights
                </h3>
                <div className={styles.collageContainer}>
                    {decorationImages.map((image, index) => (
                        <div key={index} className={`${styles.collageItem} ${styles[image.size]}`}>
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <div className={styles.overlay}>
                                <p>{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.titleContainer}>
                <h2 className={styles.reelTitle}>Celebration Highlights</h2>
                <button 
                    className={`${styles.refreshButton} ${isRefreshing ? styles.spinning : ''}`} 
                    onClick={handleRefresh}
                    aria-label="Refresh Instagram content"
                >
                    <FaSync />
                </button>
            </div>
            
            <div className={styles.imageGrid}>
                {/* Instagram Reel 1 */}
                <div className={styles.reelContainer}>
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/DHc5Tf3RKNV/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                        style={{
                            background: '#FFF',
                            border: '0',
                            borderRadius: '3px',
                            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                            margin: '1px',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: '0',
                            width: '99.375%',
                        }}
                    >
                        <div style={{ padding: '16px' }}>
                            <a
                                href="https://www.instagram.com/reel/DHc5Tf3RKNV/?utm_source=ig_embed&amp;utm_campaign=loading"
                                style={{
                                    background: '#FFFFFF',
                                    lineHeight: '0',
                                    padding: '0 0',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    width: '100%',
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View this post on Instagram
                            </a>
                        </div>
                    </blockquote>
                </div>

                {/* Instagram Reel 2 */}
                <div className={styles.reelContainer}>
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/DHg19tfT6JO/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                        style={{
                            background: '#FFF',
                            border: '0',
                            borderRadius: '3px',
                            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                            margin: '1px',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: '0',
                            width: '99.375%',
                        }}
                    >
                        <div style={{ padding: '16px' }}>
                            <a
                                href="https://www.instagram.com/reel/DHg19tfT6JO/?utm_source=ig_embed&amp;utm_campaign=loading"
                                style={{
                                    background: '#FFFFFF',
                                    lineHeight: '0',
                                    padding: '0 0',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    width: '100%',
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View this post on Instagram
                            </a>
                        </div>
                    </blockquote>
                </div>

                {/* Instagram Reel 3 */}
                <div className={styles.reelContainer}>
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/DHWbe1vzOQN/"
                        data-instgrm-version="14"
                        style={{
                            background: '#FFF',
                            border: '0',
                            borderRadius: '3px',
                            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                            margin: '1px',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: '0',
                            width: '99.375%',
                        }}
                    >
                        <div style={{ padding: '16px' }}>
                            <a
                                href="https://www.instagram.com/reel/DHWbe1vzOQN/"
                                style={{
                                    background: '#FFFFFF',
                                    lineHeight: '0',
                                    padding: '0 0',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    width: '100%',
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View this post on Instagram
                            </a>
                        </div>
                    </blockquote>
                </div>

                {/* Instagram Reel 4 */}
                <div className={styles.reelContainer}>
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/DHRWthGTu0p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                        data-instgrm-version="14"
                        style={{
                            background: '#FFF',
                            border: '0',
                            borderRadius: '3px',
                            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                            margin: '1px',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: '0',
                            width: '99.375%',
                        }}
                    >
                        <div style={{ padding: '16px' }}>
                            <a
                                href="https://www.instagram.com/reel/DHRWthGTu0p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                                style={{
                                    background: '#FFFFFF',
                                    lineHeight: '0',
                                    padding: '0 0',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    width: '100%',
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View this post on Instagram
                            </a>
                        </div>
                    </blockquote>
                </div>

                {/* Instagram Reel 5 */}
                <div className={styles.reelContainer}>
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/DHMJL_zATOJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                        data-instgrm-version="14"
                        style={{
                            background: '#FFF',
                            border: '0',
                            borderRadius: '3px',
                            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                            margin: '1px',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: '0',
                            width: '99.375%',
                        }}
                    >
                        <div style={{ padding: '16px' }}>
                            <a
                                href="https://www.instagram.com/reel/DHMJL_zATOJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                                style={{
                                    background: '#FFFFFF',
                                    lineHeight: '0',
                                    padding: '0 0',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    width: '100%',
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View this post on Instagram
                            </a>
                        </div>
                    </blockquote>
                </div>

                {/* Instagram Reel 6 */}
                <div className={styles.reelContainer}>
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/reel/DHJlIFaTENM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                        data-instgrm-version="14"
                        style={{
                            background: '#FFF',
                            border: '0',
                            borderRadius: '3px',
                            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                            margin: '1px',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: '0',
                            width: '99.375%',
                        }}
                    >
                        <div style={{ padding: '16px' }}>
                            <a
                                href="https://www.instagram.com/reel/DHJlIFaTENM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                                style={{
                                    background: '#FFFFFF',
                                    lineHeight: '0',
                                    padding: '0 0',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    width: '100%',
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View this post on Instagram
                            </a>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default EventGallery;