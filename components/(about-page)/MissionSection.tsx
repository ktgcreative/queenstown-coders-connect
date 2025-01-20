import React from "react";
import { AnimateInView } from "../client/Animate";

const missionConfig = {
    title: "Our Mission",
    description: "To foster a vibrant, inclusive tech community in Queenstown where developers, data scientists, and tech enthusiasts can connect, learn, and grow together.",
    points: [
        "Building a supportive network for tech professionals",
        "Facilitating knowledge sharing and skill development",
        "Creating opportunities for collaboration and innovation",
        "Promoting work-life balance in tech careers"
    ]
};

export default function MissionSection() {
    return (
        <AnimateInView>
            <div className="py-16">
                <div className="bg-gradient-to-br from-zinc-900/70 to-gray-800/70 p-8 rounded-xl border border-gray-500/20">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{missionConfig.title}</h2>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                            {missionConfig.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {missionConfig.points.map((point, index) => (
                            <AnimateInView key={index} delay={index * 0.1}>
                                <div className="flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                                    <p className="text-slate-300">{point}</p>
                                </div>
                            </AnimateInView>
                        ))}
                    </div>
                </div>
            </div>
        </AnimateInView>
    );
} 