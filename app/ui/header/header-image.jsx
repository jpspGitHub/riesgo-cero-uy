"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import favicon from "./../../../public/images/logo.webp";
import { useRef } from "react";
export default function HeaderImage() {
//   const [offset, setOffset] = useState(0);
  const baseTop = 70;
  const myRef = useRef(null);
  
  const onScroll = () => {
    const element = myRef.current;
    const offset = window.scrollY;
    element.style.opacity = offset / 200;
  };


  useEffect(() => {
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 
  return (
    <>
      <Image
        src={favicon}
        width={150}
        height={100}
        ref={myRef}
        alt="RiesgoCeroUy Logo"
        className="logo"
      />
    </>
  );
}
