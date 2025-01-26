import Image from "next/image";
import { NavbarDefault } from "./components/navbar/navbartw";

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

    <div className="flex justify-center items-center h-screen bg-background text-foreground bg-cyan-50">
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <div>
        <Image src="/logo.svg" alt="logo" width={200} height={10000} />
      </div>
      <h1 className="text-4xl font-bold">Hello, World!</h1>
    </div>
   </>
  );
}
