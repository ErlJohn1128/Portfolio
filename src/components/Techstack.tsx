

import { useState } from 'react';

// Languages 
import CppIcon from "../assets/images/cpp.svg";
import PythonIcon from "../assets/images/python.svg";
import JavascriptIcon from "../assets/images/javascript.svg";
import TypescriptIcon from "../assets/images/typescript.svg";
import JavaIcon from "../assets/images/java.svg";

// Frontend
import ReactIcon from "../assets/images/react.svg";
import TailwindIcon from "../assets/images/tailwind.svg";
import HTMLIcon from "../assets/images/html.svg";
import CSSIcon from "../assets/images/css.svg";
import BootstrapIcon from "../assets/images/bootstrap.svg";

// Backend
import DjangoIcon from "../assets/images/django.svg";
import DjangoRESTIcon from "../assets/images/django-drf.svg";

// Tools
import GitIcon from "../assets/images/git.svg";
import GithubIcon from "../assets/icons/github.svg";

interface TechItem {
    name: string;
    icon: string;
    category: string;
}

export default function TechStack() {
    const [activeTab, setActiveTab] = useState<string>('ALL');

    const items: TechItem[] = [
        // Languages
        { name: "C++", icon: CppIcon, category: "LANGUAGES" },
        { name: "Python", icon: PythonIcon, category: "LANGUAGES" },
        { name: "JavaScript", icon: JavascriptIcon, category: "LANGUAGES" },
        { name: "TypeScript", icon: TypescriptIcon, category: "LANGUAGES" },
        { name: "Java", icon: JavaIcon, category: "LANGUAGES" },

        // Frontend
        { name: "HTML5", icon: HTMLIcon, category: "FRONTEND" },
        { name: "CSS", icon: CSSIcon, category: "FRONTEND" },
        { name: "React", icon: ReactIcon, category: "FRONTEND" },
        { name: "Tailwind CSS", icon: TailwindIcon, category: "FRONTEND" },
        { name: "Bootstrap", icon: BootstrapIcon, category: "FRONTEND" },
        
        // Backend
        { name: "Django", icon: DjangoIcon, category: "BACKEND" },
        { name: "Django REST", icon: DjangoRESTIcon, category: "BACKEND" },
        
        // Tools
        { name: "Git", icon: GitIcon, category: "TOOLS" },
        { name: "GitHub", icon: GithubIcon, category: "TOOLS" }
    ];

    const categories = ['ALL', 'LANGUAGES', 'FRONTEND', 'BACKEND', 'TOOLS'];

    const filteredItems = activeTab === 'ALL' ? items : items.filter(item => item.category === activeTab);

    return (
        <section id="toolbox" 
        className="min-h-screen px-4 py-8 overflow-hidden bg-black text-white mb-20"
        >
            <div className="mx-auto w-full max-w-5xl">

                {/* Header */}
                <p className="mb-3 font-mono text-[10px] lg:text-sm text-white/40">
                    02 / TECH STACK
                </p>
                <h2 className="font-mono text-lg lg:text-4xl font-bold tracking-tight">
                    Technologies
                </h2>

                {/* Toolbox Parent Container */}
                <div className="select-none cursor-pointer mt-6 lg:mt-8 rounded-2xl border border-white/10 bg-black-950/50 backdrop-blur-xl relative shadow-[0_2px_8px_rgba(255,255,255,0.5)] lg:shadow-[0_2px_25px_rgba(255,255,255,0.5)]">

                    {/* Header bar of Toolbox */}
                    <div className="bg-black mt-2 px-4 py-2 flex flex-col lg:flex-row items-start rounded-md justify-between gap-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500" />
                            <span className="w-2 h-2 lg:w-3 lg:h-3  rounded-full bg-yellow-500" />
                            <span className="w-2 h-2 lg:w-3 lg:h-3  rounded-full bg-emerald-500" />
                        </div>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-0.8 lg:gap-1.5 bg-white/3 p-1 rounded-lg border border-white/10">
                            {categories.map((cat) => (
                                <button key={cat} onClick={() => setActiveTab(cat)}
                                className={`px-3 py-1.5 rounded-md font-mono text-[5px] lg:text-xs transition-all duration-200 ${
                                activeTab === cat ? 'bg-white text-black font-semibold shadow-sm' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* The tools itself */}
                    <div className="bg-white/90 max-h-80 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 px-2 lg:px-8 py-2 lg:py-8 h-95 content-start overflow-y-auto custom-scrollbar [scrollbar-color:rgba(255,255,255,0.3)_transparent]">
                        {filteredItems.map((item) => (
                            <div key={item.name}
                            className="group relative flex items-center p-2 lg:p-4 gap-2 lg:gap-3.5 rounded-xl border border-white/10 bg-black/20 transition-all duration-300 hover:border-white/30 hover:bg-white/6 hover:-translate-y-0.5"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg/50 border border-white/5 transition-transform duration-300 group-hover:scale-110">
                                    <img 
                                        src={item.icon} 
                                        alt={item.name} 
                                        className="w-5 h-5 object-contain"
                                    />
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="font-mono text-sm font-medium text-black/80 group-hover:text-black transition-colors truncate">
                                        {item.name}
                                    </span>
                                    <span className="font-mono text-[10px] text-black tracking-wider">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
                        <span>SHOWING {filteredItems.length} OF {items.length} TECHNOLOGIES</span>
                    </div>

                </div>

            </div>
        </section>
    );
}