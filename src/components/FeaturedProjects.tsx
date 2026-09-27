import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import React from "../assets/images/react.svg";
import Django from "../assets/images/django.svg";
import Laravel from "../assets/images/laravel.svg";
import Java from "../assets/images/java.svg";

import project1 from "../assets/images/project1.png";
import project2 from "../assets/icons/github.svg";
import project3 from "../assets/icons/github.svg";

type Technology = {
    name: string;
    icon?: string;
};

type Project = {
    number: string;
    title: string;
    description: string;
    technologies: Technology[];
    image: string;
};

export default function FeaturedProjects() {
    
    const projects: Project[] = [
        {
            number: "01",
            title: "Grader",
            description:
                "A web-based grading system that helps teachers manage students, record grades, and track academic performance.",
            technologies: [
                { name: "React", icon: React },
                { name: "Django", icon: Django }
            ],
            image: project1,
        },
        {
            number: "02",
            title: "Finance App",
            description: "...",
            technologies: [
                { name: "Java", icon: Java }
            ],
            image: project2,
        },
        {
            number: "03",
            title: "Soonnn",
            description:
                "Campus space-management app that will maximize room schedules. Also, when professors are absent or traveling, they click a button on their phone to mark their class cancelled.",
            technologies: [
                { name: "Laravel", icon: Laravel },
                { name: "React Native", icon: React }
            ],
            image: project3,
        },
    ];

    const [current, setCurrent] = useState<number>(0);
    const [direction, setDirection] = useState<number>(0);

    const previousProject = () => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextProject = () => {
        setDirection(1);
        setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const getProject = (offset: number): Project => {
        return projects[(current + offset + projects.length) % projects.length];
    };

    console.log(current + "\n");

    const previous = getProject(-1);
    const project = getProject(0);
    const next = getProject(1);

    const slide = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50, opacity: 0, scale: 0.98,
        }),

        center: { x: 0, opacity: 1, scale: 1,
            transition: {
                x: { type: "spring" },
                opacity: { duration: 0.25 }, scale: { duration: 0.25 },
            }
        },

        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50, opacity: 0, scale: 0.98,
            transition: { duration: 0.2 },
        }),
    } as const;

    return (
        <section id="projects"
        className="flex min-h-screen px-4 py-12 flex-col items-center justify-center md:px-8"
        >
            <div className="mx-auto w-full max-w-5xl">
                <p className="mb-2 font-mono text-[10px] lg:text-xs text-white/40">
                    04 / PROJECTS
                </p>
                
                <h2 className="font-mono text-lg lg:text-4xl font-bold tracking-tight text-white">
                    Featured Projects
                </h2>

                <div className="relative mt-2 flex h-115 items-center justify-center">
            
                    {/* LEFT CARD */}
                    <button onClick={previousProject}
                    className="group absolute left-0 z-10 hidden max-w-[320px] scale-90 text-left opacity-40 transition-all duration-300 hover:scale-95 hover:opacity-75 md:block lg:left-[3%] xl:left-[6%]"
                    >
                        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
                            <div className="aspect-4/3 overflow-hidden bg-zinc-100">
                                <img
                                    src={previous.image}
                                    alt={previous.title}
                                    className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <span className="font-mono text-[10px] tracking-widest text-zinc-400">
                                    PROJECT_{previous.number}
                                </span>
                                <h3 className="mt-1 truncate font-mono text-base font-bold text-zinc-800">
                                    {previous.title}
                                </h3>
                            </div>
                        </div>
                    </button>

                    {/* CENTER CARD */}
                    <div className="relative z-20 w-full max-h-150 max-w-6xl overflow-hidden rounded-2xl border border-black/10 bg-slate-200 shadow-[0_10px_35px_rgba(0,0,0,0.7)] md:w-[72%]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div key={current}
                                custom={direction} variants={slide}
                                initial="enter" animate="center"
                                exit="exit" className="grid md:grid-cols-2"
                            >
                                {/* IMAGE */}
                                <div className="relative max-h-55 overflow-hidden bg-zinc-100 border-b border-zinc-200 md:min-h-95 md:border-b-0 md:border-r">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="select-none h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="flex flex-col justify-between p-6 md:p-8">
                                    <div>
                                    
                                        {/* HEADER */}
                                        <div className="select-none flex items-center justify-between">
                                            <span className="font-mono text-[6px] lg:text-[10px] tracking-widest text-zinc-400">
                                                PROJECT_{project.number}
                                            </span>
                                            <span className="font-mono text-[10px] text-zinc-400">
                                                {String(current + 1).padStart(2, "0")} /{" "}
                                                {String(projects.length).padStart(2, "0")}
                                            </span>
                                        </div>

                                        {/* TITLE */}
                                        <h3 className="mt-3 font-mono text-md lg:text-2xl font-bold text-zinc-900 md:text-3xl">
                                            {project.title}
                                        </h3>

                                        {/* DESCRIPTION */}
                                        <p className="mt-3 font-mono text-[8px] lg:text-xs leading-relaxed text-zinc-600 md:text-sm">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>

                                        {/* Technology Used in the Project */}
                                        <div className="mt-3 lg:mt-5 flex flex-wrap gap-1.5 select-none">
                                        {project.technologies.map((tech) => (
                                            <div key={tech.name}
                                            className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 font-mono text-[11px] font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-200"
                                            >
                                                {tech.icon && (
                                                    <img 
                                                        src={tech.icon}
                                                        className="h-3.5 w-3.5 opacity-80"
                                                    />
                                                )}
                                                <span>
                                                    {tech.name}
                                                </span>
                                            </div>
                                        ))}
                                        </div>

                                        <button onClick={() => alert("Havent yet uploaded the project")}
                                        className="select-none mt-4 lg:mt-6 border border-zinc-800 bg-zinc-900 px-3 lg:px-5 py-1.5 lg:py-2.5 font-mono text-[8px] text-xs font-semibold text-white transition-all duration-200 hover:bg-zinc-700">
                                            View project &rarr;
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT CARD */}
                    <button onClick={nextProject}
                    className="group absolute right-0 z-10 hidden max-w-[320px] scale-90 text-left opacity-40 transition-all duration-300 hover:scale-95 hover:opacity-75 md:block lg:right-[3%]"
                    >
                        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
                            <div className="aspect-4/3 overflow-hidden bg-zinc-100">
                                <img
                                    src={next.image}
                                    alt={next.title}
                                    className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <span className="font-mono text-[10px] tracking-widest text-zinc-400">
                                    PROJECT_{next.number}
                                </span>
                                <h3 className="mt-1 truncate font-mono text-base font-bold text-zinc-800">
                                    {next.title}
                                </h3>
                            </div>
                        </div>
                    </button>
                </div>

                {/* NAV */}
                <div className="mt-4 flex items-center justify-center gap-6">
                    <button onClick={previousProject}
                        className="p-2 font-mono text-xl text-white/40 transition hover:-translate-x-1 hover:text-white"
                    >
                        &lt;
                    </button>

                    <div className="font-mono text-[11px] tracking-widest text-white/40">
                        {String(current + 1).padStart(2, "0")} /{" "}
                        {String(projects.length).padStart(2, "0")}
                    </div>

                    <button onClick={nextProject}
                        className="p-2 font-mono text-xl text-white/40 transition hover:translate-x-1 hover:text-white"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}