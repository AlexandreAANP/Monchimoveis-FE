'use client';
import React from 'react';
import styles from './ourHistory.module.css';
import TextContainer from './textContainer';

interface OurHistoryProps {
    title: string;
    urlVideo: string;
    subtitle: string;
    text: string;
    enSubtitle: string;
    enText: string;
    isMobile: boolean;
}

export default function OurHistoryContainer({title, urlVideo, subtitle, text, enSubtitle, enText, isMobile}: OurHistoryProps) {
    


    return (
        <div id="about" className={styles.divAbout} style={isMobile ? {paddingTop: "50px"} : {paddingTop: "120px"}}>
            <div className={styles.container}>
                <div className={`${styles.sectioTitle} text-center center`} style={isMobile ? {marginBottom: "20px"} : {marginBottom: "40px"}}>
                    <h1 className={styles.h2Title} style={isMobile ? {fontSize: "28px"}: {fontSize: "34px"}} >{title}</h1>
                    <hr className={styles.hrTitle}></hr>
                </div>
                
                    <div className="flex flex-col items-center">
                        <iframe
                            className='w-3/4 h-64 md:w-1/2 md:h-96 shadow-gray-400 shadow-xl'
                            src={urlVideo}
                            title="Monchimoveis"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen/>
                    </div>
                
                <TextContainer
                    subtitle={subtitle}
                    text={text}
                    enSubtitle={enSubtitle}
                    enText={enText}
                />
                
                
            </div>
        </div>
    )
}