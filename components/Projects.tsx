"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Sentinel AI | Proctoring System",
        description: "A real-time AI-driven examination monitoring system. Features head-pose estimation, multi-face detection, active window tracking, and automated evidence logging with time-based behavioral analysis.",
        tech: ["Python", "OpenCV", "MediaPipe", "PySide6", "PyGetWindow"],
        github: "https://github.com/piyushayy/Examination-Proctoring-System",
        demo: "#",
        image: "/sentinel-ai.png",
        color: "from-blue-500/20 to-purple-500/20"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col md:flex-row-reverse"
                        >
                            {/* Image Section */}
                            <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden shrink-0">
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 z-10`} />

                                {/* Image */}
                                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-grow md:w-3/5">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-blue-500/10 rounded-xl">
                                        <ShieldAlert className="text-blue-500" size={28} />
                                    </div>
                                    <div className="flex gap-4 z-10">
                                        <Link href={project.github} className="text-zinc-400 hover:text-white transition-colors">
                                            <Github size={22} />
                                        </Link>
                                        <Link href={project.demo} className="text-zinc-400 hover:text-white transition-colors">
                                            <ExternalLink size={22} />
                                        </Link>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 text-base mb-8 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-zinc-800/50 rounded-lg border border-white/5 text-xs font-mono text-zinc-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}