
'use client';
import { Button } from "@material-tailwind/react"
import React from "react";
import styles from "./introContainer.module.css"

export default function IntroButton({content, href, isMobile}: {content:string, href:string, isMobile:boolean}) {
    
    const scrollToSection = (id: string) => {
          const section = document.getElementById(id); // Find the section by its ID
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); // Smooth scroll to the section
          }
        };

    return (
        <Button
            color={undefined}
            fullWidth={undefined}
            ripple={undefined}
            loading={false}
            size={undefined}
            variant="filled"
            className={`btn btn-primary mt-4 ${styles.button}`}
            style={isMobile ? {marginTop: "40px"} : {marginTop: "20px"}}
            onClick={() => scrollToSection(href.replace("#", ""))}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            >
            {content}
        </Button>
    )
}
