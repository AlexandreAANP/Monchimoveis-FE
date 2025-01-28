'use client';
import IntroButton from "./Button"
import React from "react";
import styles from "./introContainer.module.css"


export default function IntroText({title, subtitle, buttonContent, buttonHref}: {title:string, subtitle:string, buttonContent:string, buttonHref:string}) {


    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


    return (
        <div className={`container mx-auto text-center ${styles.divStyle}`} >
            <h1 className={styles.h1Style} style={isMobile ? {fontSize: "40px"} : {fontSize: "68px"}}>
                
                <strong>
                    {title}
                </strong>
                <span className={styles.spanStyle}> / </span>
                {subtitle}
            </h1>
            <p className={styles.pStyle}></p>
            <IntroButton content={buttonContent} href={buttonHref}  />
        </div>
    )
}