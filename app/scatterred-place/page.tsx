import { headers } from 'next/headers';

export default function ScatteredPlace() {
    const headersList = headers();
    const userAgent = headersList.get('user-agent') || '';
    const isAuthorized = userAgent === 'OmenKingdomAgent/1.0';

    // The flag is pulled from the server's environment variables
    const secretFlag = process.env.SCATTEREDFLAG || "FLAG_NOT_FOUND";

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center font-mono p-4 overflow-hidden relative text-neutral-200">
            {/* Omen-inspired smoky background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] animate-pulse"></div>

            <div className="z-10 max-w-2xl w-full border border-purple-500/30 bg-black/80 backdrop-blur-xl p-8 rounded-lg shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)]">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-black text-cyan-400 mb-2 tracking-tighter uppercase italic">
                        / / Scat<span className="text-purple-500">tered</span>_Place
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-purple-600 to-transparent"></div>
                </div>

                {/* Dynamic Content based on User-Agent */}
                <div className="space-y-6">
                    <p className="text-neutral-400 leading-relaxed border-l-2 border-purple-500/50 pl-4 italic">
                        {isAuthorized
                            ? "\"I am the beginning. I am the end.\""
                            : "\"You're in the wrong place, little bird.\""}
                    </p>

                    <div className={`p-6 rounded border transition-all duration-700 ${isAuthorized
                            ? "bg-cyan-950/20 border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                            : "bg-purple-950/30 border-purple-500/20"
                        }`}>
                        <code className="text-sm block leading-7">
                            <span className="text-purple-500 font-bold">[SYSTEM]:</span> STATUS_CHECK... <br />
                            <span className="text-purple-500 font-bold">[AGENT]:</span> {userAgent.slice(0, 30)}... <br />

                            {isAuthorized ? (
                                <div className="mt-4 animate-in fade-in slide-in-from-bottom-2 duration-1000">
                                    <span className="text-cyan-400 font-bold">[SUCCESS]:</span> IDENTITY_VERIFIED <br />
                                    <span className="text-green-400 text-lg mt-2 block tracking-widest bg-green-500/10 p-2 border border-green-500/20">
                                        {secretFlag}
                                    </span>
                                </div>
                            ) : (
                                <div className="mt-4">
                                    <span className="text-red-500 font-bold">[ERROR]:</span> ACCESS_DENIED <br />
                                    <span className="text-neutral-500 text-xs mt-2 block">
                                        HINT: Read the robots.txt instructions carefully.
                                    </span>
                                </div>
                            )}
                        </code>
                    </div>
                </div>

                {/* Omen / Monster Energy Style Triple-Eye Decor */}
                <div className="mt-12 flex justify-center relative group">
                    <div className="flex space-x-4 -skew-x-12">
                        <div className="w-2 h-16 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse"></div>

                        <div className="w-2 h-20 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_20px_rgba(34,211,238,0.9)] -mt-2 animate-pulse [animation-delay:200ms]"></div>

                        <div className="w-2 h-16 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse [animation-delay:400ms]"></div>
                    </div>
                    <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full scale-150 -z-10"></div>
                </div>
            </div>
        </div>
    );
}