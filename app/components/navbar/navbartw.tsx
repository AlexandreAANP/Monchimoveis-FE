"use client";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { on } from "events";
import Items from "./Items";
import Title from "./Title";

export interface ItemProps {
    content: string;
    href: string;
    target?: boolean;
    icon?: string;
}

interface NavbarDefaultProps {
    title : string;
    items: ItemProps[];
}


export function NavbarDefault({title, items}: NavbarDefaultProps) {
  const [openNav, setOpenNav] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isOnTop, setIsOnTop] = React.useState(isMobile ? false : true);
 


    React.useEffect(() => {
        const handleScroll = () => {
          // Change the state based on scroll position
          console.log(isMobile);
          if(isMobile) return;
          if (window.scrollY > 50) {
            console.log("scrolling");
            setIsOnTop(false);
          } else {
            setIsOnTop(true);
          }
        };
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

       
    }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  
  
    React.useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
 
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4 lg:px-4 transition-colors duration-300 ease-in-out"
      style={{backgroundColor: isOnTop ? "transparent" : "#363636"}}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900" style={{borderBottom: openNav ? "1px solid white" : "",  paddingBottom : openNav ? "1rem" : "0"}}>
        
        <Title title={title}/>
        

        <div className="hidden lg:block">
            <Items items={items}/>
        </div>
       
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder=""
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <div className="container mx-auto">
        <Items items={items}/>
        </div>
      </Collapse>
    </nav>
  );
}