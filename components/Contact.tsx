"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
                    <p className="text-zinc-400 text-lg mb-12">
                        I’m currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>

                    <Link
                        href="mailto:piyushkaushik121@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all hover:scale-105 mb-16"
                    >
                        <Mail size={20} />
                        Say Hello
                    </Link>

                    <div className="flex justify-center gap-8">
                        <Link href="https://github.com/piyushayy" className="text-zinc-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Github size={32} />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/piyush-kaushik-4b9863381/" className="text-zinc-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Linkedin size={32} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="https://twitter.com" className="text-zinc-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <Twitter size={32} />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

            <footer className="absolute bottom-0 w-full text-center py-6 text-zinc-600 text-sm">
                © {new Date().getFullYear()} Piyush Kaushik. All rights reserved.
            </footer>
        </section>
    );
}
