
import styles from './projects.module.css';
import ProjectButton from './Button';
import PortofolioItem from './PortofolioItem';

import React from 'react';
export default function ProjectsContainer(){
    const [active, setActive] = React.useState(0);
    const categories = ["Todos os Produtos", "Mobiliário de quarto", "Mesas"];
    const setActiveButton = (index: number) => {
        setActive(index);

    }

    var buttons = categories.map((category, index) => {
        return (<ProjectButton active={active} index={index} setActiveButton={setActiveButton}>
        {category}
        </ProjectButton>);
    });


    return (
        <div id="projects" className={styles.projects}>

            <div className='flex flex-col items-center'>
                <div className='max-w-[1170px]'>
                    <div className='flex flex-col items-center' style={{marginBottom: "70px"}}>
                        <h2 className={styles.h2}>Projects</h2>
                        <hr className={styles.hr}></hr>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-5'>
                        {buttons}
                    </div>

                    <div className="flex flex-row items-center justify-left gap-5">
                        <PortofolioItem title="Mobiliário de quarto" urlImage="projects_cama.jpg" url="https://monchimoveis.pt/product?reference=Cama/bed-10"/>
                        <PortofolioItem title="Mobiliário de quarto" urlImage="projects_cama.jpg" url="https://monchimoveis.pt/product?reference=Cama/bed-10"/>
                        <PortofolioItem title="Mobiliário de quarto" urlImage="projects_cama.jpg" url="https://monchimoveis.pt/product?reference=Cama/bed-10"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
} 