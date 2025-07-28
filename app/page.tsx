'use client'
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-4 md:p-6 bg-[url('/learn-nextjs-bg.png')] bg-cover">
            <header className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 gap-4 md:gap-0">
                <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-between">
                    <AcmeLogo color="black" />
                    <nav aria-label="Main navigation" className="hidden md:flex gap-4">
                        <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                        >
                            Blog
                        </Link>
                    </nav>
                </div>
                <Link
                    href="/login"
                    className="rounded-3xl bg-blue-600 px-6 py-2 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full md:w-auto text-center"
                >
                    LOGIN
                </Link>
                <nav aria-label="Main navigation" className="flex md:hidden w-full justify-center mt-2 gap-4">
                    <Link
                        href="#"
                        className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
                    >
                        Blog
                    </Link>
                </nav>
            </header>

            <section className="flex flex-1 flex-col justify-center items-center w-full max-w-6xl mx-auto pb-10 md:pb-20 gap-6 md:gap-8">
                <div className="w-full flex justify-center my-2 md:my-4">
                    <picture>
                        <source
                            srcSet="/hero-desktop.png"
                            media="(min-width: 768px)"
                        />
                        <img
                            src="/hero-mobile.png"
                            alt="Hero"
                            className="w-full max-w-xs sm:max-w-md md:max-w-2xl rounded-xl md:rounded-2xl shadow-xl animate-fade-in"
                            style={{ objectFit: 'cover' }}
                        />
                    </picture>
                </div>
                <span className="text-white bg-white/20 w-fit px-3 md:px-4 py-1 rounded-3xl text-xs md:text-sm font-medium shadow">
                    🔥 We have made our pricing public.
                </span>
                <h1
                    className={`text-white text-2xl sm:text-3xl md:text-5xl font-extrabold text-center ${lusitana.className}`}
                >
                    <span className="block">Transform your business</span>
                    <span className="block">with our SaaS solution</span>
                </h1>
                <span className="text-white text-base sm:text-lg text-center max-w-xs sm:max-w-md md:max-w-xl">
                    Built for startups and enterprises. Unlock growth, efficiency, and innovation with our all-in-one platform.
                </span>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 md:mt-4 w-full sm:w-auto">
                    <Link
                        href="#"
                        className="bg-white text-blue-700 px-6 sm:px-8 py-2 sm:py-3 rounded-3xl font-semibold shadow hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-base sm:text-lg w-full sm:w-auto text-center"
                    >
                        Sign Up
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center justify-center gap-2 bg-transparent text-white px-6 sm:px-8 py-2 sm:py-3 rounded-3xl font-semibold border border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-base sm:text-lg w-full sm:w-auto"
                    >
                        Request a Demo
                        <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                </div>
            </section>
            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in {
                    animation: fade-in 1s ease;
                }
            `}</style>
        </main>
    );
}
