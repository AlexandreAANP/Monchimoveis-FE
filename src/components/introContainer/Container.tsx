
"use client";
import Text from "./Text";
import styles from "./introContainer.module.css";

export default function IntroContainer({imageUrl, title, subtitle, buttonContent, buttonHref, isMobile}: {imageUrl:string, title:string, subtitle:string, buttonContent:string, buttonHref:string, isMobile:boolean}) {
    return (
        <header style={{display: "block"}}>
        <div className={`flex justify-center items-center h-screen bg-background text-foreground ${styles.container}`} style={{backgroundImage:`url(${imageUrl})`}}>
            <div style={{backgroundColor: "rgba(0,0,0,0.4)"}} className="absolute top-0 left-0 w-full h-full">
                <div className="container mx-auto text-center">
                    <div className="row">
                        <Text title={title} subtitle={subtitle} buttonContent={buttonContent} buttonHref={buttonHref} isMobile={isMobile}/>
                    </div>
                </div>
            </div>
        </div>
        </header>
        
    )
}