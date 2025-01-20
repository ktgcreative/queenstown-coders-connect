import React from "react";
import { FaCode, FaHandshake, FaMountain, FaLightbulb } from "react-icons/fa";
import { AnimateInView } from "../client/Animate";

const valuesConfig = {
    title: "Our Values",
    subtitle: "What Drives Our Community",
    values: [
        {
            icon: FaHandshake,
            title: "Community First",
            description: "We believe in the power of community and collaboration. Every member brings unique perspectives and experiences that enrich our collective knowledge.",
        },
        {
            icon: FaCode,
            title: "Knowledge Sharing",
            description: "We encourage open exchange of ideas, best practices, and learning opportunities through meetups, workshops, and collaborative projects.",
        },
        {
            icon: FaMountain,
            title: "Work-Life Balance",
            description: "Based in Queenstown, we understand the importance of balancing professional growth with the incredible lifestyle our region offers.",
        },
        {
            icon: FaLightbulb,
            title: "Innovation",
            description: "We strive to stay at the forefront of technology while fostering an environment that encourages experimentation and creative problem-solving.",
        },
    ],
};

export default function ValuesSection() {
    return (
        <div className="py-16">
            <AnimateInView>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{valuesConfig.title}</h2>
                    <p className="text-lg text-indigo-400">{valuesConfig.subtitle}</p>
                </div>
            </AnimateInView>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {valuesConfig.values.map((value, index) => (
                    <AnimateInView key={value.title} delay={index * 0.1}>
                        <div className="bg-gradient-to-br from-zinc-900/70 to-gray-800/70 p-8 rounded-xl border border-gray-500/20">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="p-3 rounded bg-indigo-500/10 text-indigo-400">
                                    <value.icon className="text-2xl" />
                                </span>
                                <h3 className="text-xl font-semibold">{value.title}</h3>
                            </div>
                            <p className="text-slate-300">{value.description}</p>
                        </div>
                    </AnimateInView>
                ))}
            </div>
        </div>
    );
}
