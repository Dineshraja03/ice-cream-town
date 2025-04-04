import React, { useEffect } from 'react';
import styles from '../styles/EventGallery.module.css';

const EventGallery = () => {
    useEffect(() => {
        // Load the Instagram embed script
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className={styles.gallery}>
            <h2>Celebration Highlights</h2>
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