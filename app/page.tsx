import Image from "next/image";
import { NavbarDefault } from "./components/navbar/navbartw";
import IntroContainer from "./components/introContainer/Container";

import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

function readYamlFile(filePath: string) {
  try {
    const fileContents = fs.readFileSync(path.resolve(filePath), 'utf8');
    const data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default function Home() {

  const data: any = readYamlFile('./content.yml');
  console.dir(data);
  return (
   <> 
    <NavbarDefault title={data.navbar.title} items={data.navbar.items} />


    <IntroContainer
       imageUrl="/static/background_main_images.jpg"
       title={data.introContainer.title}
       subtitle={data.introContainer.subtitle}
       buttonContent={data.introContainer.button.content}
       buttonHref={data.introContainer.button.href}
       />
      <div id="about">
        
        <h1 style={{paddingTop: "600px"}}>Home</h1>
        <p>Welcome to the home page!</p> 
      </div>
   </>
  );
}
