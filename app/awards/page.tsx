"use client";

import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { BookmarkCheck, Medal, Trophy } from "lucide-react";
const awards = [
	{
		icon: <Trophy size={20} />,
		href: "",
		desc: "3rd place, Lomba Kompetensi Siswa (LKS) is a competition held by Dinas Pendidikan Jawa Barat for Vocational High School. Hereby, I volunteered in Cyber Security chamber which a competition in defending/fortifiying server and network against attackers, and also attacking/exploitating at instructed server",
		award: "LKS Cyber Security Tingkat Provinsi Jawa Barat Tahun 2022",
	},
	{
		icon: <Trophy size={20} />,
		href: "",
		desc: "3rd place, Lomba Kompetensi Siswa (LKS) is a competition held by Dinas Pendidikan Jawa Barat for Vocational High School. Another fight but the results still the same :)",
		award: "LKS Cyber Security Tingkat Provinsi Jawa Barat Tahun 2023",
	},
    {
		icon: <Medal size={20} />,
		href: "",
		desc: "Best male students of 2023 graduation in Vocational High School 4 Bandung",
		award: "Siswa Terbaik Putra SMKN 4 Bandung 2022-2023"
	},
	{
		icon: <BookmarkCheck size={20} />,
		href: "",
		desc: "Approved Junior Mobile Programmer Certificate, issued by LSP Informatika at 2023",
		award: "Junior Mobile Programmer Certificate"
	}
];
export default function Awards() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto pt-20">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{awards.map((s) => (
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
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display text-center">
										{s.award}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.desc}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
        </div>
    )
}