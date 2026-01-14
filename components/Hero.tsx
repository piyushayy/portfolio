"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-6 backdrop-blur-sm">
                        Available for opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Piyush Kaushik
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-zinc-400 mb-6 font-light">
                        Learning. Building. Improving—one project at a time.
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-zinc-500 mb-10 leading-relaxed">
                        I’m a Data Science and AI student exploring machine learning and data-driven problem solving through hands-on projects.
                        I’m focused on building a strong foundation in analytics, modeling, and applied AI concepts.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
                        >
                            View Work <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
