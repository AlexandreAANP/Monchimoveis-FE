import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { IconButton } from "@material-tailwind/react"
import TranslateIcon from "./translateIcon";
import styles from "./ourHistory.module.css"

export default function TextContainer({subtitle, text, enSubtitle, enText}: {subtitle:string, text:string, enSubtitle:string, enText:string}) {
  const [inEnglish, setBasicActive] = useState(false);

  const handleBasicClick = () => {
    setBasicActive(!inEnglish);
  };

  
  return (
    <div className="container">
        <div className="mb-2 mt-5 flex justify-between place-items-center">
            <div className="mt-3 ml-5">
                <h3 className={styles.subtitle}>{inEnglish ? enSubtitle : subtitle}</h3>
            </div>

            <div className="mb-3 flex justify-end pt-2 pr-2">
                <IconButton
                className={styles.translateButton}
                color={undefined}
                disabled={false}
                onClick={handleBasicClick}
                fullWidth={false}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                >
                <TranslateIcon />
                </IconButton>
            </div>
        </div>
        
        <div className="mb-3 flex flex-col items-center">
            <p className={styles.subtext}>
                {inEnglish ? enText : text}
            </p>
        {/* <TETabs pills>
            <TETabsItem
            onClick={() => handleBasicClick("tab1")}
            active={inEnglish === "tab1"}
            >
            Home
            </TETabsItem>
            <TETabsItem
            onClick={() => handleBasicClick("tab2")}
            active={inEnglish === "tab2"}
            >
            Profile
            </TETabsItem>
            <TETabsItem
            onClick={() => handleBasicClick("tab3")}
            active={inEnglish === "tab3"}
            >
            Messages
            </TETabsItem>
            <TETabsItem
            onClick={() => handleBasicClick("tab4")}
            active={inEnglish === "tab4"}
            disabled
            >
            Contact
            </TETabsItem>
        </TETabs>

        <TETabsContent>
            <TETabsPane show={inEnglish === "tab1"}>Tab 1 content</TETabsPane>
            <TETabsPane show={inEnglish === "tab2"}>Tab 2 content</TETabsPane>
            <TETabsPane show={inEnglish === "tab3"}>Tab 3 content</TETabsPane>
            <TETabsPane show={inEnglish === "tab4"}>Tab 4 content</TETabsPane>
        </TETabsContent> */}
        </div>
    </div>
  );
}