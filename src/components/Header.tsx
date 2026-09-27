import { useState } from 'react';

import DarkmodeIcon from "../assets/icons/dark-mode.png";
import LightmodeIcon from "../assets/icons/light-mode.png";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <header className="hidden lg:block fixed top-4 right-4 z-50 w-[calc(100%-2rem)] max-w-2xl">
            <nav className="flex items-center justify-between px-4 py-2.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-lg font-mono text-sm">
                
                <div className="flex items-center gap-2">
                    <a href="#about" 
                        className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                        About
                    </a>
                    
                    <a href="#toolbox" 
                    className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                        Techstack
                    </a>

                    <a href="#projects" 
                        className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                        Projects
                    </a>
                    
                    <a href="#contact" 
                    className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                        Contact
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <button onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                        <img 
                            src={darkMode ? DarkmodeIcon : LightmodeIcon} 
                            alt={darkMode ? "Dark mode icon" : "Light mode icon"}
                            className="w-4 h-4 transition-transform duration-300 hover:rotate-12 invert brightness-200" 
                        />
                    </button>

                    <a href="/Earl_John_Bozar_RESUME.pdf"
                    target="_blank" rel="noreferrer"
                    className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black font-medium transition-all duration-200 shadow-sm active:scale-95"
                    >
                        Resume
                    </a>
                </div>

            </nav>
        </header>
    );
}