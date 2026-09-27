import background from "../assets/images/background.png";

export default function Landing() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Background Image */}
            <img src={background}
                alt="" className="absolute h-full w-full object-cover"
            />

            {/* Pagraph */}
            <div className="relative z-10 flex min-h-screen items-center px-8">
                <div className="mx-auto w-full max-w-5xl">
                    <p className="mb-4 font-mono text-[15px] lg:text-sm text-white/50">
                        Hi, my name is
                    </p>

                    <h1 className="font-mono text-4xl lg:text-6xl font-bold tracking-tight text-white">
                        Earl Bozar
                    </h1>

                    <p className="mt-6 max-w-2xl font-mono text-lg lg:text-xl leading-relaxed text-white/60 md:text-2xl">
                        I'm a Computer Science student and aspiring software
                        developer building practical things for the web.
                    </p>
                </div>
            </div>

        </section>
    );
}