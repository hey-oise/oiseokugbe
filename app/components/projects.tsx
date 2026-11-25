"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Projects() {
const projects = [
      {
          name: "Portfolio",
              description:
                    "My personal portfolio showcasing my skills, projects and journey as a developer.",
                        image: "/project1.jpg",
                            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
                                live: "https://oiseokugbe.vercel.app/",
                                    github: "https://github.com/hey-oise/oiseokugbe",
                                      },
                                        {
                                            name: "Kona Market",
                                                description:
                                                      "An ecommerce demo built to explore the experience of online grocery shopping.",
                                                          image: "/project2.jpg",
                                                              tech: ["Next.js", "JavaScript", "Tailwind CSS"],
                                                                  live: "https://konamarket-five.vercel.app/",
                                                                      github: "https://github.com/hey-oise/konamarket",
                                                                        },
                                                                          {
                                                                              name: "TrendzBySarah",
                                                                                  description:
                                                                                        "An ecommerce website for fashion, accessories and home essentials.",
                                                                                            image: "/project3.jpg",
                                                                                                tech: ["Next.js", "Tailwind CSS"],
                                                                                                    live: "https://trendzbysarah.pxxlspace.cv/",
                                                                                                        github: "https://github.com/hey-oise/trendzbysarah",
                                                                                                          },
                                                                                                            {
                                                                                                                name: "CodePocket",
                                                                                                                    description:
                                                                                                                          "A tool for saving, organizing and accessing reusable code snippets.",
                                                                                                                              image: "/project4.jpg",
                                                                                                                                  tech: ["React", "TypeScript"],
                                                                                                                                      live: "https://codepocket-six.vercel.app/",
                                                                                                                                          github: "https://github.com/hey-oise/codePocket",
                                                                                                                                            },
                                                                                                                                            ];

    return (
        <div id="projects" className="min-h-120 py-15
        flex-col gap-4
        border-b bg-slate-900 border-slate-800 scroll-mt-20">
            <h2 className="capitalize text-2xl max-w-80 md:max-w-100 font-bold pl-6">recent projects</h2>
            <h3 className="text-slate-200 max-w-80 md:max-w-100 capitalize font-semibold pl-6">Some things I've designed, developed and brought to life through code.</h3>
            <div className="flex justify-center w-full mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-5 sm:gap-10">
                {projects.map((item, key) => {
return ( 
              <div key={key} className="bg-slate-950 w-80 min-h-90 rounded-xl p-2 flex flex-col items-center">
                <Image src={item.image} alt={item.name + "image"} width="500" height="700" className="w-80 rounded-xl h-50"/>
                <div className="flex flex-col w-full justify-start mt-3">
                <p className="text-slate-300 font-bold capitalize text-lg">{item.name}</p>
                <p className="font-semibold text-slate-500">{item.description}
                </p>
                <div className="flex gap-1 mt-3">{item.tech.map((item, key) => <div className="border border-slate-800 px-2 py-1 w-fit h-fit rounded-xl font-bold text-slate-400" key={key}>{item}</div>)}</div>
                <div className="flex flex-row mt-4 justify-between mb-2">
                    <a className="hover:bg-slate-950 transition-all duration-300 bg-slate-500 hover:text-slate-500 text-slate-950 capitalize py-2 pl-3 pr-2 border border-gray-800 hover:border-slate-500 font-bold rounded-2xl flex flex-row gap-1 w-20" target="_blank"  href={item.live}>visit <ArrowUpRight/></a>
                    <a target="_blank" href={item.github} className="bg-slate-950 transition-all duration-300 hover:bg-slate-500 text-slate-500 hover:text-slate-950 capitalize py-2 px-3 border hover:border-gray-800 border-slate-500 font-bold rounded-2xl flex flex-row gap-1 items-center justify-center">
                        github <SiGithub/>
                    </a>
                </div>
                </div>
                </div> 
)})} 
            </div>
            </div>
        </div>
    )
}