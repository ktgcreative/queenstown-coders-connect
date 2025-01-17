import React from "react";
import { FaUsers, FaCode, FaCalendar, FaLaptop, FaMugHot, FaComments } from "react-icons/fa";
import BackgroundGridBeams from "../shared/BackgroundGridBeams";

const communityConfig = {
    icon: FaUsers,
    title: "Why We Exist",
    subtitle: "Building Queenstown's Tech Community",
    description: "Too many coding and data enthusiasts in Queenstown find themselves disconnected and isolated, especially if they work remotely. We're changing that by creating a friendly, welcoming space for tech-minded people to connect.",
};

export default function CommunitySection() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-200">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <section className="relative z-20 py-20 md:py-36 text-center">
                    <span className="mx-auto mb-3 block w-fit rounded bg-gradient-to-br from-slate-800 to-slate-950 p-3 text-3xl shadow-md shadow-indigo-900">
                        <communityConfig.icon />
                    </span>
                    <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">
                        {communityConfig.title}
                    </h2>
                    <p className="mb-6 text-base leading-snug text-indigo-400 sm:text-lg sm:leading-snug md:text-xl md:leading-snug">
                        {communityConfig.subtitle}
                    </p>
                    <p className="mb-12 text-base leading-snug text-slate-400 sm:text-lg sm:leading-snug max-w-2xl mx-auto">
                        {communityConfig.description}
                    </p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard
                            icon={<FaCalendar size={24} />}
                            title="Regular Meetups"
                            description="Fortnightly gatherings for casual networking, discussions, and sharing experiences in a relaxed environment."
                        />
                        <FeatureCard
                            icon={<FaMugHot size={24} />}
                            title="Casual Format"
                            description="Grab a coffee or beer, chat about coding trends, share your experiences, and make genuine connections."
                        />
                        <FeatureCard
                            icon={<FaComments size={24} />}
                            title="Tech Talks"
                            description="Optional lightning talks, project showcases, and panel discussions on topics that matter to our community."
                        />
                        <FeatureCard
                            icon={<FaCode size={24} />}
                            title="Code Together"
                            description="Collaborative coding sessions, pair programming, and problem-solving with fellow developers."
                        />
                        <FeatureCard
                            icon={<FaLaptop size={24} />}
                            title="Show & Tell"
                            description="Share your projects, get feedback, and learn from others in a supportive environment."
                        />
                        <FeatureCard
                            icon={<FaUsers size={24} />}
                            title="Inclusive Space"
                            description="Whether you're a seasoned dev or just starting, you're welcome here. No pressure, no strings attached."
                        />
                    </div>
                </section>
            </div>
            <BackgroundGridBeams />
        </div>
    );
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
    return (
        <div className="flex flex-col items-center rounded-xl border border-gray-500/20 bg-gradient-to-br from-zinc-900/70 to-gray-800/70 p-8 shadow-xl">
            <div className="mb-4 text-indigo-400">{icon}</div>
            <h3 className="mb-3 text-xl font-semibold">{title}</h3>
            <p className="text-center text-slate-400">{description}</p>
        </div>
    );
}; 