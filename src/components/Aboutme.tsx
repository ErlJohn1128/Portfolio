import Profile from "../assets/images/picture1.jpg";

export default function AboutMe() {
    return (
        <section id="about"
        className="min-h-screen px-8 py-2 lg:py-4 flex flex-col justify-center items-center"
        >
            <div className="mx-auto w-full max-w-5xl flex flex-col justify-start mt-10 lg:mt-0">

                {/* Header */}
                <p className="mb-3 font-mono text-[10px] lg:text-sm text-white/40 self-start">
                    01 / ABOUT
                </p>
                <h2 className="font-mono text-lg lg:text-4xl font-bold tracking-tight text-white self-start">
                    About me
                </h2>

                <div className="mt-8 w-full gap-5 lg:gap-18 flex flex-col-reverse lg:flex-row justify-center items-center">

                    <div className="flex flex-col justify-center items-center">
                        <p className="font-mono text-xs lg:text-lg text-justify leading-relaxed text-white/70">
                            I'm Earl John T. Bozar, a Computer Science student focused on
                            becoming a software developer. I enjoy building
                            things, solving problems, and understanding how
                            software works under the hood.
                        </p>

                        <p className="mt-6 font-mono text-xs lg:text-lg text-justify leading-relaxed text-white/50">
                            Right now, I'm exploring web development, backend
                            engineering, and algorithms while working on
                            projects that turn what I learn into something
                            practical.
                        </p>
                    </div>

                    <div className="w-[90%] rounded-lg border border-black shadow-[0_5px_10px_rgba(255,255,255,0.5)] bg-slate-300 flex justify-center items-center">
                        <img
                            className="rounded-lg object-cover h-full w-full border border-gray-300/20 backdrop-blur-sm"
                            src={Profile} 
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}