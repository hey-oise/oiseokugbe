"use client";
import {
      SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,SiTailwindcss,SiNodedotjs,SiExpress,SiPostgresql, SiPrisma,SiExpo, SiGit, SiGithub,SiLinux,SiVercel, SiGnubash} from "react-icons/si";

export default function Skills() {
    const skills = [{skill:"HTML5",icon:<SiHtml5/>},{skill:"CSS3",icon:<SiCss/>},{skill:"JavaScript",icon:<SiJavascript/>},{skill:"TypeScript",icon:<SiTypescript/>},{skill:"React",icon:<SiReact/>},{skill:"Next.js",icon:<SiNextdotjs/>},{skill:"Tailwind CSS",icon:<SiTailwindcss/>},{skill:"Node.js",icon:<SiNodedotjs/>},{skill:"Express.js",icon:<SiExpress/>},{skill:"PostgreSQL",icon:<SiPostgresql/>},{skill:"Prisma",icon:<SiPrisma/>},{skill:"React Native",icon:<SiReact/>},{skill:"Expo",icon:<SiExpo/>},{skill:"Git",icon:<SiGit/>},{skill:"GitHub",icon:<SiGithub/>},{skill:"Linux",icon:<SiLinux/>},{skill:"Vercel",icon:<SiVercel/>},{skill:"CLI",icon:<SiGnubash/>}];
    return (
        <div id="portfolio"
        className="py-7
        flex-col gap-4
        border-b
        border-slate-800
        scroll-mt-20">
            <h2 className="capitalize text-2xl max-w-80 md:max-w-100 font-bold pl-6">skills and technologies</h2>

            <h3

            className="text-slate-200 max-w-80 md:max-w-100  capitalize font-semibold pl-6"

            >Technologies I use to bring ideas to life and build functional digital experiences.</h3>
            <div className="flex flex-col mt-10 justify-center w-full">
            <div className="flex flex-row flex-wrap gap-3 max-w-fit m-auto justify-center">
                {skills.map((item, key) => {
                    return(
                        <div className="border border-slate-800 h-20 w-27 gap-2 rounded-2xl item-center justify-center flex flex-col text-md font-bold text-slate-400 text-center" key={key}>
                        
<div className="flex text-2xl justify-center text-slate-500">{item.icon}</div>
{item.skill}
</div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}