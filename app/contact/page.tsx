"use client";
import {
  Github,
  Mail,
  Gitlab,
  Linkedin,
  Instagram,
  PersonStanding,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/igkganes/",
    label: "Linkedin",
    handle: "igkganes",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:igkganes@gmail.com",
    label: "Email",
    handle: "igkganes@gmail.com",
  },
  {
    icon: <Gitlab size={20} />,
    href: "https://gitlab.com/igkganes",
    label: "Gitlab",
    handle: "igkganes",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/krisnaganesha1609",
    label: "Github",
    handle: "krisnaganesha1609",
  },
  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/igedekrisnaganesha_/",
    label: "Instagram",
    handle: "igedekrisnaganesha_",
  },
];

export default function Contact() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto pt-20">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          <Card>
            <div className="base flex justify-center items-center p-4 relative flex-col gap-4 duration-700 group lg:mt-36">
              <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 flex flex-col items-center group-hover:text-white font-display text-center">
                <PersonStanding size={50} />
                It&apos;s me!
                <span className="text-xs font-thin text-zinc-600">
                  I think the photo got cropped...{"\n"}
                  Can you help me fix it?
                </span>
              </span>
              <div className="tengahan w-full">
                <a href={"/myphoto.jpg"} download>
                  <Image
                    src={"/myphoto.jpg"}
                    alt="My Photo"
                    width={1000}
                    height={100}
                    className="gambar"
                  />
                </a>
              </div>
            </div>
          </Card>
          {socials.map((s) => (
            <div key={s.label}>
              <Card>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
