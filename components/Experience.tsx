"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Data Intern",
        company: "National Book Trust, Ministry of Education (Govt. of India)",
        period: "Jan 2025 – Mar 2025",
        description:
            "Worked on cleaning, transforming, and organizing structured datasets to improve data accuracy and consistency. Performed data analysis across multiple categories and sub-categories and created advanced Excel pivot tables and summary reports to support data-driven insights for internal stakeholders.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-zinc-800 -z-10" />

                            <div className="md:flex gap-12 items-start group">
                                <div className="hidden md:block w-32 pt-1 text-right text-sm text-zinc-500 font-mono shrink-0">
                                    {exp.period}
                                </div>

                                <div className="relative">
                                    {/* Dot */}
                                    <div className="absolute -left-[3.4rem] top-1.5 w-3 h-3 rounded-full bg-zinc-800 ring-4 ring-black group-hover:bg-blue-500 transition-colors hidden md:block" />

                                    <div className="md:hidden text-sm text-zinc-500 font-mono mb-1">
                                        {exp.period}
                                    </div>

                                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="text-zinc-400 mb-4">{exp.company}</div>
                                    <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
