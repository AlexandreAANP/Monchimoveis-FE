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

  const [isOnTop, setIsOnTop] = React.useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        setIsOnTop(false)

    } else {
        setIsOnTop(true);
    }
    });

    React.useEffect(() => {
        const handleScroll = () => {
          // Change the state based on scroll position
          if (window.scrollY > 50) {
            setIsOnTop(true);
          } else {
            setIsOnTop(false);
          }
        };
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on unmount
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
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