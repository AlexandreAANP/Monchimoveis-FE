import React, { useState } from "react";

import { IconButton } from "@material-tailwind/react"
import TranslateIcon from "./translateIcon";
import styles from "./ourHistory.module.css"
import { motion, AnimatePresence } from "framer-motion";

export default function TextContainer({subtitle, text, enSubtitle, enText}: {subtitle:string, text:string, enSubtitle:string, enText:string}) {
  const [language, setLanguage] = useState<"en" | "pt">("pt");

  const translations = {
    en: { subtitle: enSubtitle, text: enText },
    pt: { subtitle: subtitle, text: text }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };


  
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-5" style={{marginTop: "4%", paddingLeft: "5%", paddingRight: "5%"}}>
      
        <div className="mb-2 mt-5 flex w-full items-center justify-between">
            <div className="pl-5 pr-5">
              <AnimatePresence mode="wait">
                <motion.h3
                    key={language}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className={styles.subtitle}
                  >
                    {translations[language].subtitle}
                </motion.h3>
              </AnimatePresence>

                {/* <h3 className={styles.subtitle}>{inEnglish ? enSubtitle : subtitle}</h3> */}
            </div>

            <div className="mb-3 flex justify-end pt-2 pr-2 ">
                <IconButton
                className={styles.translateButton}
                color={undefined}
                disabled={false}
                onClick={toggleLanguage}
                fullWidth={false}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                >
                <TranslateIcon />
                </IconButton>
            </div>
        </div>
        
        <div className="mb-3 ml-5 flex flex-col items-center">
            {/* <p className={styles.subtext}>
                {inEnglish ? enText : text}
            </p> */}

            <AnimatePresence mode="wait">
              <motion.p
                key={language}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className={styles.subtext}
              >
                {translations[language].text}
              </motion.p>
              </AnimatePresence>
        </div>
      
    </div>
  );
}