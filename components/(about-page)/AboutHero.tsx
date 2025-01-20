import React from "react";
import { LuMountainSnow } from "react-icons/lu";
import { AnimateFadeUp, AnimateScale } from "../client/Animate";

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
            <AnimateFadeUp>
                <div className="text-center">
                    <AnimateScale>
                        <span className="mb-6 inline-block rounded bg-gradient-to-br from-slate-800 to-slate-950 p-3 text-4xl shadow-md shadow-indigo-900">
                            <LuMountainSnow />
                        </span>
                    </AnimateScale>
                    <AnimateFadeUp delay={0.2}>
                        <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                            {heroConfig.title}
                        </h1>
                    </AnimateFadeUp>
                    <AnimateFadeUp delay={0.3}>
                        <p className="mb-4 text-xl text-indigo-400 sm:text-2xl">
                            {heroConfig.subtitle}
                        </p>
                    </AnimateFadeUp>
                    <AnimateFadeUp delay={0.4}>
                        <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-300">
                            {heroConfig.description}
                        </p>
                    </AnimateFadeUp>

                    <AnimateFadeUp delay={0.5}>
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                            {heroConfig.stats.map((stat, index) => (
                                <AnimateScale key={stat.label} delay={0.6 + index * 0.1}>
                                    <div className="rounded-lg bg-gradient-to-br from-zinc-900/70 to-gray-800/70 p-4 text-center">
                                        <p className="text-2xl font-bold text-indigo-400">{stat.value}</p>
                                        <p className="text-sm text-slate-400">{stat.label}</p>
                                    </div>
                                </AnimateScale>
                            ))}
                        </div>
                    </AnimateFadeUp>
                </div>
            </AnimateFadeUp>
        </div>
    );
} 