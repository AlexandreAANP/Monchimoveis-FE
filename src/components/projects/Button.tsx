import { Button } from "@material-tailwind/react"
import styles from "./projects.module.css"


interface ProjectButtonProps {
    children: string;
    index: string;
    active: string;
    setActiveButton: (index: string) => void;
}

export default function ProjectButton({ children, index, active, setActiveButton }: ProjectButtonProps) {



    return (
        <Button
            key={index}
            className={`${styles.button} ${active === index ? styles.buttonActive : ""}`}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onClick={() => setActiveButton(index)}                    
        >
            {children}
        </Button>
    );
}