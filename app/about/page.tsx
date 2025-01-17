"use client";

import React from "react";
import BackgroundGridBeams from "@/components/shared/BackgroundGridBeams";
import AboutHero from "@/components/(about-page)/AboutHero";
import MissionSection from "@/components/(about-page)/MissionSection";
import ValuesSection from "@/components/(about-page)/ValuesSection";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-200 pt-16">
            <div className="absolute inset-0">
                <BackgroundGridBeams />
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                <AboutHero />
                <MissionSection />
                <ValuesSection />
            </div>
        </div>
    );
}