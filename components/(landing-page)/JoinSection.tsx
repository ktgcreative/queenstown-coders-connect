"use client";

import React, { useState } from "react";
import { FaPaperPlane, FaSlack, FaDiscord, FaGithub } from "react-icons/fa";
import BackgroundGridBeams from "../shared/BackgroundGridBeams";
import { AnimateInView } from "../client/Animate";

const joinConfig = {
    title: "Join Our Community",
    subtitle: "Stay Connected & Updated",
    description: "Join our mailing list and community platforms to stay updated about upcoming meetups, events, and opportunities to connect with fellow tech enthusiasts.",
    socials: [
        {
            icon: FaSlack,
            name: "Slack",
            href: "#",
            color: "hover:text-[#4A154B]"
        },
        {
            icon: FaDiscord,
            name: "Discord",
            href: "#",
            color: "hover:text-[#5865F2]"
        },
        {
            icon: FaGithub,
            name: "GitHub",
            href: "#",
            color: "hover:text-[#333]"
        }
    ]
};

export default function JoinSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        interests: [] as string[],
        subscribe: true
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log("Form submitted:", formData);
    };

    const interests = [
        "Web Development",
        "Mobile Development",
        "Data Science",
        "Machine Learning",
        "DevOps",
        "Cloud Computing"
    ];

    return (
        <div id="join" className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-200">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <section className="relative z-20 py-20 md:py-36">
                    <AnimateInView>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-semibold sm:text-4xl mb-4">
                                {joinConfig.title}
                            </h2>
                            <h3 className="text-xl text-indigo-400 mb-6">
                                {joinConfig.subtitle}
                            </h3>
                            <p className="max-w-2xl mx-auto text-slate-400 text-lg">
                                {joinConfig.description}
                            </p>
                        </div>
                    </AnimateInView>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <AnimateInView delay={0.2}>
                            <div className="bg-gradient-to-br from-zinc-900/70 to-gray-800/70 p-8 rounded-xl border border-gray-500/20">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-gray-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-gray-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-3">
                                            Areas of Interest
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {interests.map((interest) => (
                                                <label
                                                    key={interest}
                                                    className="flex items-center space-x-2 text-sm"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.interests.includes(interest)}
                                                        onChange={(e) => {
                                                            const newInterests = e.target.checked
                                                                ? [...formData.interests, interest]
                                                                : formData.interests.filter((i) => i !== interest);
                                                            setFormData({ ...formData, interests: newInterests });
                                                        }}
                                                        className="rounded border-gray-500/20 bg-slate-800 text-indigo-500 focus:ring-indigo-500"
                                                    />
                                                    <span>{interest}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="subscribe"
                                            checked={formData.subscribe}
                                            onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                                            className="rounded border-gray-500/20 bg-slate-800 text-indigo-500 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="subscribe" className="text-sm">
                                            Subscribe to our newsletter for updates about meetups and events
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25"
                                    >
                                        <FaPaperPlane />
                                        Join the Community
                                    </button>
                                </form>
                            </div>
                        </AnimateInView>

                        <AnimateInView delay={0.4}>
                            <div className="space-y-8">
                                <div className="bg-gradient-to-br from-zinc-900/70 to-gray-800/70 p-8 rounded-xl border border-gray-500/20">
                                    <h3 className="text-xl font-semibold mb-4">Next Meetup</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-indigo-400 font-medium">When</p>
                                            <p className="text-slate-300">Every other Wednesday, 6:00 PM</p>
                                        </div>
                                        <div>
                                            <p className="text-indigo-400 font-medium">Where</p>
                                            <p className="text-slate-300">Venue TBD - Queenstown Central</p>
                                        </div>
                                        <div>
                                            <p className="text-indigo-400 font-medium">What to Expect</p>
                                            <p className="text-slate-300">Casual networking, tech talks, and refreshments</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-zinc-900/70 to-gray-800/70 p-8 rounded-xl border border-gray-500/20">
                                    <h3 className="text-xl font-semibold mb-4">Join Our Platforms</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {joinConfig.socials.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 rounded-lg border border-gray-500/20 bg-slate-800/50 px-4 py-2 transition-all duration-300 hover:scale-105 ${social.color}`}
                                            >
                                                <social.icon className="text-xl" />
                                                <span>{social.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimateInView>
                    </div>
                </section>
            </div>
            <BackgroundGridBeams />
        </div>
    );
} 