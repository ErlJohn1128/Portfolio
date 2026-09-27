import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import Landing from "./components/Landing.tsx";
import Aboutme from "./components/Aboutme.tsx";
import Techstack from "./components/Techstack.tsx";
import FeaturedProjects from "./components/FeaturedProjects.tsx";
import Contact from "./components/Contact.tsx";
import ContributionGraph from "./components/ContributionGraph.tsx";

export default function App() {

    const [mousePosition, setMousePosition] = useState({x: -200, y: -200});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <main className="relative min-h-screen overflow-hidden bg-black text-white">
            <div className="pointer-events-none fixed top-0 left-0 z-30 h-64 w-64 rounded-full bg-white/10 blur-3xl transition-transform duration-75 ease-out"
            style={{
                transform: `translate3d(${mousePosition.x - 128}px, ${mousePosition.y - 128}px, 0)`
            }}
            />
            
            <div className="fixed z-50 flex h-screen flex-col items-center bg-white/5 p-4 lg:p-8">
                <Sidebar />
            </div>

            <div className="ml-14 lg:ml-22 min-h-screen">
                <div>
                    <Header />
                </div>

                <div>
                    <Landing />
                </div>

                <div>
                    <Aboutme />
                </div>

                <div>
                    <Techstack />
                </div>

                <div>
                    <ContributionGraph />
                </div>

                <div>
                    <FeaturedProjects />
                </div>      
                
                <div>
                    <Contact />
                </div>  

                {/* Mobile View */}
                <div className="lg:hidden mb-15 flex flex-col justify-center items-center px-5 text-justify">
                    <p className="font-mono text-xs sm:text-sm text-white/70 mb-4">
                        Interested in my background or looking to collaborate? Check out my resume below:
                    </p>
                    <a href="/Earl_John_Bozar_RESUME.pdf"
                    className="bg-white px-8 py-2 text-black font-mono text-xs rounded-md"
                    >Resume</a>
                </div>  
                
            </div>
        </main>
   );
}

