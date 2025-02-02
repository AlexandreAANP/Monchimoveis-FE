import styles from "./services.module.css"
import React from "react";

interface ServiceItem {
    title: string;
    text: string;
    image: string;
}


const ServiceItemComponent = ({title, text, image}: ServiceItem ) => {
    return (
        <div className="basis-full pl-3 pr-3">
            <div className="flex flex-col items-center justify-center pr-5 pl-5">
                <img src={image} alt={title} width={300} height={300} className="shadow-md"/>
                <h3 className={styles.h3}>{title}</h3>
                <p className={styles.p}>{text}</p>
            </div>
        </div>
    )
}

export default function MoveisPersonalizadosContainer({title, text, items, isMobile}: {title: string, text: string, items: ServiceItem[], isMobile: boolean}) {
    return (
        <div id="services" className={`flex flex-row items-center justify-center ${styles.servicesContainer}`}>
            <div className ="max-w-[1170px] flex flex-col items-center justify-center">
                <h1 className={styles.title}>{title}</h1>
                <hr className={styles.hr}/>

                <p className={`${styles.pTitle} pr-5 pl-5`}>
                    {text}
                </p>

                <div className="flex flex-col md:flex-row flex-nowrap items-center justify-center gap-5" style={{marginTop: "70px"}}>
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <ServiceItemComponent title={item.title} text={item.text} image={item.image}/>
                            {isMobile && index != 2 ? <hr className={styles.hr}/> : null}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}