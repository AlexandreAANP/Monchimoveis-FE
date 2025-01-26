
"use client";
import Image from "next/image";
import Text from "./Text";
import Button from "./Button";

export default function IntroContainer({imageUrl, title, subtitle, buttonContent, buttonHref}: {imageUrl:string, title:string, subtitle:string, buttonContent:string, buttonHref:string}) {

    const style = {
                display : "table",
                width: "100%",
                padding: "0",
                backgroundImage: `url(${imageUrl})`,
                backgroundPositionX: "center",
                backgroundPositionY: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#e5e5e5",
                backgroundSize: 'cover',
                
                 }; 

    return (
        <header style={{display: "block"}}>
        <div className="flex justify-center items-center h-screen bg-background text-foreground" style={style}>
            <div style={{backgroundColor: "rgba(0,0,0,0.4)"}} className="absolute top-0 left-0 w-full h-full">
                <div className="container mx-auto text-center">
                    <div className="row">
                        <Text title={title} subtitle={subtitle} buttonContent={buttonContent} buttonHref={buttonHref}/>
                    </div>
                </div>
            </div>
        </div>
        </header>
        
    )
}