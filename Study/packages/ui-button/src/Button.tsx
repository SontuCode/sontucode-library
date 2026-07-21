
interface ViewMoreButtonProps {
    text: string;
    href: string;
}

export function ViewMoreButton({ text, href }: ViewMoreButtonProps) {
    return (
        <div className="mt-8 mb-10 flex justify-center">
            <a
                href={href}
                className="group border-slate-200 text-slate-500/30 hover:text-slate-300 inline-flex items-center gap-2 rounded-md border bg-slate-900/20 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-slate-800/50"
            >
                View all {text}
            </a>
        </div>
    );
}
