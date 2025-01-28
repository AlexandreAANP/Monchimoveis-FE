
import styles from './navbar.module.css'

export default function Title({title}: {title: string}) {

    return <a href="#" className={`mr-4 cursor-pointer ${styles.navtitle}`}>{title}</a>
}