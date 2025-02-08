
import styles from './projects.module.css';
import ProjectButton from './Button';
import PortofolioItem from './PortofolioItem';
import { PortofolioItemProps } from './PortofolioItem';
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";


import React from 'react';

export interface categoryProps {
    category: string;
    items: PortofolioItemProps[];
}


export default function ProjectsContainer({categories}: {categories:categoryProps[]}) {
    const [active, setActive] = React.useState("ALL");
    // const categories = ["Todos os Produtos", "Mobiliário de quarto", "Mesas"];
    const setActiveButton = (index: string) => {
        setActive(index);

    }

    var buttons = categories.map((category, index) => {
        return (<ProjectButton key={`btn-${index}`} active={active} index={category.category} setActiveButton={setActiveButton}>
        {category.category}
        </ProjectButton>);
    })
    
    buttons.unshift(<ProjectButton active={active} index="ALL" setActiveButton={setActiveButton}> Todos os Produtos </ProjectButton>);
    //TODO 
    var Items = categories.map((category, index) => (
      
         category.items.map((item, index) => {
            return (
                <PortofolioItem key={`${category.category}-${index}`} category={category.category} title={item.title} urlImage={item.urlImage} url={item.url} active={active}/>
            )
        })

    ));

    const filteredItems = Items.flat().filter((item) => item.props.category === active || active === "ALL");

    return (
        <div id="projects" className={styles.projects}>

            <div className='flex flex-col items-center '>
                <div className='max-w-[1170px]'>
                    <div className='flex flex-col items-center' style={{marginBottom: "70px"}}>
                        <h2 className={styles.h2}>Projetos</h2>
                        <hr className={styles.hr}></hr>
                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-center gap-5'>
                        {buttons}
                    </div>


                    <div className={`flex flex-wrap items-left justify-between gap-5 ${styles.divItems}`} style={{marginTop: "70px"}}>   
                    
                    {filteredItems}


                    </div>

                </div>
               
            </div>
        </div>
    )
} 