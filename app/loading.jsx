export default function Loading() {
    return (
        <div className="h-screen w-full bg-dark flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
                <p className="text-primary font-serif tracking-widest text-sm animate-pulse">LOADING</p>
            </div>
        </div>
    )
}
