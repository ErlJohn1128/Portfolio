import { GitHubCalendar } from "react-github-calendar";

export default function ContributionGraph() {
    return (
        <section id="github"
            className="min-h-screen px-4 py-8 overflow-hidden bg-black text-white"
        >
            <div className="mx-auto w-full max-w-5xl">

                <p className="mb-3 font-mono text-[10px] lg:text-sm text-white/40">
                    03 / ACTIVITY
                </p>

                <h2 className="font-mono text-lg lg:text-4xl font-bold tracking-tight">
                    GitHub Activity
                </h2>

           
                <div className="relative mt-6 lg:mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl shadow-[0_2px_25px_rgba(255,255,255,0.12)]">

                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 lg:px-6">

                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-mono text-[10px] lg:text-xs text-white/60">
                                github.com/ErlJohn1128
                            </span>
                        </div>

                        <a href="https://github.com/ErlJohn1128"
                            target="_blank" rel="noreferrer"
                            className="font-mono text-[9px] lg:text-xs text-white/40 transition-colors hover:text-white"
                        >
                            VIEW PROFILE
                        </a>
                    </div>

                    <div className="relative bg-zinc-950/80 px-3 py-8 lg:px-8 lg:py-10">

                        <div className="mb-6 flex items-center justify-between">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 lg:text-xs">
                                Contribution Activity
                            </span>

                            <span className="font-mono text-[9px] text-white/30 lg:text-xs">
                                2026
                            </span>
                        </div>

                        {/* Graph */}
                        <div className="overflow-x-auto custom-scrollbar pb-2">
                            <div className="flex min-w-max justify-center">
                                <GitHubCalendar username="ErlJohn1128" colorScheme="dark"
                                className="font-serif p-4 rounded-md" />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-2">
                            <span className="font-mono text-xs text-white">
                                LESS
                            </span>

                            <div className="h-3 w-3 rounded-sm bg-zinc-800" />
                            <div className="h-3 w-3 rounded-sm bg-emerald-950" />
                            <div className="h-3 w-3 rounded-sm bg-emerald-700" />
                            <div className="h-3 w-3 rounded-sm bg-emerald-500" />
                            <div className="h-3 w-3 rounded-sm bg-emerald-300" />

                            <span className="font-mono text-xs text-white">
                                MORE
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-3">

                        <div className="border-r border-white/10 p-4">
                            <p className="font-mono text-[9px] text-white/30">
                                STATUS
                            </p>

                            <p className="mt-1 font-mono text-xs text-emerald-400">
                                ACTIVE
                            </p>
                        </div>

                        <div className="p-4 lg:border-r lg:border-white/10">
                            <p className="font-mono text-[9px] text-white/30">
                                PROFILE
                            </p>

                            <p className="mt-1 font-mono text-xs text-white/70">
                                @ErlJohn1128
                            </p>
                        </div>

                        <div className="hidden p-4 lg:block">
                            <p className="font-mono text-[9px] text-white/30">
                                SOURCE
                            </p>

                            <p className="mt-1 font-mono text-xs text-white/70">
                                GITHUB
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}