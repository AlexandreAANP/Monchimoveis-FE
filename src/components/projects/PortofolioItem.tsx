import styles from './projects.module.css';

export interface PortofolioItemProps {
    title: string;
    urlImage: string;
    url: string;
}

export default function ProjectsContainer( {title, urlImage, url}: PortofolioItemProps) {

    return (

        <div
            className={`${styles.portofolioItem} relative max-w-xs overflow-hidden bg-cover bg-no-repeat`}
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <img
                src={urlImage}
                className={`${styles.image} max-w-xs`}
                alt={title} />
            <a href={url}>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">    
                <div className="flex flex-col items-center justify-center h-full">
                    <a><h4 className={styles.h4}>{title}</h4></a>
                </div>
                
                </div>
            </a>
        </div>
            // <div className={styles.portofolioItem}>
            //     <
            //     <div className="bg-hover">

            //         <div className={styles.bgHoverText}>
            //             <h4>{title}</h4>
            //         </div>
            //         <img src={urlImage} alt={title} className={styles.image}/>
            //     </div>

            // </div>

    );
}