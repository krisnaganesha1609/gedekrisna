import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

const navigation = [
  {name: "Skills", href:"/skills"},
  { name: "Projects", href: "/projects" },
  { name: "Awards", href: "/awards"},
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      
      <h1 className="z-10 text-4xl text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        <span className="bg-[linear-gradient(to_right,#0F0F0F,#232D3F,#EAD7BB,#FFF2D8)] bg-300% bg-min100% animate-names text-transparent bg-clip-text">
          Gede Krisna
        </span>
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I'm an informatics student, software engineer, junior mobile dev, and junior ethical hacker.     
        </h2>
        <h2 className="text-sm text-zinc-500 ">
          Beginner designer, Intermediate coder.
        </h2>
        <h2 className="text-sm text-zinc-500 ">
          Ready to{" "} 
          <Link href="/contact" className="underline duration-500 hover:text-zinc-300">connect and discuss!</Link>
          
        </h2>
      </div>
      
      
    </div>
  );

}

// #0F0F0F,#232D3F,#005B41,#008170