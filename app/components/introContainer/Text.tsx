'use client';
import { Button } from "@material-tailwind/react"
import { text } from "stream/consumers"

import IntroButton from "./Button"
import React from "react";

export default function IntroText({title, subtitle, buttonContent, buttonHref}: {title:string, subtitle:string, buttonContent:string, buttonHref:string}) {


    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const divStyle = {
        paddingTop: "300px",
        paddingBottom: "200px",
        // textAlign: "center",
    }



    const h1Style = {
        color: "white",
        fontSize: isMobile ? "40px" : "68px",
        fontWeight: "400",
        marginTop: "0",
        marginBottom: "10px",
        letterSpacing: "-1px",
        lineHeight: "1.1"
    }

    const spanStyle = {
        color: "#a7c44c",
        fontWeight: 600
    }

    const pStyle = {
        marginTop: "10px",
        marginBottom: "40px",
    }

    return (
        <div className="container mx-auto text-center" style={divStyle} >
            <h1 style={h1Style}>
                
                <strong>
                    {title}
                </strong>
                <span style={spanStyle}> / </span>
                {subtitle}
            </h1>
            <p style={pStyle}></p>
            <IntroButton content={buttonContent} href={buttonHref}  />
        </div>
    )
}