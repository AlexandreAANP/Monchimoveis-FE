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
            initial={{ opacity: 0, scale: 0, display: 'none', }}
            animate={{ 
                opacity: active === category || active === "ALL" ? 1 : 0, 
                scale: active === category || active === "ALL" ? 1 : 0,
                display: active === category || active === "ALL" ? 'block' : 'none',
                transform: active === category || active === "ALL" ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)' : 'translate3d(0px, 0px, 0px) scale3d(0, 0, 0)'
            }}
            exit={{ opacity: 0, scale: 0, display: active === category || active === "ALL" ? 'block' : 'none', }}
            transition={{ duration: 0.5 }}
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
                        <h4 className={styles.h4}>{title}</h4>
                    </div>
                
                </div>
            </a>
        </motion.div>

    );
}