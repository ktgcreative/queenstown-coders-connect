import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import HeroSection from "@/components/(landing-page)/HeroSection";
import CommunitySection from "@/components/(landing-page)/CommunitySection";
import JoinSection from "@/components/(landing-page)/JoinSection";

export const metadata: Metadata = createMetadata({
  title: "QT Coders",
  description: "Join Queenstown's vibrant tech community. Connect with local developers, attend meetups, share knowledge, and grow your skills in New Zealand's most beautiful setting.",
  keywords: ["Queenstown tech meetups", "developer community", "tech events", "coding community"]
});

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CommunitySection />
      <JoinSection />
    </main>
  );
}

