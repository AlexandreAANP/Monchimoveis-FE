
'use client';
import { Button } from "@material-tailwind/react"
import React from "react";

export default function IntroButton({content, href}: {content:string, href:string}) {
    

    const style = {
        color : "white",
        backgroundColor: "#4287f5", //"#94ae44",
        textShadow: "0 0 3px #859c3c",
        border: "0",
        padding: "14px 20px",
        margin: "0",
        fontSize: "17px",
        fontWeight: "normal",
        borderRadius: "12px 0 12px 0",
        marginTop: "20px",
        transition: "all 0.5s ease",
    }





    

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
            style={style}
            variant="filled"
            className="btn btn-primary mt-4"
            onClick={() => scrollToSection(href.replace("#", ""))}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            >
            {content}
        </Button>
    )
}
