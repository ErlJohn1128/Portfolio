import Github from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import Facebook from '../assets/icons/facebook.svg';
import Mail from '../assets/icons/mailgun.svg';
import Discord from '../assets/icons/discord.svg';

export default function Sidebar() {
   return (
        <aside className="inset-y-0 z-50 flex h-screen flex-col items-center">
            <div className=" font-mono text-lg font-semibold text-white">
                EJ
            </div>

            <div className="mt-auto flex flex-col items-center gap-5">
                <a href="https://github.com/ErlJohn1128"
                    target="_blank" rel="noreferrer"
                    className="text-white/50 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                >
                    <img
                        className="h-6 w-6 brightness-0 invert opacity-80 transition-all duration-300 hover:-translate-y-1 hover:opacity-100"
                        src={Github} alt="GitHub"
                    />
                </a>

                <a href="https://www.facebook.com/lovehannie1128"
                    target="_blank" rel="noreferrer"
                    className="text-white/50 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                >
                    <img 
                        className="h-6 w-6 brightness-0 invert opacity-80 transition-all duration-300 hover:-translate-y-1 hover:opacity-100"
                        src={Facebook} alt="Facebook" 
                    />
                </a>

                <a href="https://discord.com/users/1266635014104420373"
                    target="_blank" rel="noreferrer"
                    className="text-white/50 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                >
                    <img 
                        className="h-6 w-6 brightness-0 invert opacity-80 transition-all duration-300 hover:-translate-y-1 hover:opacity-100"
                        src={Discord} alt="Discord" 
                    />
                </a>


                <a href="mailto:erljohn004@gmail.com"
                    className="text-white/50 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                >
                    <img 
                        className="h-6 w-6 brightness-0 invert opacity-80 transition-all duration-300 hover:-translate-y-1 hover:opacity-100"
                        src={Mail} alt="Email"
                    />
                </a>

                <a href="https://www.linkedin.com/in/earl-john-bozar-009708387/"
                    target="_blank" rel="noreferrer"
                    className="text-white/50 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                >
                    <img 
                        className="h-6 w-6 brightness-0 invert opacity-80 transition-all duration-300 hover:-translate-y-1 hover:opacity-100"
                        src={Linkedin} alt="LinkedIn" 
                    />
                </a>
            </div>

            <div className="mt-6 h-24 w-px bg-white/40" />
       </aside>
   );
}