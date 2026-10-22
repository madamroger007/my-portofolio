import { FolderSearch } from "lucide-react";

export default function CardBoxEmpty() {
    return (
        <div
            className="relative isolate flex w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/70 px-6 py-14 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-gray-900/80 dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:px-12"
            role="status"
            aria-live="polite"
        >
            <div className="pointer-events-none absolute -left-16 -top-20 -z-10 size-48 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-300/10" />
            <div className="pointer-events-none absolute -bottom-24 -right-12 -z-10 size-56 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-400/10" />

            <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-400/10 text-cyan-700 shadow-inner shadow-white/60 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200 dark:shadow-black/20">
                <FolderSearch className="size-8" strokeWidth={1.8} aria-hidden="true" />
            </div>

            <p className="mb-2 font-poppins text-xs font-bold uppercase tracking-[0.22em] text-cyan-700/80 dark:text-cyan-200/80">
                Portfolio update
            </p>
            <h2 className="font-poppins text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
                No projects here yet
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 dark:text-white/60">
                There are no projects in this category right now. Explore another
                category or check back soon for new work.
            </p>
        </div>
    );
}