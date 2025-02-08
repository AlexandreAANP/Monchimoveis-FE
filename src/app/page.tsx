'use client';

import IntroContainer from "../components/introContainer/Container";
import OurHistoryContainer from "../components/ourHistory/ourHistoryContainer";
import MoveisPersonalizadosContainer from "../components/moveisPersonalizados/Container";
import ProjectsContainer, { categoryProps } from "../components/projects/projectsContainer";
import content from "../content";
// import fs from 'fs';
import yaml from 'js-yaml';
import React from 'react';
import { url } from "inspector";
// import path from 'path';

function readYamlFile() {
  try {
    // const fileContents = fs.readFileSync(content(), 'utf8');
    const fileContents = content();
    const data = yaml.load(fileContents);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default function Home() {

  const data :any = readYamlFile();

  const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const categories = (projects: any): categoryProps[] => {
      return projects.categories.map((category: any) => ({
          category: category.name,
          items: category.items.map((item: any) => ({
              title: item.title,
              urlImage: item.image,
              url: item.url || "#", // Default to "#" if URL is missing
          })),
      }));
  };


  return (
   <> 
    <IntroContainer
       imageUrl="background_main_images.jpg"
       title={data.introContainer.title}
       subtitle={data.introContainer.subtitle}
       buttonContent={data.introContainer.button.content}
       buttonHref={data.introContainer.button.href}
       isMobile={isMobile}
       />

    <OurHistoryContainer
        title={data.ourHistory.title}
        urlVideo={data.ourHistory.urlVideo}
        text={data.ourHistory.text}
        subtitle={data.ourHistory.subtitle}
        enSubtitle={data.ourHistory.enSubtitle}
        enText={data.ourHistory.enText}
        isMobile={isMobile}
    />

    <MoveisPersonalizadosContainer
      title={data.services.title}
      text={data.services.text}
      items={data.services.items}
      isMobile={isMobile}
    />

    <ProjectsContainer
      categories={categories(data.projects)}

    />
    
    <div className='bg-gray-200 w-full h-96 flex items-center justify-center'>
        <h1>Contacte-nos</h1>
        <br></br>
    </div>

   </>
  );
}
