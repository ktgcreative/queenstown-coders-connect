"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuMountainSnow } from "react-icons/lu";

const heroConfig = {
    title: "About QT Coders",
    subtitle: "Building Queenstown's Tech Community",
    description: "We're a passionate community of tech professionals and enthusiasts, nestled in the heart of New Zealand's most beautiful region. Our mission is to connect, inspire, and grow together while enjoying the unique lifestyle that Queenstown offers.",
    stats: [
        { label: "Members", value: "20+" },
        { label: "Meetups", value: "Monthly" },
        { label: "Founded", value: "2024" },
        { label: "Events", value: "5+" }
    ]
};

export default function AboutHero() {
    return (
        <div className="relative py-20 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-block rounded bg-gradient-to-br from-slate-800 to-slate-950 p-3 text-4xl shadow-md shadow-indigo-900"
                >
                    <LuMountainSnow />
                </motion.span>
                <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                    {heroConfig.title}
                </h1>
                <p className="mb-4 text-xl text-indigo-400 sm:text-2xl">
                    {heroConfig.subtitle}
                </p>
                <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-300">
                    {heroConfig.description}
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 gap-8 sm:grid-cols-4"
                >
                    {heroConfig.stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="rounded-lg bg-gradient-to-br from-zinc-900/70 to-gray-800/70 p-4 text-center"
                        >
                            <p className="text-2xl font-bold text-indigo-400">{stat.value}</p>
                            <p className="text-sm text-slate-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
} 