import styles from './projects.module.css';

interface PortofolioItemProps {
    title: string;
    urlImage: string;
    url: string;
}

export default function ProjectsContainer( {title, urlImage, url}: PortofolioItemProps) {

    return (
            <div className={styles.portofolioItem}>

                <div className="bg-hover">

                    <div className={styles.bgHoverText}>
                        <h4>{title}</h4>
                    </div>
                    <img src={urlImage} alt={title} className={styles.image}/>
                </div>

            </div>

    );
}