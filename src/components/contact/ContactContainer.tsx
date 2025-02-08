import styles from "./contact.module.css"




export default function Contact({title, text, address, email, phone}: {title: string, text: string, address: string, email: string, phone: string}) {
    return(
        <div id="contact" className={`${styles.contactDiv} flex flex-col items-center justify-center `}>
            <div className="flex flex-col items-center justify-center max-w-[1170px]">
                <div className={`${styles.contactSection} flex flex-col items-center justify-center pr-5 pl-5`}>
                    <h2 className={styles.h2}>{title}</h2>
                    <hr className={styles.hr}></hr>
                    <p className={styles.p}>
                        {text}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
                    <div className="basis-4/12 flex flex-col items-center justify-center md:items-start md:justify-start pr-5 pl-5">
                            <h3 className={styles.h3}>Contacto</h3>
                            <div className={`${styles.contactItem} flex flex-row md:flex-col w-full`}>
                                <span className="pr-5 md:pr-0">Morada:</span>
                                <p className={styles.p}>{address}</p>
                            </div>
                            <div className={`${styles.contactItem} flex flex-row md:flex-col w-full`}>
                                <span className="pr-5 md:pr-0">Email:</span>
                                <p className={styles.p}>{email}</p>
                            </div>
                            <div className={`${styles.contactItem} flex flex-row md:flex-col w-full`}>
                                <span className="pr-5 md:pr-0">Telefone:</span>
                                <p className={styles.p}>{phone}</p>
                            </div>
                    </div>
                    <div className="basis-8/12 flex flex-col items-left justify-left pl-5">
                        <h3 className={styles.h3}>
                            Nossa localização
                        </h3>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.526477498277!2d-8.548719872119209!3d37.31303995225497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b2197952aabcd%3A0xf77e066ccd198de5!2sMonchimoveis!5e1!3m2!1spt-PT!2spt!4v1723660795495!5m2!1spt-PT!2spt"
                            width="100%"
                            height="450"
                            style={{"border":"0"}}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}