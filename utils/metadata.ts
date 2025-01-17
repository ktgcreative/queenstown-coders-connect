import { Metadata } from "next";

const BASE_URL = 'https://qtcc.co.nz';
const DEFAULT_KEYWORDS = [
    "Queenstown",
    "developers",
    "data scientists",
    "tech community",
    "New Zealand",
    "coding",
    "tech events",
    "software development"
];

type MetadataOptions = {
    title: string;
    description: string;
    keywords?: string[];
    image?: {
        url: string;
        width: number;
        height: number;
        alt?: string;
    };
};

export function createMetadata({
    title,
    description,
    keywords = [],
    image = {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
    }
}: MetadataOptions): Metadata {
    const fullTitle = title.includes("QT Coders") ? title : `${title} - QT Coders`;

    return {
        metadataBase: new URL(BASE_URL),
        title: fullTitle,
        description,
        keywords: [...DEFAULT_KEYWORDS, ...keywords],
        authors: [{ name: "QT Coders Connect", url: "https://qtcc.co.nz" }],
        openGraph: {
            title: fullTitle,
            description,
            url: BASE_URL,
            siteName: "QT Coders",
            images: [
                {
                    url: image.url,
                    width: image.width,
                    height: image.height,
                    alt: image.alt || fullTitle,
                },
            ],
            locale: "en-US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [image.url],
        },
    };
} 