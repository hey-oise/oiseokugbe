"use client"
import {useState, useRef, useEffect} from "react";
export default function About() {
    const ref = useRef(null);
      const [visible, setVisible] = useState(false);
        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                  if (entry.isIntersecting) {
                          setVisible(true);
                                }
                                    }, { threshold: 0.5 })
                                        if (ref.current) {
                                              observer.observe(ref.current);
                                                  }
                                                      return () => observer.disconnect();
                                                        }, [])
    return (
        <div ref={ref} className="bg-slate-900 h-100 border-b border-slate-800 pt-7 pl-6 flex flex-col gap-5 scroll-mt-20" id="about">
            <div className="flex flex-col max-w-80">
                <h2 className="capitalize font-bold text-2xl">About me</h2>
                <h3 className="capitalize font-semibold text-slate-200">Driven by curiosity.</h3>
                </div>
                <p className ="max-w-80 text-slate-400 md:max-w-100">I'm a software developer passionate about technology, problem-solving and building products that solve real-world problems.
                    I work across the frontend and backend, transforming ideas into functional, scalable applications.
                    I enjoy learning new technologies, experimenting with ideas and taking projects from concept to implementation.
                </p>
        </div>
    )
}