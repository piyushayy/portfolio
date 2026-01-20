"use client";

import { motion } from "framer-motion";
import {
    Code,
    Brain,
    Database,
    Layout,
    Terminal
} from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        icon: Code,
        skills: ["Python", "SQL", "JavaScript", "C++"],
    },
    {
        title: "AI & Machine Learning",
        icon: Brain,
        skills: ["PyTorch", "TensorFlow", "Computer Vision"],
    },
    {
        title: "Data Science",
        icon: Database,
        skills: ["Pandas", "NumPy", "Matplotlib", "Tableau", "Data Cleaning"],
    },
    {
        title: "Web Development",
        icon: Layout,
        skills: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    },
    {
        title: "Tools",
        icon: Terminal,
        skills: ["Git", "Windows", "Linux", "VS Code", "Unreal Engine"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Main Card Container simulating the image look */}
                <div className="bg-zinc-950/50 rounded-[2.5rem] border border-white/5 p-8 md:p-12 lg:p-16 backdrop-blur-sm relative overflow-hidden">

                    {/* Subtle background glow for the container */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">Skills</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300 group"
                            >
                                <div className="mb-5 p-3 rounded-full bg-white/5 text-zinc-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all duration-300">
                                    <category.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">{category.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {category.skills.join(" • ")}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
