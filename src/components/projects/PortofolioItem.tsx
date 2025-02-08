import styles from './projects.module.css';
import { motion } from 'framer-motion';

export interface PortofolioItemProps {
    category: string;
    title: string;
    urlImage: string;
    url: string;
    active: string;
}

export default function ProjectsContainer( {category, title, urlImage, url, active}: PortofolioItemProps) {

    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className={`${styles.portofolioItem} relative max-w-xs overflow-hidden bg-cover bg-no-repeat`}
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <img
                src={urlImage}
                className={`${styles.image} max-w-xs`}
                alt={title} />
            <a href={url}><h4 className={styles.h4Mobile}>{title}</h4></a>
            <a href={url}>
                <div
                    className={`absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 ${styles.overlay}`}>    
                    <div className="flex flex-col items-center justify-center h-full">
                        <h4 className={styles.h4}>{title}</h4>
                    </div>
                
                </div>
            </a>
        </motion.div>

    );
}