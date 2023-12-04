"use client";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { Bird, DatabaseZap, Diamond, FileJson, ServerCog, ShieldCheck, Swords } from "lucide-react";

const skills = [
	{
		icon: <Bird size={20} />,
		desc: "highly experienced, flutter is a cross-platform framework to create mobile apps developed by Google. Mainly using Dart Language.",
		skill: "Flutter",
	},
	{
		icon: <ServerCog size={20} />,
		desc: "moderately experienced, especially in creating systems logic, authentication, services, and security",
		skill: "Backend Dev",
	},
    {
        icon: <DatabaseZap size={20} />,
        desc: "moderately experienced, especially in fabricating efficient and effective queries for large database server requests",
        skill: "Database Engineer"
    },
	{
		icon: <Swords size={20} />,
		desc: "beginnerly experienced, know basic stuffs of web vulnerabilities and simple exploitation techniques",
		skill: "Web Pentesting",
	},
	{
		icon: <Diamond size={20} />,
		desc: "moderately experienced, usually made HTTP REST API using this freshly Google's developed language",
		skill: "Golang",
	},
    {
		icon: <FileJson size={20} />,
		desc: "moderately experienced, usually made HTTP REST API using this freshly Google's developed language",
		skill: "Nextjs",
	},
];
export default function Skills() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto pt-20">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{skills.map((s) => (
						<Card>
							<div
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
										{s.skill}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.desc}
									</span>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
        </div>
    )
}