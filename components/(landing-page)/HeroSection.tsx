"use client";

import React from "react";
import BackgroundGridBeams from "../shared/BackgroundGridBeams";
import { LuMountainSnow } from "react-icons/lu";
import { motion } from "framer-motion";
import CodeCard from "../shared/CodeSection";


const heroConfig = {
    icon: LuMountainSnow,
    title: "Queenstown Coder's Connect",
    subtitle: "Where Tech Minds Meet Mountains",
    description: "Join a vibrant community of developers, data scientists, and tech enthusiasts in Queenstown. Share knowledge, build connections, and grow together in New Zealand's most beautiful backdrop.",
    cta: {
        primary: {
            text: "Join Our Community",
            href: "#join"
        },
        secondary: {
            text: "Learn More",
            href: "#why-we-exist"
        }
    },
    codeExamples: {
        tabs: [
            {
                label: "TypeScript",
                language: "typescript",
                code: `// Join our tech community in Queenstown
const developer = {
  interests: ["Web", "Data", "AI", "Cloud"],
  lookingFor: "Local Tech Community 🏔️",
  expectations: "No pressure, just code & coffee ☕"
};

community.join(developer);
// => Welcome to QT Coders! 🚀`
            },
            {
                label: "Python",
                language: "python",
                code: `# Join our tech community in Queenstown
developer = {
    "interests": ["Web", "Data", "AI", "Cloud"],
    "looking_for": "Local Tech Community 🏔️",
    "expectations": "No pressure, just code & coffee ☕"
}

community.join(developer)
# => Welcome to QT Coders! 🚀`
            }
        ],
        githubLink: {
            url: "https://github.com/qt-coders/community",
            stars: 42
        }
    }
};

export default function HeroSection() {
    return (
        <div className="relative min-h-[100vh] overflow-hidden bg-slate-950 text-slate-200 pt-16">
            <div className="mx-auto h-full max-w-7xl px-4 md:px-8">
                <section className="relative z-20 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 md:py-16">
                    <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center lg:text-left">
                                <motion.span
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-6 inline-block rounded bg-gradient-to-br from-slate-800 to-slate-950 p-3 text-4xl shadow-md shadow-indigo-900"
                                >
                                    <heroConfig.icon />
                                </motion.span>
                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                                >
                                    {heroConfig.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="mb-4 text-xl leading-snug text-indigo-400 sm:text-2xl sm:leading-snug"
                                >
                                    {heroConfig.subtitle}
                                </motion.p>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="mb-8 text-lg leading-relaxed text-slate-400 mx-auto lg:mx-0 lg:max-w-xl"
                                >
                                    {heroConfig.description}
                                </motion.p>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start gap-4"
                                >
                                    <a
                                        href={heroConfig.cta.primary.href}
                                        className="w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25"
                                    >
                                        {heroConfig.cta.primary.text}
                                    </a>
                                    <a
                                        href={heroConfig.cta.secondary.href}
                                        className="w-full sm:w-auto rounded-full border border-slate-700 bg-slate-900 px-8 py-3 text-lg font-medium text-slate-200 transition-all duration-300 hover:bg-slate-800"
                                    >
                                        {heroConfig.cta.secondary.text}
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="w-full max-w-2xl mx-auto"
                        >
                            <CodeCard
                                tabs={heroConfig.codeExamples.tabs}
                                githubLink={heroConfig.codeExamples.githubLink}
                            />
                        </motion.div>
                    </div>
                </section>
            </div>
            <BackgroundGridBeams />
        </div>
    );
}