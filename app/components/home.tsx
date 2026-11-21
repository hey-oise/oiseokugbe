export default function About() {
    return (
        <div className="mt-20 h-120 py-15 
        flex-col gap-4 border-b pl-6 border-slate-800">
            <h1 className="capitalize  text-3xl max-w-80 md:max-w-100 font-bold italic text-slate-200">I build software, solve problems and turn ideas into products.</h1>
            <h2 className="text-slate-500 max-w-80 md:max-w-100">{`I'm Oise, a full-stack software developer focused on building modern web applications, backend systems and digital experiences.`}</h2>
            <div className="flex flex-row gap-2 p-0 m-0 w-fit mt-9">
                <button className="bg-slate-950 transition-all duration-300 hover:bg-slate-500 text-slate-500 hover:text-slate-950 capitalize py-2 px-3 border hover:border-gray-800 border-slate-500 font-bold font-2xl m-auto rounded-2xl
            ">view my work</button>
            <button className="hover:bg-slate-950 transition-all duration-300 bg-slate-500 hover:text-slate-500 text-slate-950 capitalize py-2 px-3 border border-gray-800 hover:border-slate-500 font-2xl m-auto rounded-2xl
            ">get in touch</button></div>
        </div>
    )
}