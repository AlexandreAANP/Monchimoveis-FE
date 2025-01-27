'use client';

import IntroContainer from "../components/introContainer/Container";
import content from "../content";
// import fs from 'fs';
import yaml from 'js-yaml';
// import path from 'path';

function readYamlFile() {
  try {
    // const fileContents = fs.readFileSync(content(), 'utf8');
    const fileContents = content();
    const data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}


// export async function getStaticProps() {
//   return {
//     props: {
//       data: readYamlFile(),
//     },
//   };
// }

export default function Home() {

  const data :any = readYamlFile();

  return (
   <> 
    <IntroContainer
       imageUrl="background_main_images.jpg"
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
