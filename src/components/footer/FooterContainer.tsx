import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from "./footer.module.css"

export default function Footer({facebookUrl, instagramUrl}: {facebookUrl: string, instagramUrl: string}) {


    return (
        <div id="footer" className={`flex flex-col items-center justify-center ${styles.footer}`}>
            <div className={`flex flex-col items-center justify-center max-w-[1170px] ${styles.footerContainer}`}>
                <div className={`${styles.socialMedia}`}>
                    <ul>
                        <li>
                            <a href={facebookUrl} target="_blank"><FaFacebookF className={styles.footerIcon} /></a>
                        </li>
                        <li>
                            <a href={instagramUrl} target="_blank"><FaInstagram className={styles.footerIcon} /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`flex flex-col items-center justify-center max-w-[1170px]`}>
                <div className={`${styles.footerText}`}>
                    <p>© 2025 <a href="https://github.com/AlexandreAANP" target="_blank"><b>Alexandre Pita</b></a>. <br></br>All rights reserved.</p>
                </div>
            </div>
        </div>

    );

}